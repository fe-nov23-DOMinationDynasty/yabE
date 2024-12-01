import { Controller, Post, Body, UsePipes, ValidationPipe, HttpCode, Res, UnauthorizedException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/Auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { refreshToken, ...response } = await this.authService.registerUser(createUserDto);

    this.authService.addRefreshToken(res, refreshToken);

    return response;
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async loginUser(@Body() authDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { refreshToken, ...response } = await this.authService.loginUser(authDto);

    this.authService.addRefreshToken(res, refreshToken);

    return response;
  }

  @HttpCode(200)
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshToken(res);

    return true;
  }

  @HttpCode(200)
  @Post('login/access-token')
  async getNewTokens(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const refreshTokenFromCookies = req.cookies[this.authService.REFRESH_TOKEN_COOKIE_NAME];

    if (!refreshTokenFromCookies) {
      throw new UnauthorizedException('Refresh token not found');
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(refreshTokenFromCookies);

    this.authService.addRefreshToken(res, refreshToken);

    return response;
  }
}
