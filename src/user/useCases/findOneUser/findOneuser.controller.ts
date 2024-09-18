import {
  Body,
  Controller,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FindOneUserUseCase } from './findOneUser.use-case';
import { AuthenticatedGuard } from 'src/auth/guards/auth.guard';

@Controller('user')
export class FindOneUserController {
  @Inject(FindOneUserUseCase)
  private readonly findOneUserUseCase: FindOneUserUseCase;

  @UseGuards(AuthenticatedGuard)
  @Post()
  async findOne(@Request() req) {
    return await this.findOneUserUseCase.execute(req.user);
  }
}
