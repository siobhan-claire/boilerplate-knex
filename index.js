var bodyParser = require('body-parser')
var express = require('express')
// var development = require('./knexfile').development
// var knex = require('knex')(development)
var hbs = require('express-handlebars')
var path = require('path')

var index = require('./routes/index')

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

// This is a one to one relationship: a user HAS ONE profile page.
// You'll need a profiles table with a user_id column and some other useful information about the user, like their URL and maybe a profile picture.

app.get('/', index.get)

app.get('/displayProfile', index.user)


app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
