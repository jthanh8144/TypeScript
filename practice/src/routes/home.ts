import { Router } from "express";
import homeController from '../app/controllers/HomeController';

const router = Router();

router.get('/', homeController.home);

export default router;
