const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); 



app.use((req, res, next) => {
    var now = new Date().toString();
    var long = `${now}: ${req.method} ${req.url}`

    fs.appendFileSync('server.log', long + '\n');
    next();
})

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

app.use((req, res, next) => {
    res.render('maintanence.hbs', {
        msg: 'The Site is under maintanence bhai.'
    });
});



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



app.listen(port);
