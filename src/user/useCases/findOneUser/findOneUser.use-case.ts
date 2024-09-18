import { Inject, Injectable } from '@nestjs/common';
import { IUsers } from 'src/user/models/userRepo.inteface';

@Injectable()
export class FindOneUserUseCase {
  @Inject('IUsers')
  private readonly usersRepo: IUsers;

  async execute(username: string) {
    return await this.usersRepo.findOne(username);
  }
}
