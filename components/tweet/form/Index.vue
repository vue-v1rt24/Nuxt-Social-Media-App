<script setup lang="ts">
import { IUser } from '~/types/auth.types';
import { ITweetForm, IResTweet } from '~/types/tweet.types';

//
const { postTweet } = useTweets();

//
const props = defineProps<{
  user: IUser;
}>();

const emit = defineEmits<{
  (e: 'onSuccess', val: IResTweet): void;
  (e: 'asd'): void;
}>();

//
const loading = ref(false);

//
const handleFormSubmit = async (data: ITweetForm) => {
  loading.value = true;

  try {
    const tweet = await postTweet<IResTweet>(data);
    emit('onSuccess', tweet);
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: 'Ошибка при создании сообщения',
    });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <UISpinner v-if="loading" />

    <div v-else class="handleFormSubmit">
      <TweetFormInput :user="user" @on-submit="handleFormSubmit" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.handleFormSubmit {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
</style>
