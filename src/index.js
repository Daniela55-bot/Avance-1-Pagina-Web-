const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/aunthentication'));
app.use('/link', require('./routes/links'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/cita', require('./routes/cita'));



app.use('/principal', require('./routes/principal'));
app.use('/compras', require('./routes/compras'));
app.use('/mensaje', require('./routes/mensaje'));
app.use('/registro', require('./routes/registro'));
app.use('/producto', require('./routes/compras'));
app.use('/noticia', require('./routes/noticia'));
app.use('/opinion', require('./routes/opinion'));
app.use('/invitar', require('./routes/invitar'));

app.use('/alquiler', require('./routes/alquiler'));
app.use('/alquilar', require('./routes/alquiler'));
app.use('/subirproducto', require('./routes/subirproducto'));
app.use('/empeno', require('./routes/empeno'));
app.use('/empeno1', require('./routes/empeno'));



//public
app.use(express.static(path.join(__dirname, 'public')));


//inicia el server
app.listen(app.get('port'), () => {

    console.log('server on port', app.get('port'));
});