const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const router = require('./router')

const PORT = 5000;
const app = express();

app.use(express.static('src/public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use(router);

mongoose.connect('mongodb://localhost:27017/cat-shelter')
    .then(() => {
        console.log('DB Connected');
        app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`));
    })

