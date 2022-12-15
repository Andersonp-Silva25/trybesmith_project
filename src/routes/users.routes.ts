import express from 'express';
import usersControllers from '../controllers/users.controllers';
import {
  validateLevel,
  validatePassword,
  validateUsername,
  validateVocation,
} from '../middleware/validateUser';

const userRouters = express.Router();

userRouters.post(
  '/', 
  validateLevel,
  validatePassword,
  validateUsername,
  validateVocation,
  usersControllers.createUser,
);

export default userRouters;