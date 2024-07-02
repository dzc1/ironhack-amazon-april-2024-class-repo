# ToDo Application

This is a Vue.js-based ToDo application that utilizes Pinia for state management and Vue Router for navigation. The application allows users to manage their tasks, including adding new tasks, viewing all tasks, marking tasks as completed, and deleting tasks. Users can also register and log in to the application.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Stores](#stores)
- [Routing](#routing)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- npm (Node Package Manager) or yarn installed.

### Installation

1.  Clone the repository:

        bash

        Copy code

        `git clone https://github.com/dzc1/ironhack-amazon-april-2024-class-repo/tree/main`

2.  Install the dependencies:

    bash

    Copy code

    `npm install

    # or

    yarn install`

### Running the Application

To start the development server, run:

bash

Copy code

`npm run dev

# or

yarn dev`

This will start the application at `http://localhost:3000`.

## Project Structure

arduino

Copy code

`todo-app/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HelloWorld.vue
│   │   ├── PersonalRouter.vue
│   ├── pages/
│   │   ├── HomePage.vue
│   │   ├── AboutPage.vue
│   │   ├── AllTasksPage.vue
│   │   ├── CompletedTasksPage.vue
│   │   ├── AddTaskPage.vue
│   │   ├── AuthPage.vue
│   │   ├── SignIn.vue
│   │   ├── SignUp.vue
│   ├── stores/
│   │   ├── taskStore.js
│   │   ├── userStore.js
│   ├── App.vue
│   ├── main.js
│   ├── router.js
├── .gitignore
├── README.md
├── package.json
├── vite.config.js`

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

## Usage

1.  **Register a new user**: Go to the Register page and provide your email and password to create a new account.
2.  **Log in**: Go to the Login page and enter your credentials to log in.
3.  **Add a new task**: Navigate to the Add Task page and fill in the task details to add a new task.
4.  **View all tasks**: Go to the All Tasks page to see a list of all tasks.
5.  **View completed tasks**: Go to the Completed Tasks page to see tasks that have been marked as completed.
6.  **Mark a task as completed**: On the All Tasks page, click the "Mark as Completed" button next to a task.
7.  **Delete a task**: On the All Tasks page, click the "Delete Task" button next to a task.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature-branch`).
6.  Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

### IF YOU DO NOT UNDERSTAND THE FILE THAT YOU ARE LOOKING

USE THIS PROMPT

ChatGPT PROMPT:

Analyse the following file containing [vue syntax] and I want you to provide to me a summary detailing what this whole file is doing and also, add comments to each line of syntax describing what that line is doing to enhance my understanding.

FILE:
