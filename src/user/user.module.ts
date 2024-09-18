import { Module } from '@nestjs/common';
import { CreateUsersUseCase } from './useCases/createUser/createUsers.use-case';
import { CreateUserController } from './useCases/createUser/createUsers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './models/user.entity';
import { UsersRepo } from './repository/userREpo';
import { FindOneUserUseCase } from './useCases/findOneUser/findOneUser.use-case';
import { LoginUser } from './useCases/login/loginUser.controller';
import { FindOneUserController } from './useCases/findOneUser/findOneuser.controller';
import { ValidationUserUseCase } from 'src/auth/useCase/validationUser/validationUser.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [
    CreateUsersUseCase,
    FindOneUserUseCase,
    ValidationUserUseCase,
    UsersRepo,
    { provide: 'IUsers', useExisting: UsersRepo },
  ],
  controllers: [CreateUserController, LoginUser, FindOneUserController],
  exports: [FindOneUserUseCase],
})
export class UserModule {}
