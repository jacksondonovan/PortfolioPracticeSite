const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res,next)=>{
  const num = Math.floor((Math.random() * 5) + 1)
  const title = [{
    title: "Welcome to my site"
  },
  {
    title: "Check out my work below"
  },
  {
    title: "Beautiful Eh?"
  }]
  res.render('index')
})

app.get('/about',(req,res,next)=>{
  res.render('about')
})

app.get('/contact',(req,res,next)=>{
  res.render('contact')
})

app.get('/more',(req,res,next)=>{
  res.render('more')
})

app.listen(port,(req,res)=>{
  console.log('listening on port ' + port);
})
