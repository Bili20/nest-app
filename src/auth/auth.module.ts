import { Module } from '@nestjs/common';

import { UserModule } from 'src/user/user.module';

import { ValidationUserUseCase } from './useCase/validationUser/validationUser.use-case';

@Module({
  imports: [UserModule],
  providers: [ValidationUserUseCase],
})
export class AuthModule {}
