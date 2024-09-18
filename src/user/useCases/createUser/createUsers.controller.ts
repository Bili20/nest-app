import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUsersUseCase } from './createUsers.use-case';

@Controller('users')
export class CreateUserController {
  @Inject(CreateUsersUseCase)
  private readonly createUsersUseCase: CreateUsersUseCase;

  @Post()
  async create(@Body() param: { username: string; password: string }) {
    return await this.createUsersUseCase.execute(param);
  }
}
