import { prisma } from '.';
import { IFileCreate } from '../types/tweet.server.types';

export const createMediaFile = async (mediaFile: IFileCreate) => {
  return await prisma.mediaFiles.create({
    data: mediaFile,
    select: {
      id: true,
      url: true,
      userId: true,
      tweetId: true,
    },
  });
};
