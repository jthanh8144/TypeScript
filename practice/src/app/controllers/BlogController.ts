import { Request, Response, NextFunction } from 'express';
import { db } from '../models';
import { Blog } from '../interfaces';

class BlogController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        const blogs: Array<Blog> = await db.blogs.findAll();
        res.json(blogs);
    }

    async getByID(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        const blog: Blog = await db.blogs.findOne({
            where: { id },
        });
        res.json(blog);
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        const blog: Blog = await db.blogs.findOne({
            where: { id },
        });
        const user = await db.users.findOne({
            where: { id: blog.user_id },
            include: ['blogs'],
        });
        res.json(user);
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const blog: Blog = req.body;
        try {
            await db.blogs.create(blog);
            res.json({ status: 'Create blog successfully!' });
        } catch (err) {
            console.log(err);
            res.json({ status: 'Create blog failed!' });
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        const blog: Blog = req.body;
        try {
            await db.blogs.update(blog, {
                where: { id },
            });
            res.json({ status: 'Update blog successfully!' });
        } catch (err) {
            console.log(err);
            res.json({ status: 'Update blog failed!' });
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);
        try {
            await db.blogs.destroy({
                where: { id },
            });
            res.json({ status: 'Delete blog successfully!' });
        } catch (err) {
            console.log(err);
            res.json({ status: 'Delete blog failed!' });
        }
    }
}

export default new BlogController();
