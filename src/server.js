let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Create connection to the server on local machine
let connection = mysql.createConnection({
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'Project'
});

// Function gets the login of a user and checks, if he exists in a database
async function checkUser(login){
    connection.query("SELECT * FROM Users WHERE LOGIN = ?", login, function (error, rows, fields) {
        if(JSON.stringify(rows) === '[]'){
            return true;
        }
        else {
            return false;
        }
    });
}

// Connect to a database
connection.connect(function (error) {
    if(!!error){
        console.log("Error");
    }
    else {
        console.log("Success")
    }
});


// Get all the users.
app.get('/api/users/', function (req, resp) {
    connection.query("SELECT * FROM Users", function (error, rows, fields) {
        if(error){
            console.log("Error in query");
        }
        else{
            console.log("Successful query\n");
            // console.log(rows);
            resp.send(rows);
        }
    })
});


// Get one user. There is only one parameter: login.
app.post('/api/login/', function (req, resp) {
    let login = req.body.login;

    connection.query("SELECT * FROM Users WHERE LOGIN = ?", login, function (error, rows, fields) {
        if(!error){
            resp.send(rows);
            console.log(rows);
        }
    })
});


// Create a user. There are 3 parameters: (login, password, group_name)
app.post('/api/register/', function (req, resp){
    let login = req.body.login;
    let password = req.body.password;
    let group_name = req.body.group_name;

    if (checkUser(login)){
        console.log("Creting user");
        connection.query("INSERT INTO Users VALUES (?, ?, ?)", [login, password, group_name]);
    }
    else {
        console.log("Cannot create a user");
    }

});

app.listen(1337);
