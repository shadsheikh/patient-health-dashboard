# Patient Health Dashboard for Prior Authorization
https://health-deshboard.netlify.app/
![image](https://github.com/user-attachments/assets/0f5b971b-688a-42ad-9627-7a65264f1df0)

## Overview

This is a full-stack application built using React, Node.js, Express, and MongoDB. Healthcare providers can use the app to view patient data and manage prior authorization requests for treatments.

## Technologies Used

#### Frontend: React, Axios, Tailwind CSS for styling.

#### Backend: Node.js, Express, Mongoose (MongoDB ORM).

#### atabase: MongoDB.

#### API: RESTful API with routes for patient data and prior authorization requests.

## Features

#### Patient Dashboard:

1. Displays a list of patients.
2. Shows detailed health information for each patient.
3. Filter and search patients by name.

#### Prior Authorization Form:

1. Submit prior authorization requests for treatments.
2. Fields include patient ID, treatment type, insurance plan, diagnosis code, and date of service.

#### Responsive Design:

1. The UI is mobile-friendly, using a responsive CSS framework (Tailwind CSS/Bootstrap).

## Installation Instructions

### Prerequisites

Ensure that the following are installed on your machine:

Node.js (v14.x or later)
MongoDB (Running locally or hosted using MongoDB Atlas)

1. Clone the Repository

   ```
      git clone https://github.com/your-username/patient-health-dashboard.git
      cd patient-health-dashboard
   ```

2. Install Dependencies
   Navigate to the root directory and install dependencies for both the frontend and backend.

   ```
   # Install backend dependencies
   npm run build
   npm run start
   ```

3. Configure Environment Variables
   You will need to create environment variables for MongoDB connection.
   In the root folder, create a .env file:

   ```
   MONGODB_URI=mongodb://localhost:27017/yourDatabaseName
   PORT=3000
   ```

4. Open the App
   Once app is running, open your browser and navigate to:

   ```
   http://localhost:3000
   ```
