import { LoginDTO } from "../DTO/login-DTO";
import prisma from "../libs/prisma";
import { registerDTO } from "../DTO/register-DTO";
import { User } from "@prisma/client";

class UserRepository {
  async findNameOrEmail(dto: LoginDTO): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: dto.nameOrEmail }, { profile: { fullName: dto.nameOrEmail } }],
      },
    });
    return user;
  }

  async checkUserByNameOrEmail(nameOrEmail: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: nameOrEmail }, { profile: { fullName: nameOrEmail } }],
      },
    });
    return user;
  }

  async createUser(dto: registerDTO): Promise<User> {
    const { fullName, ...otherDto } = dto;
    const user = await prisma.user.create({
      data: {
        ...otherDto,
        profile: {
          create: {
            fullName,
          },
        },
      },
    });

    return user;
  }
}

export default new UserRepository();
