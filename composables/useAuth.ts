import jwt_decode from 'jwt-decode';
import { ILogin, IUser, IJwt } from '~/types/auth.types';

export const useAuth = () => {
  const useAuthToken = () => useState('auth_token');
  const useAuthUser = () => useState<IUser>('auth_user');
  const useAuthLoading = () => useState('auth_loading', () => true);

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: any) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (val: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = val;
  };

  // Авторизация
  const login = ({ username, password }: ILogin) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await useFetch('/api/auth/login', {
          method: 'POST',
          body: { username, password },
        });

        setToken(data.value?.access_token || '');
        setUser(data.value?.user || null);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  // Проверка авторизации при обновлении страницы
  // Сделали обновление страницы и если авторизованы, то попадаем на страницу иначе на страницу авторизации
  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/refresh');
        setToken(data.access_token || '');
        console.log(data.access_token);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi<{ user: IUser }>('/api/auth/user');
        setUser(data.user || null);
        // console.log(data.user);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken(); // получаем временный токен

    if (!authToken.value) return;

    const jwt: IJwt = jwt_decode(authToken.value as string); // расшифровываем токен
    const newRefreshTime = jwt.exp - 60000; // отнимаем из времени завершения токена одну минуту

    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await refreshToken(); // генерация временного токена
        await getUser(); // получение текущего пользователя
        reRefreshAccessToken(); // токен обновления, который будет обновляться самостоятельно

        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  };

  ///
  return {
    login,
    useAuthToken,
    useAuthUser,
    initAuth,
    useAuthLoading,
  };
};
