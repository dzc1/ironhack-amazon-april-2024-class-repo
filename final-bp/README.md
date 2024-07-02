# ToDo Application

This is a Vue.js-based ToDo application that utilizes Pinia for state management and Vue Router for navigation. The application allows users to manage their tasks, including adding new tasks, viewing all tasks, marking tasks as completed, and deleting tasks. Users can also register and log in to the application.

## Table of Contents

- [ToDo Application](#todo-application)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Components](#components)
    - [HelloWorld.vue](#helloworldvue)
    - [PersonalRouter.vue](#personalroutervue)
    - [HomePage.vue](#homepagevue)
    - [AboutPage.vue](#aboutpagevue)
    - [AllTasksPage.vue](#alltaskspagevue)
    - [CompletedTasksPage.vue](#completedtaskspagevue)
    - [AddTaskPage.vue](#addtaskpagevue)
    - [AuthPage.vue](#authpagevue)
    - [SignIn.vue](#signinvue)
    - [SignUp.vue](#signupvue)
  - [Stores](#stores)
    - [taskStore.js](#taskstorejs)
    - [userStore.js](#userstorejs)
  - [Routing](#routing)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- npm (Node Package Manager) or yarn installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start the application and a route will be provided to you in the integrated terminal.

## Project Structure

## Components

### HelloWorld.vue

Displays a welcome message.

### PersonalRouter.vue

Provides navigation links for the application.

### HomePage.vue

Displays the home view with a counter example using Pinia.

### AboutPage.vue

Displays information about the application.

### AllTasksPage.vue

Displays all tasks and allows marking tasks as completed or deleting them.

### CompletedTasksPage.vue

Displays completed tasks.

### AddTaskPage.vue

Allows users to add new tasks.

### AuthPage.vue

Serves as a parent component for authentication-related nested routes.

### SignIn.vue

Handles the sign-in process.

### SignUp.vue

Handles the sign-up process.

## Stores

### taskStore.js

Manages the state of tasks, including adding, marking as completed, and deleting tasks.

### userStore.js

Manages user authentication and profile information, including registering, signing in, and signing out.

## Routing

The routing configuration is defined in `router.js`. The application uses Vue Router to navigate between different pages and includes nested routes for authentication.
