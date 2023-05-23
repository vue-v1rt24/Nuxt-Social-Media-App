import { ITweetForm, ITweet } from '~/types/tweet.types';

export const useTweets = () => {
  const postTweet = async <T>(formData: ITweetForm): Promise<T> => {
    const form = new FormData();
    form.append('text', formData.text);

    formData.mediaFiles.forEach((mediaFile, index) => {
      if (mediaFile) {
        form.append(`media_file${index}`, mediaFile);
      }
    });

    return await useFetchApi<T>('/api/user/tweets', {
      method: 'POST',
      body: form,
    });
  };

  //
  const getHomeTweets = async (): Promise<{ tweets: ITweet[] }> => {
    try {
      return await useFetchApi<{ tweets: ITweet[] }>('/api/tweets');
    } catch (error) {
      throw error;
    }
  };

  //
  const getTweetById = async (tweetId: string): Promise<ITweet> => {
    try {
      return await useFetchApi<ITweet>(`/api/tweets/${tweetId}`);
    } catch (error) {
      throw error;
    }
  };

  //
  return {
    postTweet,
    getHomeTweets,
    getTweetById,
  };
};
