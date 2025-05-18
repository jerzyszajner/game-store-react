# Game Store React

## Live Demo

🔗 [View Game Store live on Netlify](https://game-store-react-project.netlify.app/)

## Description

Game Store is a school project e-commerce application for video game sales, offering catalog browsing, user account management, and a secure purchasing process.

## Features

- Browse catalog of video games
- Filter..
- Sort...
- User registration and authentication
- Email verification
- Detailed product view
- Shopping cart with quantity controls
- Secure payment and order processing
- User profile with purchase history

## Technologies

- React 19
- Vite 6
- Firebase Authentication and Firestore
- Cloudinary for profile images storage
- React Router
- CSS Modules
- FontAwesome

## Installation and Setup

### Clone repository

```bash
git clone https://github.com/jerzyszajner/game-store-react.git
cd game-store-react
```

````

### Install dependencies

```bash
npm install
npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
npm install -g firebase-tools
```

### Run in development mode

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

## Firebase Configuration

Create a `.env` file in the root directory and add your Firebase keys:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Regular Expressions

The project uses these validation patterns:

```javascript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation (requires: 1 digit, 1 lowercase, 1 uppercase, 1 special char, no spaces, min 8 chars)
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
```

## Academic Context

This project was created during my studies at Kristiania University College, as part of learning modern React development.

## GitHub Repository

📂 [View source code on GitHub](https://github.com/jerzyszajner/game-store-react)

```
````
