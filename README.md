
# Delta App: Node.js and MySQL Application with Express

This repository contains the code for a Node.js-based web application that demonstrates CRUD functionalities using MySQL as the database and Express.js as the web framework. It also leverages the faker.js library to generate random user data for demonstration purposes.

## Features

- **View Total Users**: Fetch and display the total number of users in the database.
- **View All Users**: Display a list of all users with their userId, username, and email.
- **Edit User Details**: Update a user's username after verifying their password.
- **Add New Users**: (To be implemented) Form to add a new user to the database.
- **Delete Users**: (To be implemented) Form to delete a user after verifying email and password.

## Technologies Used

- **Node.js**: Backend JavaScript runtime.
- **Express.js**: Web framework for building the app's routes and middleware.
- **MySQL**: Relational database to store user data.
- **Faker.js**: Generate mock data for users.
- **EJS**: Template engine for rendering HTML pages.
- **method-override**: Enable HTTP verbs like PATCH and DELETE in forms.
- **HTML/CSS**: Frontend for the user interface.

## Setup Instructions

### Clone the Repository:

```bash
git clone https://github.com/yourusername/delta-app.git
cd delta-app
```

### Install Dependencies:

Make sure you have Node.js installed, then run:

```bash
npm install
```

### Set Up MySQL Database:

Create a MySQL database named `Delta_app`.

Create a `USER` table with the following structure:

```sql
CREATE TABLE USER (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

Populate the database with sample users if necessary.

### Update Configuration:

Update the connection object in `app.js` with your MySQL credentials:

```javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "your_username",
    database: "Delta_app",
    password: "your_password"
});
```

### Start the Server:

Run the application:

```bash
node app.js
```

By default, the app runs on port 8080. Open your browser and navigate to `http://localhost:8080`.

## File Structure

- `app.js`: Main application file, sets up routes and database connections.
- `views/`: Contains EJS templates:
  - `home.ejs`: Displays total user count.
  - `users.ejs`: Shows all user details.
  - `edit.ejs`: Form to edit a user's username.
- `public/`: Static assets (if any).

## Routes Overview

| HTTP Method | Route         | Description                                      |
|-------------|---------------|--------------------------------------------------|
| GET         | /             | Fetch and display total number of users.         |
| GET         | /user         | Display list of all users.                       |
| GET         | /user/:id/edit| Show form to edit a specific user's username.    |
| PATCH       | /user/:id     | Update a user's username after password check.   |

## To-Do Features

- **Add New User**: Create a form to allow adding a new user to the database.
- **Delete User**: Create a form to delete a user after verifying their email and password.

## Dependencies

- `express` - Web framework.
- `mysql2` - MySQL driver.
- `faker.js` - Generate fake data.
- `ejs` - Template engine.
- `method-override` - Override HTTP methods.

## Contributing

Feel free to fork the repository and submit pull requests with improvements or new features. Make sure to follow best practices and provide detailed documentation for any additions.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
```

Feel free to copy and paste this markdown code into your repository's README file! If you have any other questions or need further assistance, just let me know. 😊
