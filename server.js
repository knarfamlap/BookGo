
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000

require('./controllers/posts.js')(app)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/posts/new', function(req, res){
  res.sendFile(path.join(__dirname + '/templates/post-new.html'))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
