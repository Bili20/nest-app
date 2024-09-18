import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ValidationUserUseCase } from '../useCase/validationUser/validationUser.use-case';

@Injectable()
export class LocalAuthGuard implements CanActivate {
  constructor(private readonly validationUserUseCase: ValidationUserUseCase) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const user = await this.validationUserUseCase.execute(
      request.body['username'],
      request.body['password'],
    );
    if (user) {
      request.session.set('username', request.body['username']);
      return true;
    }
    return false;
  }
}
