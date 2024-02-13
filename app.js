//Requires
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//App setup
const app = express();

//App settings
app.set('view engine', 'pug');
app.set('views', './views');
console.log(app.get('view engine'));

//Routes import
const admin = require('./routes/admin');
const userRoutes = require('./routes/user');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/admin', admin.routes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: '404 - Not Found'});
});


//Server Setup
app.listen(3000, () => {
    console.log('Server listening on PORT 3000');
});