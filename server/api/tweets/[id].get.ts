import { getTweetById } from '~/server/db/tweets';
import {
  tweetMediaAuthorTransformer,
  tweetTransformer,
} from '~/server/transformers/tweet.transformer';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params!;
  const tweet = await getTweetById(+id);

  return tweetMediaAuthorTransformer(tweet!);
});
