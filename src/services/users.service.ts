import { CreateUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import UserModel from '../models/users.model';

class UserService {
  public users = new UserModel();

  public async findUserById(userId: number): Promise<User> {
    const user = await this.users.getUserById(userId);
    if (user) return user;
    throw new HttpException(409, "You're not user");
  }
}

export default UserService;
