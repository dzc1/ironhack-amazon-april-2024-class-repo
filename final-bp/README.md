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
  - [Usage](#usage)
  - [Where to Go From Here?](#where-to-go-from-here)
    - [Styling Enhancements](#styling-enhancements)
    - [Task Management Enhancements](#task-management-enhancements)
    - [User Management Enhancements](#user-management-enhancements)
    - [Additional Features](#additional-features)
    - [Third-Party Libraries](#third-party-libraries)
    - [Local Storage Enhancements - **ALL Optional**](#local-storage-enhancements---all-optional)
    - [IF YOU DO NOT UNDERSTAND THE FILE THAT YOU ARE LOOKING , Use ChatGPT](#if-you-do-not-understand-the-file-that-you-are-looking--use-chatgpt)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- npm (Node Package Manager) or yarn installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dzc1/ironhack-amazon-april-2024-class-repo/tree/main
   ```
2. Make a copy of the folder called `final-bp` located inside the class folder on your desired location.
3. Open the new copied folder in VS Code
4. Once opened in VS Code, open an integrated terminal.
5. Install the dependencies:
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

### Components

#### HelloWorld.vue

Displays a welcome message.

#### PersonalRouter.vue

Provides navigation links for the application.

#### HomePage.vue

Displays the home view with a counter example using Pinia.

#### AboutPage.vue

Displays information about the application.

#### AllTasksPage.vue

Displays all tasks and allows marking tasks as completed or deleting them.

#### CompletedTasksPage.vue

Displays completed tasks.

#### AddTaskPage.vue

Allows users to add new tasks.

#### AuthPage.vue

Serves as a parent component for authentication-related nested routes.

#### SignIn.vue

Handles the sign-in process.

#### SignUp.vue

Handles the sign-up process.

### Stores

#### taskStore.js

Manages the state of tasks, including adding, marking as completed, and deleting tasks.

#### userStore.js

Manages user authentication and profile information, including registering, signing in, and signing out.

### Routing

The routing configuration is defined in `router.js`. The application uses Vue Router to navigate between different pages and includes nested routes for authentication.

## Usage

1.  **Register a new user**: Go to the Register page and provide your email and password to create a new account.
2.  **Log in**: Go to the Login page and enter your credentials to log in.
3.  **Add a new task**: Navigate to the Add Task page and fill in the task details to add a new task.
4.  **View all tasks**: Go to the All Tasks page to see a list of all tasks.
5.  **View completed tasks**: Go to the Completed Tasks page to see tasks that have been marked as completed.
6.  **Mark a task as completed**: On the All Tasks page, click the "Mark as Completed" button next to a task.
7.  **Delete a task**: On the All Tasks page, click the "Delete Task" button next to a task.

## Where to Go From Here?

Here is a list of possible updates and enhancements that you can work on to improve this application::

### Styling Enhancements

1. **Styling Enhancements**:
   - **Styling** Improve the overall styling using CSS or a framework like Tailwind CSS. **- Mandatory**
   - **CSS Grid/Flexbox**: Use CSS Grid or Flexbox to create a responsive layout. **- Mandatory**
   - **Variables**: Use CSS variables for consistent theming and easy updates. **- Mandatory**
   - **Animations**: Add subtle animations for interactions like button clicks or page transitions. **- Mandatory**
   - **Hover Effects**: Add hover effects to buttons and links to improve interactivity. **- Mandatory**
   - **Fonts and Icons**: Integrate Google Fonts for custom typography and use a library like Font Awesome for icons. **- Mandatory**
2. **Responsive Design**:
   - **Responsiveness**: Make the application responsive so it looks good on mobile devices. **- Mandatory**
   - **Media Queries**: Use media queries to adjust the layout and styling for different screen sizes. **- Mandatory**
   - **Mobile Menu**: Implement a hamburger menu for mobile navigation. **- Mandatory**
   - **Grid Adjustments**: Change the number of columns or layout for smaller screens. **- Optional**
3. **Dark Mode**:
   - **Toggle Function**: Add a toggle for dark mode. **- Optional**
   - **CSS Variables**: Use CSS variables to easily switch between light and dark themes. **- Optional**
   - **Transition Effects**: Add smooth transition effects when toggling between themes. **- Optional**

### Task Management Enhancements

5. **Task Editing**: Add functionality to edit existing tasks. **- Mandatory**
6. **Task Due Dates**: Allow users to add due dates to tasks. **- Mandatory**
7. **Task Prioritization**: Implement a priority system for tasks (e.g., high, medium, low). **- Mandatory**
8. **Search Functionality**: Add a search bar to filter tasks by title or description. **- Optional**
9. **Sort Tasks**: Enable sorting of tasks by due date, priority, or completion status. **- Mandatory**
10. **Task Categories**: Allow users to categorize tasks (e.g., Work, Personal, Shopping). **- Optional**
11. **Subtasks**: Enable the creation of subtasks within a task. **- Mandatory**
12. **Recurring Tasks**: Allow users to set tasks to recur daily, weekly, or monthly. **- Optional**
13. **Task Attachments**: Let users attach files or images to tasks. **- Optional**
14. **Task Comments**: Add a commenting system within tasks for additional notes or collaboration. **- Optional**
15. **Drag and Drop**: Implement drag-and-drop functionality for task reordering. **- Optional**

### User Management Enhancements

16. **User Profile Page**: Create a user profile page where users can update their information. **- Mandatory**

### Additional Features

18. **Notifications**: Implement notifications to remind users of upcoming tasks or deadlines. **- Optional**
19. **Progress Tracking**: Show a progress bar indicating the completion percentage of all tasks. **- Optional**

### Third-Party Libraries

21. **Axios**: Use Axios for handling HTTP requests to a backend server or external APIs. **- Optional**
22. **Lodash**: Integrate Lodash for utility functions to simplify data manipulation. **- Optional**
23. **Moment.js or Date-fns**: Use Moment.js or Date-fns for date and time manipulation. **- Optional**
24. **Vue Draggable**: Implement Vue Draggable for drag-and-drop functionality within lists. **- Optional**
25. **Vuelidate or VeeValidate**: Add form validation using Vuelidate or VeeValidate to enhance user input handling. **- Optional**
26. **Toastification**: Implement Toastification for showing toast notifications to users. **- Optional**
27. **Chart.js or ECharts**: Integrate Chart.js or ECharts for data visualization and analytics. **- Optional**
28. **Vue-i18n**: Add Vue-i18n for internationalization and localization support. **- Optional**

### Local Storage Enhancements - **ALL Optional**

Leveraging localStorage can significantly improve the user experience by persisting data across sessions. Here are some updates and enhancements you can make using localStorage to save key-value pairs, such as tasks and user profiles:

1. **Persist User Sessions**: Save user session data in localStorage to keep users logged in even after refreshing the page.

   - **Example**: When a user logs in, store their session token and user ID in localStorage. On page load, check localStorage for these values and automatically log the user in if they exist.

2. **Store Tasks Locally**: Save tasks to localStorage so that they persist across page reloads.

   - **Example**: Whenever a task is added, edited, or deleted, update the tasks in localStorage. On page load, retrieve the tasks from localStorage and populate the task list.

3. **User Profile Information**: Save user profile details such as email, username, and preferences in localStorage.

   - **Example**: When a user updates their profile information, save the updated details in localStorage. On page load, retrieve and display the profile information.

4. **Theme Preferences**: Store user preferences for light or dark mode in localStorage.

   - **Example**: When a user toggles between light and dark mode, save their preference in localStorage. On page load, apply the saved theme preference.

5. **Task Filters and Sorting**: Persist task filter and sorting options in localStorage.

   - **Example**: Save the user's selected filter (e.g., show only completed tasks) and sorting order (e.g., by due date) in localStorage. On page load, apply these settings automatically.

---

### IF YOU DO NOT UNDERSTAND THE FILE THAT YOU ARE LOOKING , Use ChatGPT

Below, you have a prompt that helps you understand any file of the project by asking chatGPT to explain it to you.

ChatGPT PROMPT:

Analyse the following file containing [vue syntax] and I want you to provide to me a summary detailing what this whole file is doing and also, add comments to each line of syntax describing what that line is doing to enhance my understanding.

FILE:

(Paste a copy of your file here)
