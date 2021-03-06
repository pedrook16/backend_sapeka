import { Router } from 'express';
import UserController from '../controllers/UserController';

const usersRouter = Router();

// instances
const userController = new UserController();

usersRouter.post('/', userController.store);

export default usersRouter;
