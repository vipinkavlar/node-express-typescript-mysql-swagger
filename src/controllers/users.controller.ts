import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
import userService from '../services/users.service';

class UsersController {
  public userService = new userService();

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId: number = Number(req.params.id);

    try {
      const findOneUserData: User = await this.userService.findUserById(userId);
      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
