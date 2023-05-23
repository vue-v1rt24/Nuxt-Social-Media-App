import { resolve } from 'node:path';
import formidable from 'formidable';
import { FileType, createLoadImageDir } from '~/server/utils/createLoadImageDir';
import { createTweet } from '~/server/db/tweets';
import { tweetTransformer } from '~/server/transformers/tweet.transformer';
import { createMediaFile } from '~/server/db/mediaFile';
import { IForm, ITweet } from '~/server/types/tweet.server.types';

const __dirname = resolve();

export default defineEventHandler(async (event) => {
  try {
    // Проверка существования пути или создание папки для изображений
    await createLoadImageDir(FileType.IMAGES);

    const form = formidable({ multiples: true });

    const response: IForm = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err: any, fields: any, files: any) => {
        if (err) {
          reject(err);
        }

        resolve({ fields, files });
      });

      form.on('fileBegin', (formname, file) => {
        const fileName = file.originalFilename;
        const expansion = fileName?.substring(fileName.lastIndexOf('.'));
        const newFile = file.newFilename + expansion;

        file.filepath = __dirname + `/public/${FileType.IMAGES}/` + newFile;
        file.originalFilename = `${FileType.IMAGES}/` + newFile;
      });
    });

    const { fields, files } = response; // здесь находятся все данные формы

    // Получаем ID авторизованного пользователя
    const userId: number = event.context?.auth?.user?.id;

    // Создаём запись сообщения в БД
    const tweetData: ITweet = {
      text: fields.text,
      authorId: userId,
    };

    const tweet = await createTweet(tweetData);

    // Сохраняем изображения в БД
    const filePromises = Object.keys(files).map(async (key) => {
      return await createMediaFile({
        url: (files as any)[key].originalFilename,
        userId,
        tweetId: tweet.id,
      });
    });

    const res = await Promise.all(filePromises);

    return {
      tweet: tweetTransformer(tweet),
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong',
      message: 'Что-то пошло не так',
    });
  }
});
