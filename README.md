# Description 
Go Courses is an E-Learning Platform that enables users to share knolowdge togther.
it's build by using react.js for frontend and Django for the backend.

# Installation
1- [Install docker compose](https://docs.docker.com/compose/install/) 
2-Clone this repository

```
git clone https://code.tamkeen.cloud/projects/QT/repos/team10-deployment/browse 

```
3-Run 
```docker-compose run backend python3 manage.py makemigrations
```
then 
```
docker-compose run backend python3 manage.py migrate
```
```
docker-compose up
```
# Details
This app include 3 services:
* Postgres - for database
* Backend - Django
* Frontend - React.js