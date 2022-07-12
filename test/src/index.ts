// Server
import express, { Application } from 'express';
import path from 'path';
import http, { Server } from 'http';
import cookieParser from 'cookie-parser';
import * as exphbs from 'express-handlebars';
// Middleware
import methodOverride from 'method-override';

// Config
import 'dotenv/config';

// User define
import route from './routes';
import './helpers/hbs';

const app: Application = express();
const port: Number = Number(process.env.PORT) || 3000;
const server: Server = http.createServer(app);

// use middleware
app.use(methodOverride('_method'));

// view engine setup
const viewPath = path.join(__dirname, 'resources', 'views');
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    })
);
app.set('view engine', 'hbs');
app.set('views', viewPath);

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cookieParser());

route(app);

server.listen(port, () => console.log(`http://localhost:${port}`));
