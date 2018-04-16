const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
//     res.send({
//     name: 'Eshwar',
//     Likes: ['Reading', 'Travelling']
// })

        res.render('home.hbs', {
            pageTitle: 'Home Page hai bhai',
            currentYear: new Date().getFullYear(),
            welcomeMsg: 'Welcome Bruh!!'
        });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Time',
        currentYear: new Date().getFullYear(),
        welcomeMsg: 'Come on'
    });
});



app.listen(3000);
