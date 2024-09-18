import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local.auth.guard';

@Controller('auth')
export class LoginUser {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req): any {
    return { message: 'User Logado!' };
  }

  @Get('logout')
  logout(@Req() req) {
    req.session.delete();
    return { message: 'User deslogado!' };
  }
}
