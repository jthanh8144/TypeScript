import { Router } from "express";
import blogController from '../app/controllers/BlogController';

const router = Router();

router.get('/', blogController.getAll);
router.get('/:id', blogController.getByID);
router.get('/:id/user', blogController.getUser);
router.post('/create', blogController.create);
router.put('/:id', blogController.update);
router.delete('/:id', blogController.delete);

export default router;
