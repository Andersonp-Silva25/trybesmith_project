import express from 'express';
import usersControllers from '../controllers/users.controllers';
import validateLogin from '../middleware/validateLogin';

const loginRouters = express.Router();

loginRouters.post('/', validateLogin, usersControllers.login);

export default loginRouters;