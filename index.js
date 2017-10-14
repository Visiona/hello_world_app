const express = require('express')
const app = express()

const port = process.env.PORT || '3000'

//we have to tell Express which view engine we will be using
app.set('view engine', 'hbs')

app.use(function(req, res, next) {
  console.log(req.url + " - " + new Date())
  next()
})

app.get('/names/:name', function(request, response) {
  const name = request.params.name
  response.send('Hello ' + name)
})

app.get('/person/:personName', function(req, res) {
  const personName = req.params.personName
  res.render('greeting', { name: personName})
})

app.get('/', function(request, response) {
  response.render('greeting', { name: "Viking"})
})


app.listen(port, function() {
  console.log('YO yo yo, we are listening...')
})
