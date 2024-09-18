import { Users } from './user.entity';

export interface IUsers {
  create(param: Users): Promise<void>;
  findOne(username: string): Promise<Users>;
}
