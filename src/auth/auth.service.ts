import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from '../models/user.model';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor() // private userRepository: UserRepository,
  //private jwtService: JwtService,
  {}

  async validateUser(payload: JwtPayload): Promise<string> {
    const { username } = payload;
    const user =
      'usuario'; /* await this.userRepository.findOne({ username }); */
    return user;
  }

  /*   async login(
    username: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const payload: JwtPayload = { id: user.id, username: user.username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  } */
}
