import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';

import User from '../models/user';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser({ email, name, password, dateBirth }): Promise<User> {
    const user = new User();
    user.email = email;
    user.name = name;
    user.dateBirth = dateBirth;
    user.password = await this.hashPassword(password, 10);

    return await this.save(user);
  }

  private async hashPassword(password: string, salt: number): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
