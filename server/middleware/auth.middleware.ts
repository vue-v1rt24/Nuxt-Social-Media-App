import { getUserById } from '../db/user.db';
import { decodeAccessToken } from '../utils/jwt';

export default defineEventHandler(async (event) => {
  const endpoints = ['/api/auth/user', '/api/user/tweets', '/api/tweets'];

  /* const isHandleByThisMiddleware = endpoints.some((endpoint) => {
    return event.node.req.url === endpoint;
  }); */

  if (!endpoints.includes(event.node.req.url || '')) return;

  // Получаем токен
  const token = event.node.req.headers['authorization']?.split(' ')[1];

  // Проверяем токен на срок годности и расшифровываем
  const decoded: any = decodeAccessToken(token || '');

  if (!decoded) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Неавторизованный',
    });
  }

  try {
    const userId = decoded.userId; // Получаем ID авторизованного пользователя из токена
    const user = await getUserById(userId);
    event.context.auth = { user };
  } catch (error) {
    throw error;
  }
});
