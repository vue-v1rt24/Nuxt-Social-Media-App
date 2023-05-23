import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { H3Event } from 'h3';

const { jwtAccessSecret, jwtRefreshSecret } = useRuntimeConfig();

const generateAccessToken = (user: User) => {
  return jwt.sign({ userId: user.id }, jwtAccessSecret, {
    expiresIn: '10h',
  });
};

const generateFreshToken = (user: User) => {
  return jwt.sign({ userId: user.id }, jwtRefreshSecret, {
    expiresIn: '4h',
  });
};

// Создание токена
export const generateTokens = (user: User) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateFreshToken(user);

  return {
    accessToken,
    refreshToken,
  };
};

// Запись токена в куки браузера
export const sendREfreshToken = (event: H3Event, token: string) => {
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true,
  });
};

// Проверка токена обновления(refresh) на срок годности и расшифровка
export const decodeRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, jwtRefreshSecret);
  } catch (error) {
    throw error;
  }
};

// Расшифровка токена(access)
export const decodeAccessToken = (token: string) => {
  try {
    return jwt.verify(token, jwtAccessSecret);
  } catch (error) {
    throw error;
  }
};
