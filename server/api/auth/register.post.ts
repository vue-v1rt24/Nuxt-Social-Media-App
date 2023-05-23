import { createUser, getUserByUsername } from '~/server/db/user.db';
import { IRegister } from '~/server/types/auth.server.types';

export default defineEventHandler(async (event) => {
  const body = await readBody<IRegister>(event);
  const { name, username, email, password, repeatPassword } = body;

  try {
    if (!username || !name || !email || !password || !repeatPassword) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid params',
        message: 'Заполните все поля',
      });
    }

    if (password !== repeatPassword) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Password do not match',
        message: 'Пароли не совпадают',
      });
    }

    // Проверяем на существование пользователя в БД
    const candidate = await getUserByUsername(username);

    if (candidate) {
      throw createError({
        statusCode: 400,
        statusMessage: '',
        message: 'Пользователь с таким именем уже существует',
      });
    }

    // Формируем данные для записи в БД
    const userData = {
      username,
      name,
      email,
      password,
      profileImage: 'https://lipsum.app/random/50x50',
    };

    const user = await createUser(userData);

    return {
      user,
    };
  } catch (error) {
    throw error;
  }
});
