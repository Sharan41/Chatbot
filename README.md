

# Chatbot Project

This project is a **Retail Chatbot** that allows users to query data, such as sales information, through a natural language interface. The application is built using the **MERN stack** (MongoDB, Express, React, Node.js) and can respond to user queries and display sales data based on a date range.

## Table of Contents

- [Project Setup](#project-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

To set up the project locally, follow these steps:

### Prerequisites

- Ensure that you have **Node.js** and **npm** installed.
- **MongoDB** should be running locally or you should have access to a remote MongoDB instance.

### Backend Setup

1. Navigate to the `src/chatbot-backend` directory:
   ```bash
   cd src/chatbot-backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Configure the backend API:
   - Create a `.env` file in the `chatbot-backend` folder and add the necessary environment variables (e.g., MongoDB URI).
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend should now be running on `http://localhost:5001`.

### Frontend Setup

1. Navigate to the `src/chatbot-frontend` directory:
   ```bash
   cd src/chatbot-frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend should now be running on `http://localhost:3000`.

### Running the Full Application

- Make sure both the backend and frontend servers are running simultaneously.
- Visit `http://localhost:3000` to interact with the chatbot.

## Usage

Once the application is running:

1. You can ask the chatbot questions like: **"Fetch Sales Data (Sep10 to 11)"**.
2. You can also specify date ranges using the date picker to get more specific sales data.
3. The response and data will be displayed within the chatbot interface, including sales information for products within the specified date range.

## Folder Structure

The project is structured as follows:

```
src/
├── chatbot-frontend/       # Frontend code (React)
├── chatbot-backend/        # Backend code (Node.js, Express)
└── README.md               # This documentation file
```

## Contributing

We welcome contributions to this project! Here’s how you can contribute:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-branch
   ```
5. **Create a pull request** and provide details about the changes you made.

