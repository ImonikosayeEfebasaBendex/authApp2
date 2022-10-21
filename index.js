require('dotenv').config();

const  express = require('express');
const app = express();
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT

const { appRoute } = require('./route.js')

app.use(express.static("public"));

app.use('/', appRoute);

app.listen(PORT, ()=> {
    console.log(`app listening on port ${PORT}...`)
})