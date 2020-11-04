
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to data Representation & Querying!')
})

//adding page to localhost 3000, we request the name using req and console.log
//res sends it to the application and makes it visible

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

//creating a json that calls data from our const myMovies
//adding a page to our localhost called /api/movies that displays the json
app.get('/api/movies', (req, res) => {
    const myMovies = [
        [
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
        ]
    ];
    res.json({movies:myMovies});
});

//adding test page which is our index.html
//using path to access __dirname which finds which directory we are using
//this calls index.html for us
app.get('/test',(req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

//get method to display first and last name on the web page and in the url
app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname +' ' + req.query.lname);
})
//Post method to display first and last on the web page but not in the url
//use body parser to hide the info in the url
app.post('/name', (req, res)=>{
    res.send('Hello '+ req.body.fname + ' ' + req.body.lname);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})