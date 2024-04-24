import { Router } from 'express';
import fs from 'fs';


import { isAdminKeyValid, userHasPermission, pathToUsersFile, getUserFromUserId, getUserIdFromAdminKey } from 'authRouter.js'


const peopleRouter = Router();

peopleRouter.post('/getPeople', (req, res) => {
	const adminKey = req.body.adminKey;	

	if (!isAdminKeyValid(adminKey)) return res.status(403).send("Adminkey not valid");
	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);
	if (userHasPermission(adminKey, "admin")) {
		people.sort((a, b) => {
			if (a.id === getUserIdFromAdminKey(adminKey)) return -1;
			if (b.id === getUserIdFromAdminKey(adminKey)) return 1;
			return 0;
		});
	}

	if (userHasPermission(adminKey, "admin")) {
		res.status(200).send(people);
		logEvent({
			event: "People list requested by admin",
			user: getUserIdFromAdminKey(adminKey),
			adminKey: adminKey
		});
	} else if (userHasPermission(adminKey, "pr")) {
		people = people.filter(person => person.id === getUserIdFromAdminKey(adminKey));
		res.status(200).send(people);
		logEvent({
			event: "People list requested by pr",
			user: getUserIdFromAdminKey(adminKey),
			adminKey: adminKey
		});
	} else {
		res.status(403).send();
		logEvent({
			event: "People list requested by user without permission",
			user: getUserIdFromAdminKey(adminKey),
			adminKey: adminKey
		});
	}
});

peopleRouter.post('/updatePerson', (req, res) => {
	const adminKey = req.body.adminKey;
	if (!isAdminKeyValid(adminKey)) return res.status(403).send("Adminkey not valid");
	if(userHasPermission(adminKey, "pr") && req.body.userId !== getUserIdFromAdminKey(adminKey)) return res.status(403).send("User does not have permission to update account type to admin");

	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);

	if (!people.find(person => person.id === req.body.userId)) return res.status(404).send("Person not found!");

	const personIndex = people.findIndex(person => person.id === req.body.userId);
	
	people[personIndex].username = req.body.username;
	people[personIndex].password = req.body.password;
	
	if (userHasPermission(adminKey, "admin") && req.body.accountType) {
		people[personIndex].accountType = req.body.accountType;
	}

	fs.writeFileSync(pathToUsersFile, JSON.stringify(people, null, 2), 'utf8');
	res.status(200).send(people[personIndex]);
		
	logEvent({
		event: "Person updated",
		userUpdated: req.body.userId,
		updateDoneByUser: getUserIdFromAdminKey(adminKey),
		adminKey: adminKey
	});
});

peopleRouter.post('/addPerson', (req, res) => {
	if (!isAdminKeyValid(req.body.adminKey)) return res.status(403).send("Adminkey not valid");
	if(!userHasPermission(req.body.adminKey, "admin")) return res.status(403).send("User does not have permission to add people");

	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);

	let newPerson = {
		username: req.body.username,
		password: req.body.password,
		accountType: req.body.accountType,
		id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	};

	people.push(newPerson);
	fs.writeFileSync(pathToUsersFile, JSON.stringify(people, null, 2), 'utf8');
	res.status(200).send("Person added successfully!");
	logEvent({
		event: "Person added",
		userAdded: newPerson.id,
		addedByUser: getUserIdFromAdminKey(req.body.adminKey),
	});
});

peopleRouter.post('/removePerson', (req, res) => {
	if (!isAdminKeyValid(req.body.adminKey)) return res.status(403).send("Adminkey not valid");
	if(!userHasPermission(req.body.adminKey, "admin")) return res.status(403).send("User does not have permission to remove people");

	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);

	if (!people.find(person => person.id === req.body.id)) return res.status(404).send("Person not found!");

	people = people.filter(person => person.id !== req.body.id);

	fs.writeFileSync(pathToUsersFile, JSON.stringify(people, null, 2), 'utf8');
	res.status(200).send("Person removed successfully!");

	logEvent({
		event: "Person removed",
		userRemoved: getUserFromUserId(req.body.id),
		removedByUser: getUserIdFromAdminKey(req.body.adminKey),
		adminKey: req.body.adminKey
	});
});


export default peopleRouter;