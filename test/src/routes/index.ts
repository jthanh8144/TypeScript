import { Application } from 'express';
import homeRouter from './home';

function route(app: Application) {
    app.use('/', homeRouter);
}

export default route;
