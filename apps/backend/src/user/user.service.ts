import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {

  }

  async createUser(createUserDto: CreateUserDto) {
    const { password, ...user } = createUserDto;

    const hashedPassword = await hash(password);

    return await this.prismaService.user.create({
      data: {
        ...user,
        password: hashedPassword
      } as User,
    })
  }

  async getUserById(id: string) {
    return await this.prismaService.user.findUnique({
      where: { id },
      include: {
        products: true,
      }
    })
  }

  async getUserByEmail(email: string, includeProducts = false) {
    return await this.prismaService.user.findUnique({
      where: { email },
      include: {
        products: includeProducts,
      }
    })
  }
}
