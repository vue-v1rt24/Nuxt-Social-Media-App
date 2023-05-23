import { Tweet } from '@prisma/client';
import { User } from '@prisma/client';
import { MediaFiles } from '@prisma/client';
import { mediaFileTransformer } from './mediaFile.transformer';
import { userTransformer } from './user.transformer';

type TypeTweet = Tweet & { author: User; mediaFiles: MediaFiles[] };

export const tweetTransformer = (tweet: Tweet) => {
  return {
    id: tweet.id,
    text: tweet.text,
  };
};

export const tweetMediaAuthorTransformer = (tweet: TypeTweet) => {
  return {
    id: tweet.id,
    text: tweet.text,
    mediaFiles: !!tweet.mediaFiles ? tweet.mediaFiles.map(mediaFileTransformer) : [],
    author: !!tweet.author ? userTransformer(tweet.author) : null,
  };
};
