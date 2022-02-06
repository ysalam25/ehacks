const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.redirect('/homepage.html');
})

app.listen(3000, () => {
  console.log("server started on port 3000");
});

app.use(express.static('view'));
