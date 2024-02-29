# Simple Payments Application (MERN Stack)

This repository contains a simple payments application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can sign up, log in with their email as username, transfer money between accounts, check their account balance, and perform other basic operations.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This application provides a basic framework for handling payments and user management. It includes backend APIs for user authentication, account management, and money transfers, as well as a frontend interface for user interaction.

## Features

- Secure JWT authentication middleware
- User signup, login, and profile update routes
- Account creation and balance checking routes
- Money transfer between accounts
- Users receive a random amount of money as a signup bonus
- Bulk user data retrieval

## Folder Structure

The project is organized into two main folders: `frontend` and `backend`.

- `frontend`: Contains the React.js frontend code.
- `backend`: Contains the Node.js backend code.

The backend folder includes the following files and folders:

- `config.js`: Configuration file for JWT secret key.
- `db.js`: Database configuration file for connecting to MongoDB.
- `middleware.js`: Middleware for JWT authentication.
- `routes`: Folder containing route files for different endpoints.
  - `index.js`: Main router file for all routes.
  - `account.js`: Router file for account-related routes (e.g., transfer, balance).
  - `user.js`: Router file for user-related routes (e.g., signup, signin, profile update).
  - `update.js`: To Update user data
  
## Backend

The backend is built using Node.js and Express.js, with MongoDB as the database. It provides RESTful APIs for user authentication, account management, and other operations.

## Frontend

The frontend is built using React.js and communicates with the backend APIs to provide a user interface for interacting with the application.

## API Endpoints

- Account Routes: `http://localhost:3000/api/v1/account/`
- User Routes: `http://localhost:3000/api/v1/user/`

For detailed API documentation, please refer to the backend route files.

## Installation

To install and run the application, follow these steps:

1. Clone the repository
    `git clone https://github.com/svk091/PaymentsApp.git`
3. Navigate to the `backend` folder and install dependencies: `cd backend && npm install`
4. Add your MongoDB connection URI in /backend/db.js .
5. Start the backend server from /backend: `node index.js`
6. Navigate to the `frontend` folder and install dependencies: `cd ../frontend && npm install`
7. Start the frontend server: `npm run dev`

## Usage

Once the backend and frontend servers are running, you can access the application at `http://localhost:5173/signup` or Signin at `http://localhost:5173/signin`. Use the provided API endpoints to perform various operations.
