import { getRefreshTokenByToken } from '~/server/db/refreshTokens.db';
import { getUserById } from '~/server/db/user.db';
import { decodeRefreshToken, generateTokens } from '~/server/utils/jwt';

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  // Получаем нужный токен из кук
  const refreshToken = cookies.refresh_token;

  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Refresh token is invalid',
      message: 'Токен обновления не доступен',
    });
  }

  // Получаем запись токена из БД по токену
  const rToken = getRefreshTokenByToken(refreshToken);

  if (!rToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Refresh token is invalid',
      message: 'Токен обновления не доступен',
    });
  }

  // Проверка токена на срок годности и расшифровка
  const token: any = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);

    let tokenAccess = null;

    if (user) {
      const { accessToken } = generateTokens(user);
      tokenAccess = accessToken;
    }

    return {
      access_token: tokenAccess,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong',
      message: 'Что-то пошло не так',
    });
  }
});
