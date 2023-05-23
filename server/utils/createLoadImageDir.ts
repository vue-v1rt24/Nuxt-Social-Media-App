import { access, constants, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = resolve();

export enum FileType {
  IMAGES = 'images',
}

export const createLoadImageDir = async (type: FileType): Promise<void> => {
  // Прописываем путь
  const dir = resolve(__dirname, 'public', type);

  try {
    // Проверяем на существование пути
    await access(dir, constants.R_OK | constants.W_OK);
    // console.log('Есть папка');
  } catch (error) {
    // Создаём папку
    await mkdir(dir, { recursive: true });
    // console.error('Нет папки');
  }
};
