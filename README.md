# tecnique

# Task Manager API

The Task Manager API is a simple Express.js application that allows you to manage tasks and user authentication. It provides endpoints for creating, reading, updating, and deleting tasks, as well as user registration and login.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file and set the `mongoUrl` variable to your MongoDB connection URL.
4. Run the server using `npm run server`.

## Deployed Link 
https://tecnique-wi86.onrender.com/

## Explaination Video 
https://vimeo.com/872519534/0abb594c0e?share=copy

## Postman collections 
https://restless-shadow-616131.postman.co/workspace/my-workspace~92abef05-2c5d-484c-b7cb-12aa4c6b2c4f/collection/24260844-9b422da7-2ee2-4ac8-bf13-4fb7822859f2?action=share&creator=24260844

## API Endpoints

- `POST /register`: Register a new user by providing an email and password in the request body.

- `POST /login`: Log in with an existing user by providing valid credentials in the request body.

- `POST /tasks`: Create a new task by sending task data in the request body.

- `GET /tasks`: Retrieve all tasks from the database.

- `GET /tasks/:id`: Retrieve a specific task by providing its ID in the URL.

- `PUT /tasks/:id`: Update a task by providing its ID in the URL and updated data in the request body.

- `DELETE /tasks/:id`: Delete a task by providing its ID in the URL.

## Middleware

- Authentication: Protects routes by verifying JSON Web Tokens (JWT) in the request headers.

## Rate Limiting

Requests to the API are rate-limited to prevent abuse. Each IP address is limited to 10 requests per minute.

## Dependencies

- Express.js
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv
- express-rate-limit

## Running the Application

To run the application, make sure you have MongoDB installed and running. Then, start the server using `npm run server`.

## Author

Harshit Sahu

