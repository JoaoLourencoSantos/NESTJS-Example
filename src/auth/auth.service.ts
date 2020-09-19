import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import UserService from 'src/app/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async auth(email: string, virtualPass: string): Promise<any> {
    return await this.userService.auth(email, virtualPass);
  }

  async login(user: any) {
    const payload = { userId: user.id, userEmail: user.email };
    return {
      access_token: 'Bearer ' + this.jwtService.sign(payload),
      body: user,
    };
  }
}
