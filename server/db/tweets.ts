import { prisma } from '.';
import { ITweet } from '../types/tweet.server.types';

export const createTweet = async (tweetData: ITweet) => {
  return await prisma.tweet.create({
    data: tweetData,
  });
};

export const getTweets = async () => {
  return prisma.tweet.findMany({
    include: {
      author: true,
      mediaFiles: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getTweetById = async (id: number) => {
  return await prisma.tweet.findUnique({
    where: { id },
    include: {
      mediaFiles: true,
      author: true,
    },
  });
};
