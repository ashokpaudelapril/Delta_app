/****
 * 
 * Our First Database: SQL 
 * 
 * MySQL : DataBase
 * SQL : Language
 * 
 * What is Database?
 * It is a collection of data in a format that can be easily accessed.
 * 
 * What databases?
 * - can store large data
 * - features like security, scalability etc.
 * - Easier to insert, update or delete data
 * 
 * // SQL vs NoSQL
 * 
 * SQL
 * - Relational Database (data stored in Tables)
 * - e.g. MySQL, Oracle, PostgreSQL etc.
 * 
 * NoSQL
 * - Non Relational Database (data stored in document/key - val/graphs etc.)
 * - e.g. MongoDb, Cassandra, Neo4j etc. 
 * 
 * 
 * // Structured Query Language (SQL)
 * 
 * SQL is a programming language used to interact with relational databases.
 * 
 * Columns --> Design (Schema)
 * rows ---> tuple 
 * *******************************************************************************************************************************/

/******************************************************************************************************************
 * 
 * Faker 
 * 
 * To generate fake data : userId, username, email, password
 * 
 * let getuser = () => {
 * return [
 * faker.datatype.uuid(),
 * faker.internet.userName(),
 * faker.internet.email(),
 * faker.internet.password(),
 * ]
 * }
 * 
 **************************************************************************************************************/

const { faker } = require('@faker-js/faker');

let CreateRandomUser = () => {
    return {
        _id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    
  };
};


/***
 * 
 * // MYSQL2 Package 
 * 
 * To connect Node with MySQL
 * 
 * connection.end(); // to close connection
 * 
 */

/***********************************************************************************************
 * Using SQL from Command Line
 * 
 * /usr/local/mysql/bin/mysql -u root -p
 * 
 * Create schema.sql
 * source schema.sql //CLI
 * 
 * **********************************************************************************************/

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: "A$h0k@0401"
})

let query = "INSERT INTO user (id, username, email, password) VALUES ?";

let users = [["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
];
};

let data = [];
for (let i = 1; i < 10; i++){
    data.push(getRandomUser())
}

try {
    connection.query(query, [data], (error, result) => { 
        if (error) throw error;
        console.log(result);
    })
}catch (error)
        {
        console.log(error);
    }

connection.end();