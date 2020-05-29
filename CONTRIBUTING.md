# Welcome to the contributions of The Abhyudaya

We follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Requirements 
- [Python3.8](https://www.python.org/downloads) and above
- virtualenv, For installingvirtualenv, type the following command ```pip install virtualenv```
- [Node.js](https://nodejs.org/en/download/)
- Yarn package manager, A guide for installation of the yarn package manager for [Windows](https://classic.yarnpkg.com/en/docs/install#windows-stable), [Linux](https://classic.yarnpkg.com/en/docs/install/#debian-stable), [MacOS](https://classic.yarnpkg.com/en/docs/install#mac-stable)

## Setup and running of project (Backend)

- Create a folder to keep env and clone of the repo.
- Navigate to the folder and setup virtual environment using <br>
```bash
  python -m virtualenv env
 ```
 - Then activate the environment using <br>
  `source env/Scripts/activate` (Use only `env/Scripts/activate` if on cmd or powershell)
- For Linux Users it will be `source env/bin/activate`
- Fork the repo and clone it in the same folder.
- Navigate to the cloned repo and the run the commands:<br>
```bash 
pip install -r requirements.txt
pre-commit install
```
- This will setup the project requirements and pre-commit test hooks!
### Project Directory structure
```bash
   your-folder
   |-env
   |-OnlineEvent
     |-requirements.txt
     |-.pre-commit-config.yaml
     |-
     |-
```

- After the above setup, run <br>
```bash
  python manage.py makemigrations
  python manage.py migrate
```

- Start the backend server
  `python manage.py runserver`
  Runs the backend server at default port `8000`.<br />
  Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
  
### Note
- If you are adding any new requirements for the project, make sure that you are adding it to ```requirements.txt```


## Setup and running of project (Frontend)

- At your root directory run `yarn install` to install all the dependencies
- To start react dev server `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### Note

- Use only `yarn add package_name` to add new packages to the frontend part.
