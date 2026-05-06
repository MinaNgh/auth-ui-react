# 🔐 React Authentication UI

A production-style authentication system built with React, featuring login and signup flows, protected routes, and persistent user sessions. This project simulates real-world authentication behavior using localStorage as a mock backend.

---

## 🚀 Features

- User Signup (register new account)
- User Login with credential validation
- Protected Routes (restricted access for authenticated users)
- Persistent Authentication (session stored in localStorage)
- Error Handling (invalid login, existing user)
- Conditional UI (suggest signup on failed login)
- Reusable Components (Input, Button)
- Responsive and modern UI design

---

## 🧠 Project Workflow (How it Works)

### 1. App Initialization
- On app load, the system checks `localStorage` for an existing user session.
- If a user exists, they remain logged in.

---

### 2. Signup Flow
- User enters email and password
- Data is stored in `localStorage` as a simulated database (`users[]`)
- If user already exists → error message shown
- On success → redirected to Login page

---

### 3. Login Flow
- User enters credentials
- System validates against stored users
- If valid:
  - User is saved as `currentUser`
  - Redirect to Dashboard
- If invalid:
  - Error message displayed
  - Suggestion to create a new account

---

### 4. Protected Routes
- Dashboard is only accessible if user is authenticated
- Unauthorized users are redirected to Login page

---

### 5. Logout
- Clears user session from `localStorage`
- Redirects user to Login page

---

## 🏗️ Project Structure
src/
├── components/ # Reusable UI components
├── pages/ # Login, Signup, Dashboard
├── context/ # Auth state management
├── services/ # Authentication logic (mock backend)
├── App.js # Routing setup

---

## 🛠️ Tech Stack

- React (Create React App)
- React Router (Routing)
- Context API (State Management)
- JavaScript (ES6+)
- HTML5 & CSS3
- localStorage (Mock database)

---

## 💡 Key Concepts Demonstrated

- Client-side authentication flow
- State management using Context API
- Route protection with React Router
- Separation of concerns (UI, logic, services)
- Reusable component design
- User experience improvements (error handling, guidance)

---

## 📸 Demo

Live Demo: 
GitHub Repo: https://github.com/MinaNgh/auth-ui-react

---

## 🔧 Installation

```bash
git clone https://github.com/MinaNgh/auth-ui-react.git
cd auth-ui-react
npm install
npm start
