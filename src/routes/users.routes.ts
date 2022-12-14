import express from 'express';
import usersControllers from '../controllers/users.controllers';

const userRouters = express.Router();

userRouters.post('/', usersControllers.createUser);

export default userRouters;