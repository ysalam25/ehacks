// set up project to use all required modules
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// set up the port to run the app on
const port = 3309;

// configure the middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('view', path.join(__dirname, '/view'));
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(express.static(path.join(__dirname, 'view')));
app.use(fileUpload()); // configure file upload

// use mySQL
const mysql = require('mysql');
const res = require('express/lib/response');

// create the connection
const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'womeninstem',
  password: 'rootpass2021',
  database: 'ertwdatabase'
});

// connect to the database
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database - app.js');
});

// ensure db can be used globally
global.db = db;

//getting the root path(homepage)
app.get('/', (req, res) => {
    res.redirect('/homepage.html');
});

//get the browse categories

// redirect to stims page
app.get('/stimulants', () => {
    res.redirect('/stimulants.html');
});

// getting the posts from the database for a specified medication/filter
app.get('/get-posts', (request, response) => {
    let drugID = request.query.medID;      // holds the id of the medication requested by the user
    let respons;
    // query to get the posts under a certain drug id WHERE drugID = '${drugID}'
    db.query(`SELECT * FROM Post `, (err, rows, fields) => {
        respons = rows;
        response.send(rows);
    });
    
});

// letting the user write their data to the database
app.post('post-content', (req, res) => {
  let postNo = req.query.postNo;
  let content = "";
  let ageGroup = "";
  let gender = "";

});



app.use("/view", express.static('./view/'));

//listening to the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
