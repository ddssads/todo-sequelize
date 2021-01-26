const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const methodOverride = require('method-override')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//首頁路由

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(PORT, () => {
  console.log(`app is running on http://localhost/${PORT}`)
})