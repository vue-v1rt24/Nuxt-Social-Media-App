import { compare } from 'bcrypt';
import { getUserByUsername } from '~/server/db/user.db';
import { createRefreshToken } from '~/server/db/refreshTokens.db';
import { generateTokens, sendREfreshToken } from '~/server/utils/jwt';
import { userTransformer } from '~/server/transformers/user.transformer';
import { ILogin } from '~/server/types/auth.server.types';

export default defineEventHandler(async (event) => {
  const body = await readBody<ILogin>(event);
  const { username, password } = body;

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid params',
      message: 'Заполните все поля',
    });
  }

  // Получаем зарегистрированного пользователя
  const user = await getUserByUsername(username);

  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid',
      message: 'Логин / Пароль не верны',
    });
  }

  // Проверка пароля
  const doesThePasswordMatch = await compare(password, user.password);

  if (!doesThePasswordMatch) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid',
      message: 'Логин / Пароль не верны',
    });
  }

  // Создание токена
  // Временный токен / access token
  // Обновление токена / refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  // Сохранение токена в БД
  await createRefreshToken(refreshToken, user.id);

  // Сохранение токена в куки браузера
  sendREfreshToken(event, refreshToken);

  ///
  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
