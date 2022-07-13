import { Router } from "express";
import userController from '../app/controllers/UserController';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserByID);
router.get('/:id/blogs', userController.getBlogsOfUser);
router.post('/create', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
