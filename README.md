Redux and RTK Query with Vite
This project demonstrates how to set up and use Redux and RTK Query in a Vite project to interact with a mock API for fetching, updating, and adding data.

Prerequisites
Before getting started, make sure you have the following installed:

Node.js (for running the project)
Vite (to create a fast development environment)
Familiarity with React, Redux, and basic API handling
Installation
Set up a Vite project: Start by creating a new Vite project and navigating into the project directory.
Install Redux and RTK Query: You'll need to install @reduxjs/toolkit and react-redux to manage state using Redux and interact with APIs through RTK Query.
Setting up Redux and RTK Query
Create the Redux store: First, set up a Redux store that integrates RTK Query. The store will handle state and middleware for the API interactions.

Create an API slice with RTK Query: In the apiSlice file, define your endpoints for fetching, adding, and updating data. This will configure how RTK Query interacts with your mock API.

Provider Setup: Wrap your entire application in the Redux Provider component so that the store is available across your app.

Mock API Interaction
Fetching Data: Use RTK Query's useQuery to fetch data from your mock API. The hook will automatically manage the request and response lifecycle.
Adding Data: To add data, use the useMutation hook, which handles sending data to the API and updating the Redux store with the new entry.
Updating Data: Similarly, you can update existing data using another mutation endpoint that sends a PATCH or PUT request to the mock API.
Running the Project
Start the Vite server: After setting up Redux and RTK Query, start the Vite development server using the command npm run dev. The app will be available at a local development URL

Mock API: https://dummyjson.com
