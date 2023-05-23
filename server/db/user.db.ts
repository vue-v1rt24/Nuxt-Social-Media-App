import { prisma } from '.';
import { User } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { IRegister } from '../types/auth.server.types';

// Создание пользователя
export const createUser = async (userData: Omit<IRegister, 'repeatPassword'>) => {
  return await prisma.user.create({
    data: {
      ...userData,
      password: hashSync(userData.password, 10),
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      profileImage: true,
    },
  });
};

// Получение одного пользователя по уникальному имени
export const getUserByUsername = async (username: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { username } });
};

// Получение пользователя по ID
export const getUserById = async (userId: number) => {
  return prisma.user.findUnique({ where: { id: userId } });
};
