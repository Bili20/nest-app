import { Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { FindOneUserUseCase } from 'src/user/useCases/findOneUser/findOneUser.use-case';

@Injectable()
export class ValidationUserUseCase {
  @Inject(FindOneUserUseCase)
  private readonly findOneUserUseCase: FindOneUserUseCase;

  async execute(username: string, password: string): Promise<any> {
    const user = await this.findOneUserUseCase.execute(username);
    if (!user) {
      throw new NotAcceptableException('Usuario não encontrado');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      return {
        userId: user.id,
        userName: user.username,
      };
    }
    return null;
  }
}
