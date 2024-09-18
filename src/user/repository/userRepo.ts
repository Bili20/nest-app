import { Injectable } from '@nestjs/common';
import { IUsers } from '../models/userRepo.inteface';
import { Users } from '../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepo implements IUsers {
  constructor(
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,
  ) {}

  async create(param: Users): Promise<void> {
    await this.userRepo.save(param);
  }

  async findOne(username: string): Promise<Users> {
    return await this.userRepo.findOne({ where: { username: username } });
  }
}
