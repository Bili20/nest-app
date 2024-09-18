import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IUsers } from '../../models/userRepo.inteface';
import { Users } from 'src/user/models/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUsersUseCase {
  @Inject('IUsers')
  private readonly usersRepo: IUsers;

  async execute(param: { username: string; password: string }) {
    try {
      const hashPassword = await bcrypt.hash(param.password, 10);
      const user = new Users();
      user.username = param.username;
      user.password = hashPassword;
      return await this.usersRepo.create(user);
    } catch (e) {
      if (e.code == 23505) {
        e.response = 'Username já esta sendo usado.';
      }
      throw new BadRequestException({
        message: 'Erro ao cadastrar usuario.',
      });
    }
  }
}
