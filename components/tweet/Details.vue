<script setup lang="ts">
import { IUser } from '~/types/auth.types';
import { ITweet, IResTweet } from '~/types/tweet.types';

//
const props = defineProps<{
  tweet: ITweet;
  user: IUser;
}>();

//
const handleFormSuccess = (data: IResTweet) => {
  navigateTo({ name: 'status-id', params: { id: props.tweet.id } });
};
</script>

<template>
  <div>
    <ul>
      <TweetItem :tweet="tweet" />
    </ul>

    <TweetForm :user="user" @on-success="handleFormSuccess" />
  </div>
</template>

<style lang="css" scoped></style>
