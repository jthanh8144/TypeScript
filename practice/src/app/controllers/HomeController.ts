import { Request, Response, NextFunction } from 'express';

class HomeController {
    home(req: Request, res: Response, next: NextFunction) {
        res.json('home');
    }
}

export default new HomeController();
