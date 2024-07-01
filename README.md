# Getting Started with Create React App
Create React App in computer
npm create-react-app todo-app


# library installed
npm install redux react-redux @reduxjs/toolkit
npm boostrap

## Fetures Add
-Add new tasks
-View all tasks
-Edit existing tasks
-Delete tasks
-Mark tasks as completed
-Persist tasks in local storage

### components
-TaskInput: Provides a text input and a button to add new tasks.
- TaskList: Displays the list of tasks with options to edit, delete, and mark tasks as completed.

#### For State Management
-The application uses Redux for state management. The state includes an array of tasks, with actions and reducers to handle adding, deleting, toggling, and editing tasks. The tasks are persisted in local storage.
-Creating Slices: A slice contains the reducer logic and actions for a specific feature of the application. In this project, the taskSlice.js file defines actions and reducers for managing tasks.
-Configuring the Store: The store is configured using Redux Toolkit's configureStore function, which sets up the Redux DevTools Extension automatically.