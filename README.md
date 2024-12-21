# Express.js Unhandled Promise Rejection

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  Improper error handling can lead to unexpected behavior and crashes.

## Bug Description

The `bug.js` file contains an Express.js application with a route handler that performs an asynchronous operation.  If the asynchronous operation fails, the error is logged to the console, but the application doesn't send an appropriate error response to the client, resulting in a silent failure.

## Solution

The `bugSolution.js` file provides a corrected version of the application with proper error handling. It utilizes a try...catch block to handle potential errors in the asynchronous operation and sends an appropriate error response to the client if an error occurs.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to run the buggy application.
5. Run `node bugSolution.js` to run the corrected application.