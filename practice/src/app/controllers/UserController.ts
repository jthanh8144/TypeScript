import { Request, Response, NextFunction } from 'express';
import { db } from '../models';
import { User } from '../interfaces';

class UserController {
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        const users = await db.users.findAll({
            include: ['blogs'],
        });
        res.json(users);
    }

    async getUserByID(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        const user = await db.users.findOne({
            where: { id },
            include: ['blogs'],
        });
        res.json(user);
    }

    async getBlogsOfUser(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        const user = await db.users.findOne({
            attributes: [],
            where: { id },
            include: ['blogs'],
        });
        res.json(user.blogs);
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const user: User = req.body;
        try {
            await db.users.create(user);
            res.json({ status: 'Create user successfully!' });
        } catch (err) {
            console.log(err);
            res.json({ status: 'Create user failed!' });
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        const user: User = req.body;
        try {
            await db.users.update(user, {
                where: { id },
            });
            res.json({ status: 'Update user successfully!' });
        } catch (err) {
            console.log(err);
            res.json({ status: 'Update user failed!' });
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        try {
            await db.users.destroy({
                where: { id },
            });
            res.json({ status: 'Delete user successfully!' });
        } catch (err) {
            console.log(err);
            res.json({ status: 'Delete user failed!' });
        }
    }
}

export default new UserController();
