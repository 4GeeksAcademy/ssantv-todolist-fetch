# To-Do with Users — Add, Edit, Complete, and Delete Tasks

This application is a **dynamic task list in React**, connected to the **4Geeks To-Do API**, which allows you to manage tasks per user: add, complete, edit, delete, and manage users.

---

## Main features

### 1. User Management
- The user must enter their name before using the application.
- If the user **does not exist**, the app automatically creates them in the API.
- Once logged in:
  - Their tasks are loaded.
  - They can switch users with **“Not you?”**.
  - They can delete their account and all their tasks.

### 2. Add tasks
- Add tasks using the **“Send”** button or the **Enter** key.
- Validations:
  - Tasks cannot be added without a user.
  - Empty input cannot be sent.
- The task is saved in the API and the list is automatically reloaded.

### 3. Mark tasks as completed
- Click on a task → toggle between completed and not completed.
- Updated in the API using a `PUT` request.

### 4. Edit tasks
- Each task has an **“Edit”** button.
- A modal opens using **SweetAlert2**.
- The content is updated both in the API and in the local state.

### 5. Delete tasks
- **“Delete”** button for each task.
- Deletes the task in the API and in the local state immediately.

### 6. Pending task counter
- Shows how many tasks remain to be completed.
- Updates automatically when the list is modified.

### 7. Alert message system
Dynamic messages depending on the situation:
- User created automatically.
- User deleted.
- Error for not entering user.
- Error for not entering task.

## How to use the application

1. Enter your username.
2. Add tasks using the input field.
3. Click on a task to mark it as completed.
4. Press **Edit** to modify a task.
5. Press **Delete** to remove it.
6. Switch users with **“Not you?”**.
7. Delete the user to erase all tasks.
8. Check the pending task counter below the list.

---

## Suggested future improvements

- Filters: **all / completed / pending**.
- Animations when adding and deleting tasks.
- Duplicate search.
- Task suggestions.