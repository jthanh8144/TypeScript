import { Request, Response, NextFunction } from 'express';

class HomeController {
    home(req: Request, res: Response, next: NextFunction) {
        res.render('home', { test: 'a' });
    }
}

export default new HomeController();
