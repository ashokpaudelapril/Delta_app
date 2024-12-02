const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let port = "8080";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Delta_app",
    password: "A$h0k@0401"
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};


/**
 * 
 * Setting up Express App
 * 
 * GET / Fetch and show total number of users on our app
 */
app.get("/", (request, response) => {
    let query = `SELECT count(*) FROM USER`;

    try {
        connection.query(query, (error, result) => {
            if (error) throw error
            let count = result[0]["count(*)"];
            response.render("home.ejs", { count });
        });
    } catch (error) {
        response.render("some error occurred")
    }
});

/********
 * 
 * Creating Our Routes
 * 
 * Get/user Fetch and show (userId, username, email) of all users
 */

app.get("/user", (request, response) => {
    let query = `SELECT * FROM USER`;

    try {
        connection.query(query, (error, result) => {
            if (error) throw error
            let users = result;
            response.render("users.ejs", {users})
        });
    } catch (error) {
        response.render("some error occurred")
    }
});

/*****
 * 
 * Creating our Routes
 * 
 * Get   /user/:id/edit    To get from to edit the username, based on id 
 *                         This form will require a password
 * PATCH /user/:id         To edit username, if correct password was entered in form 
 */

app.get("/user/:id/edit", (request, response) => {
    let { id } = request.params;
    let query = `SELECT * FROM USER WHERE id='${id}'`;

    try {
        connection.query(query, (error, result) => {
            if (error) throw error
            let user = result[0];
            console.log(user["password"]);
            response.render("edit.ejs", { user })
        });
    } catch (error) {
        response.render("some error occurred")
    }
});

app.patch("/user/:id", (request, response) => {
    let { id } = request.params;
    let { password: formpass, username: newUsername } = request.body;
    let query = `SELECT * FROM USER WHERE id = '${id}'`;
    try {
        connection.query(query, (error, result) => {
            if (error) throw error
            let user = result[0];
            if (user["password"] != formpass) {
                response.send("Wrong Password")
            } else {
                let query2 = `UPDATE USER SET username = '${newUsername}' WHERE id = '${id}'`
                try {
                connection.query(query2, (error, result) => {
                if (error) throw error
                    response.redirect("/user");
        });
    } catch (error) {
        response.render("some error occurred")
    }   
            }
        });
    } catch (error) {
        response.render("some error occurred")
    }


});


/************************************************************************************************
 * 
 * Tasks to Be added 
 * 
 * Create Form to add a new user to the Database
 * 
 * Create Form a Delete a user from Database if they enter correct email id and password.
 * 
 ************************************************************************************************/

app.listen(port, () => {
    console.log("Our App is listening")
})