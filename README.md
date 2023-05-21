# Social Media App

This is a social media app developed using React, TypeScript, and Firebase. It offers a dynamic platform that enables users to share their thoughts and ideas, like posts, and participate in interactive discussions through comments.

## Preview

<img src="/social-media-app.jpg" width="640" height="360"/>

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nadirkerem/social-media-react-firebase.git

   ```

2. Navigate to the project directory:

   ```bash
   cd social-media-react-firebase
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

4. Configure Firebase:

Create a new Firebase project at firebase.google.com.
Enable Firebase Authentication and Firestore Database in the Firebase console.
Copy the Firebase configuration object from the Firebase console.

5. Create a .env file in the project root and add the following variables:

   ```dotenv
   VITE_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
   VITE_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
   VITE_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
   VITE_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
   VITE_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
   VITE_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
   ```

6. Start the development server:

   ```bash
    npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

1. Build the project:

   ```bash
    npm run build
   ```

2. Deploy the generated build directory to your preferred hosting provider.

3. Set up the Firebase project for production deployment:

   Update the Firebase Authentication and Firestore rules to restrict access.
   Update the Firebase configuration in your production environment variables.

## Technologies Used

    React
    TypeScript
    React Icons
    Chakra-UI
    React Router
    React Hook Form
    React Firebase Hooks
    Axios
    Firebase Authentication
    Firestore Database
