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

todo-app/
├── public/
│ ├── index.html
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── HelloWorld.vue
│ │ ├── PersonalRouter.vue
│ ├── pages/
│ │ ├── HomePage.vue
│ │ ├── AboutPage.vue
│ │ ├── AllTasksPage.vue
│ │ ├── CompletedTasksPage.vue
│ │ ├── AddTaskPage.vue
│ │ ├── AuthPage.vue
│ │ ├── SignIn.vue
│ │ ├── SignUp.vue
│ ├── stores/
│ │ ├── taskStore.js
│ │ ├── userStore.js
│ ├── App.vue
│ ├── main.js
│ ├── router.js
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
