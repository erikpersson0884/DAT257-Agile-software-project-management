# DAT257 - Agile-software-project-management

## Erik Persson, Isac Snecker, Emil Svensjö, Isak Söderlind, Adrian Wirthgen, Pontus Wikström, David Lewis, Frida Sunderlin

![Github version](https://img.shields.io/badge/version-0.0.0-darkblue?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/erikpersson0884/DAT257---Agile-software-project-management?color=blue&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/erikpersson0884/DAT257---Agile-software-project-management?color=darkgreen&style=flat-square)

-- Launch website --

1. Make sure nodeJS is installed.
2. Run "npm update" to install the needed dependencies.
3. Run "npm start" in root directory.
4. Launch the provided link in browser.

Our github repo for the course DAT257 - Agile-software-project-management


## Login system

Api endpoints:

* auth/
    * /login - takes a json object of username and password, returns a adminKey which can be used to 

    * /testAdminKey - Takes a json object containing a adminKey, and returns a boolean depending on the validity of the adminKey
    

## People management system

* people/

    handles user management, currently works towards a json file using the following sctucture:
    
        {
            "name": "John",
            "surname": "johnsson",  
            "email": "johnthecoolguy@gmail.com",
            "password": "massivepeepoo",
            "id": "1"
        }

    * /getUsers - Takes a adminKey and returns a list of all users, if 
        - the key is valid
        - The user has accountype "admin"

    * /getUser - Takes a adminKey and returns a json object of that user in the format mentioned previously.

    * /addUser - Takes a json object containing name, password and email and creates a new user with accountType "user" and a randomized userId.

    * /updateUser - Takes a user and a adminKey as a json object and updates it if 2 conditions are met: 
        - The adminKey is valid
        - The adminKey matches the userId

    * /removeUser - Takes a adminKey and a userId and removes the user if:
        - The adminKey is valid.
        - The adminKey matches the user requested to be removed.
    

