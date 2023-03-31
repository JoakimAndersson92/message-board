const express = require('express')
const app = express()
const path = require('path')
const indexRoute = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute)

app.listen(3000, () => {
    console.log("Listening to port 3000")
})