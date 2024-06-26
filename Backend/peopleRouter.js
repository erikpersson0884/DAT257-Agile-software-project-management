import { Router } from 'express';
import fs from 'fs';


import { isAdminKeyValid, userHasPermission, pathToUsersFile, getUserFromUserId, getUserIdFromAdminKey } from './authRouter.js'
import { get } from 'http';



const peopleRouter = Router();

peopleRouter.post('/getUsers', (req, res) => {
	if (!isAdminKeyValid(req.body.adminKey)) return res.status(403).send("Adminkey not valid");
	if (!userHasPermission(req.body.adminKey, "admin")) return res.status(403).send("User does not have permission to view users");
	const adminKey = req.body.adminKey;	

	if (!isAdminKeyValid(adminKey)) return res.status(403).send("Adminkey not valid");

	let users = fs.readFileSync(pathToUsersFile, 'utf8');
	users = JSON.parse(people);
	if (userHasPermission(adminKey, "admin")) {
		users.sort((a, b) => {
			if (a.id === getUserIdFromAdminKey(adminKey)) return -1;
			if (b.id === getUserIdFromAdminKey(adminKey)) return 1;
			return 0;
		});
	}

	res.status(200).send(users);
});

peopleRouter.post('/getUser', (req, res) => {
	if (!isAdminKeyValid(req.body.adminKey)) return res.status(403).send("Adminkey not valid");
	const adminKey = req.body.adminKey;

	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);

	const userId = getUserIdFromAdminKey(adminKey);
	const user = people.find(user => user.id === userId);
	return res.status(200).send(user);
});

peopleRouter.post('/updateUser', (req, res) => {
	const adminKey = req.body.adminKey;
	if (!isAdminKeyValid(adminKey)) return res.status(403).send("Adminkey not valid");
	if (getUserIdFromAdminKey(adminKey) !== req.body.user.id) return res.status(403).send("Adminkey does not match user requested to change");
	
	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);

	if (!people.find(user => user.id === req.body.userId)) return res.status(404).send("user not found!");

	const userIndex = people.findIndex(user => user.id === req.body.userId);
	
	people[userIndex].name = req.body.name;
	people[userIndex].password = req.body.password;
	
	if (userHasPermission(adminKey, "admin") && req.body.accountType) {
		people[userIndex].accountType = req.body.accountType;
	}

	fs.writeFileSync(pathToUsersFile, JSON.stringify(people, null, 2), 'utf8');
	res.status(200).send(people[userIndex]);
});

peopleRouter.post('/addUser', (req, res) => {
	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);
	if (req.body.email === "" || req.body.password === "") return res.status(400).send("email and password are required");

	let newUser = {
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		password: req.body.password,
		accountType: "user",
		id: Date.now() + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	};

	people.push(newUser);
	fs.writeFileSync(pathToUsersFile, JSON.stringify(people, null, 2), 'utf8');
	res.status(200).send("user added successfully!");
});

peopleRouter.post('/removeUser', (req, res) => {
	if (!isAdminKeyValid(req.body.adminKey)) return res.status(403).send("Adminkey not valid");
	// if (getUserIdFromAdminKey(req.body.adminKey) !== req.body.user.id) return res.status(403).send("Adminkey does not match user requested to remove");

	let people = fs.readFileSync(pathToUsersFile, 'utf8');
	people = JSON.parse(people);

	if (!people.find(user => user.id === getUserIdFromAdminKey(req.body.adminKey))) return res.status(404).send("user not found!");

	people = people.filter(user => user.id !== getUserIdFromAdminKey(req.body.adminKey));

	fs.writeFileSync(pathToUsersFile, JSON.stringify(people, null, 2), 'utf8');
	res.status(200).send("user removed successfully!");
});


export default peopleRouter;