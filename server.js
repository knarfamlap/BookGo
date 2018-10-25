const express = require('express')
const app = express()
const port = 3000
const router = express.Router();
const path = __dirname + "/";


router.use(function(req , res, next){
  console.log("/" + req.method);
  next();
});


app.get('/', function(req, res) {
    res.sendFile(path + "index.html");
});

app.get('/about', function(req, res){
  res.sendFile(path + "about.html");
});

app.get('/contact', function(req, res) {
  res.sendFile(path + "contact.html");
});

app.use("/", router);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
