import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthContoller {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'I am signed up';
  }

  @Post('signin')
  signin() {
    return 'I am signed in';
  }
}
