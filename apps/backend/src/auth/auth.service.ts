import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/Auth.dto';
import { verify } from 'argon2';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwt: JwtService
  ) { }

  EXPIRES_DAY_REFRESH_TOKEN = +process.env.EXPIRES_DAY_REFRESH_TOKEN || 7;
  REFRESH_TOKEN_COOKIE_NAME = process.env.REFRESH_TOKEN_COOKIE_NAME || 'refreshToken';

  async registerUser(createUserDto: CreateUserDto) {
    const oldUser = await this.userService.getUserByEmail(createUserDto.email);

    if (oldUser) {
      throw new ConflictException('User already exists');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userService.createUser(createUserDto);

    const { accessToken, refreshToken } = this.issueTokens(user.id);

    return {
      ...user,
      accessToken,
      refreshToken
    }
  }

  async loginUser(dto: LoginDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.validateUser(dto);

    const { accessToken, refreshToken } = this.issueTokens(user.id);

    return {
      ...user,
      accessToken,
      refreshToken
    };
  }


  private issueTokens(userId: string) {
    const data = { id: userId };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  getNewTokens(refreshToken: string) {
    const data = this.jwt.verify(refreshToken);

    if (!data) {
      throw new UnauthorizedException('Invalid token');
    }

    return this.issueTokens(data.id);
  }

  async validateUser(dto: LoginDto) {
    const user = await this.userService.getUserByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid password or login');
    }

    const isPasswordValid = await verify(user.password, dto.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password or login');
    }

    return user;
  }

  async addRefreshToken(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRES_DAY_REFRESH_TOKEN);

    res.cookie(this.REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
      httpOnly: true,
      expires: expiresIn,
      domain: process.env.BASE_APP_URL,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
    });
  }

  async removeRefreshToken(res: Response) {
    res.cookie(this.REFRESH_TOKEN_COOKIE_NAME, '', {
      httpOnly: true,
      expires: new Date(0),
      domain: process.env.BASE_APP_URL,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
    });
  }
}