# 🏆 Full-Stack Sports Roster

A modern, full-stack web application designed to manage and organize sports rosters (specifically tailored for Kabaddi and Cricket teams). This project was built to demonstrate end-to-end full-stack development, REST API design, and manual edge-case testing.

## 🚀 Tech Stack

- **Frontend:** React (bootstrapped with Vite), JavaScript, HTML/CSS
- **Backend:** Node.js, Express.js
- **API Architecture:** RESTful routing

## ✨ Features

- **Complete CRUD Functionality:** \* **Create:** Add new players to the database via a React form.
  - **Read:** Fetch and display real-time roster data from the Express server.
  - **Delete:** Remove players dynamically with instant UI updates.
- **CORS Configured:** Secure cross-origin resource sharing between the front and back ends.
- **State Management:** Utilizes React hooks (`useState`, `useEffect`) for seamless data handling without page reloads.

## 🧪 Quality Assurance & Testing

This application was developed with testing in mind. Manual testing protocols were executed to ensure system stability, including:

- **Empty Submission Handling:** Verifying form constraints against null inputs.
- **Data Type Validation:** Ensuring unexpected characters do not break state management.
- **UI/UX Consistency:** Confirming immediate state updates upon API resolution.

## 💻 How to Run Locally

To run this project on your local machine, you will need two separate terminal windows.

**1. Start the Backend Server:**

```bash
cd backend
npm install
node server.js
```

