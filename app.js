const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido static

app.use(express.static('public'));


app.get('/',  (req, res) => {
    res.render('home',{
        nombre:'Eduardo Leyva',
        titulo:'Curso de Node'

    });
})

app.get('/generic',  (req, res) => {
   // res.sendFile(__dirname + '/public/generic.html');
   res.render('generic',{
    nombre:'Eduardo Leyva',
    titulo:'Curso de Node'

});
})

app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre:'Eduardo Leyva',
        titulo:'Curso de Node'
    
    });
})

app.get('/hello',  (req, res) => {
    res.send('Hello World')
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})