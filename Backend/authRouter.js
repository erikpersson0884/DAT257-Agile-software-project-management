import { Router } from 'express';
import fs from 'fs';


const authRouter = Router();

const pathToUsersFile = './data/users.json';
const pathToAdminKeysFile = './data/adminKeys.json';
const lifeTimeForAdminKeys = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds


authRouter.post('/login', (req, res) => {
    const username = req.body.username; // Extract username from request body
    const password = req.body.password; // Extract password from request body

    let users = fs.readFileSync(pathToUsersFile, 'utf8');
    users = JSON.parse(users); // Parse the JSON string into an object


    if (credentialsIsValid(username, password)) {
        let adminKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const user = users.find(user => user.username === username && user.password === password);
        saveAdminKey(adminKey, user.id);
        res.status(200).json({ adminKey: adminKey, user: user }); // Send the content back to the client
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

authRouter.post('/testAdminKey', (req, res) => {
    const adminKey = req.body.adminKey; 
    if (!isAdminKeyValid(adminKey)) return res.status(401).json("Adminkey is not valid");

    const user = getUserFromAdminKey(adminKey);
    res.status(200).json({ user: user});
});



function saveAdminKey(adminKey, id) {
    const currentDate = new Date().toISOString();
    const adminKeyData = { key: adminKey, id: id, date: currentDate };

    // Read existing admin keys from file, or create an empty array if the file doesn't exist
    let adminKeys = [];
    if (fs.existsSync(pathToAdminKeysFile)) {
        adminKeys = JSON.parse(fs.readFileSync(pathToAdminKeysFile, 'utf8'));
    }

    // Add the new admin key data to the array
    adminKeys.push(adminKeyData);

    // Write the updated admin keys array back to the file
    fs.writeFileSync(pathToAdminKeysFile, JSON.stringify(adminKeys, null, 2));
}

function credentialsIsValid(username, pass) {
    let userCredentials = fs.readFileSync(pathToUsersFile, 'utf8');
    userCredentials = JSON.parse(userCredentials); // Parse the JSON string into an object

    for (const user of userCredentials) {
        if (user.username === username && user.password === pass) {
            return true;
        }
    }
    return false;
}




export function userHasPermission(adminKey, accountType) {
    const userAccountType = getAccountTypeFromAdminKey(adminKey);
    
    if (Array.isArray(accountType)) {
        // If accountType is an array, check if the user's account type matches any of the account types in the array
        return accountType.includes(userAccountType);
    } else {
        // If accountType is a string, check if the user's account type matches the specified account type
        return userAccountType === accountType;
    }
}

export function getUserFromUserId(userId) {
    let userCredentials = fs.readFileSync(pathToUsersFile, 'utf8');
    userCredentials = JSON.parse(userCredentials);
    const user = userCredentials.find(user => user.id === userId);
    return user;
}


export function getUserFromAdminKey(adminKey) {
    const validAdminKeys = JSON.parse(fs.readFileSync(pathToAdminKeysFile, 'utf8'));
    // Find the admin key in the adminKeys array
    const adminKeyData = validAdminKeys.find(keyData => keyData.key === adminKey);
    if (!adminKeyData) {
        return null; // Admin key not found
    }

    // Find the user with the same username as the admin key
    let userCredentials = fs.readFileSync(pathToUsersFile, 'utf8');
    userCredentials = JSON.parse(userCredentials); // Parse the JSON string into an object
    const user = userCredentials.find(user => user.id === adminKeyData.id);

    return user;
}   

export function getUsernameFromAdminKey(adminKey) {
    const user = getUserFromAdminKey(adminKey);
    return user.username;
}

export function getAccountTypeFromAdminKey(adminKey) {
    const user = getUserFromAdminKey(adminKey)
    return user.accountType;
}

export function getUserIdFromAdminKey(adminKey) {
    const user = getUserFromAdminKey(adminKey);
    return user.id;
}



export function isAdminKeyValid(adminKey) {
    const currentDate = new Date();
    const validAdminKeys = JSON.parse(fs.readFileSync(pathToAdminKeysFile, 'utf8'));

    const adminKeyData = validAdminKeys.find(keyData => keyData.key === adminKey);
    if (!adminKeyData) {
        return false; // Admin key not found
    } 

    if (getUserFromAdminKey(adminKey) === undefined) return false;

    // Parse the saved date and compare it with ten days ago
    const savedDate = new Date(adminKeyData.date);
    const validTimeForAdminKey = new Date(currentDate - lifeTimeForAdminKeys);

    return savedDate >= validTimeForAdminKey;
}


export default authRouter;