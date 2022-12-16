import { execute } from '../utils/db';
import { User } from '../interfaces/users.interface';

class UserModel {

    private tableName: string = "users";

    constructor() { }

    /**
    * Get user details by id.
    * @params user_id
    */
    public async getUserById(user_id: number) {
        try {
            let conditions: {}[] = [];
            conditions.push(user_id);

            let query = `SELECT
                name, email
                FROM 
                ` + this.tableName + ` 
                WHERE id = ?
                `;

            return execute<User>(query, conditions);

        } catch (error) { return null; }
    }
  }

export default UserModel;
