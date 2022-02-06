// importing express
const express = require("express");
const app = express();



// serve static contents in the view folder
app.use(express.static('view'));

// redirecting users to the homepage html 
app.get('/', (req, res) => {
    res.redirect('/homepage.html');
});

// get server to listen at port 3000 for client requests
app.listen(3000, () => {
  console.log("server started on port 3000");
});

