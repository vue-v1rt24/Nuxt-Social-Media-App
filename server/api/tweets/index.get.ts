import { getTweets } from '~/server/db/tweets';
import { tweetMediaAuthorTransformer } from '~/server/transformers/tweet.transformer';

export default defineEventHandler(async (event) => {
  try {
    const tweets = await getTweets();

    return {
      tweets: tweets.map(tweetMediaAuthorTransformer),
    };
  } catch (error) {
    throw error;
  }
});
