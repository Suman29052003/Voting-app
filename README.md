#  Full-Stack Voting System

## Overview
Welcome to the Full-Stack Voting System project, developed as part of an internship at Next24 Tech Company. This project aims to create a secure, efficient, and user-friendly voting system that allows users to cast votes and view candidates. Admin users have additional privileges to manage candidate data.

### Table of Contents
* Features
* Technologies Used
* Setup and Installation
* Usage
* API Endpoints
* Folder Structure
* Contributing
* License

## Features
* User Authentication and Authorization
* Profile Management
* Update password
* Voting System
* View candidates
* Cast votes (restricted to non-admin users)
* Admin Privileges
    * can't Vote
    * Add 
    * update
    * and delete candidate data
* Responsive UI for seamless user experience

## Technologies Used
##  Frontend
*   React.js: A JavaScript library for building user interfaces
*   Tailwind CSS: A utility-first CSS framework for rapid UI development
*   Axios: A promise-based HTTP client for making requests to the backend
*   React Router: A library for routing in React applications
*   React Toastify: A library for providing notifications to users

## Backend 
*   Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine
*   Express.js: A fast, unopinionated, minimalist web framework for Node.js
*   MongoDB: A NoSQL database for storing user and candidate data
*   Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js
*   bcrypt: A library for hashing passwords
*   jsonwebtoken: A library for creating and verifying JSON Web Tokens (JWT) for 
*   authentication

## Miscellaneous
Postman: A collaboration platform for API development

## Setup and Installation
### Prerequisites
* Node.js (v14.x or higher)
* MongoDB (local or remote instance)

### Installation
1. Clone the repository:
```
    git clone https://github.com/Suman29052003/Voting-app.git
    cd voting-system
```
2. Install backend dependencies:
```
    cd /server
    npm install
```
3.Install frontend dependencies:
```
    cd /client
    npm install
```
4. Run the backend server:
```
    cd server
    npm start
```
5. Run the frontend server:
```
    cd ../client
    npm start
```

## Usage
### Running the Application

* Open your browser and navigate to http://localhost:3000
* Register a new user or log in with existing credentials
* Admin users can manage candidates, while non-admin users can view candidates and cast votes

## API Endpoints
### Authentication

* POST /auth/register: Register a new user
* POST /auth/login: Authenticate a user and return a JWT

### User

* GET /user/profile: Get the profile of the logged-in user
* PUT /user/profile/password: Update the password of the logged-in user

### Candidate

* GET /candidate: Get a list of all candidates
* POST /candidate: Add a new candidate (admin only)
* PUT /candidate/:candidateID: Update candidate data (admin only)
* DELETE /candidate/:candidateID: Delete a candidate (admin only)
* POST /candidate/vote/:candidateID: Cast a vote for a candidate (non-admin only)

## Contributing
We welcome contributions from the community. To contribute:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Commit your changes and push to your fork
4. Create a pull request to the master branch of this repository

### **Note: This project uses the master branch as the default branch.**

## License
This project is licensed under the MIT License. See the LICENSE file for details.
