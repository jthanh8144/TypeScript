import { Application } from 'express';
import homeRouter from './home';
import userRouter from './user';
import blogRouter from './blog';

function route(app: Application) {
    app.use('/', homeRouter);
    app.use('/users', userRouter);
    app.use('/blogs', blogRouter);
}

export default route;
