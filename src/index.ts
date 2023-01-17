import express from 'express';
import exphbs, {create} from 'express-handlebars';
import path from 'path';
import './database';

//importing routes
import welcomeRoutes from './routes/welcome';
import booksRoutes from './routes/books';
import auth from './routes/auth';

//initializations
const app  = express();

//settings
app.set('PORT', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
let hbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require("./lib/helpers"),
    defaultLayout: 'main'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/', welcomeRoutes);
app.use('/books', booksRoutes);
app.use('/auth', auth);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('PORT'), ()=>{
    console.log("Server on port: "+ app.get('PORT'));
});