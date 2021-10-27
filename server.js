// import modules

import express from 'express'
// import * as todoDb from './data/todo-db.js'
// import { find } from './data/todo-db.js'
import * as students from './data/students.js'
import { find } from './data/students.js'
// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res) {
  res.redirect('/todos')
})
app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  students.find({}, function(error,students){
    res.render('students/index',{
      students,
      error
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})