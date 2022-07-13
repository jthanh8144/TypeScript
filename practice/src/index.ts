// Server
import express, { Application } from 'express';
import path from 'path';
import http, { Server } from 'http';
import cookieParser from 'cookie-parser';
// Middleware
import methodOverride from 'method-override';

// Config
import 'dotenv/config';

// User define
import route from './routes';
import { db } from './app/models';

const app: Application = express();
const port: Number = Number(process.env.PORT) || 3000;
const server: Server = http.createServer(app);

db.sequelize
    .sync()
    .then(() => {
        console.log('Connect db success');
    })
    .catch((err: any) => {
        console.log(err);
    });

// use middleware
app.use(methodOverride('_method'));

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
