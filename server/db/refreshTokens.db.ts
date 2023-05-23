import { prisma } from '.';

// Запись токена в БД
export const createRefreshToken = async (refreshToken: string, userId: number) => {
  return await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId,
    },
  });
};

// Токен обновления
export const getRefreshTokenByToken = async (token: string) => {
  return await prisma.refreshToken.findUnique({ where: { token } });
};
