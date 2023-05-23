<script setup lang="ts">
import { ITweet } from '~/types/tweet.types';

//
const props = defineProps<{
  tweets: ITweet[];
}>();

//
const isEmptyArray = computed(() => !props.tweets.length);

const redirect = (tweet: ITweet) => {
  navigateTo(`/status/${tweet.id}`);
  // navigateTo({ name: 'status-id', params: { id: tweet.id } });
};
</script>

<template>
  <div class="listFeed">
    <div v-if="isEmptyArray" class="listFeed__not-tweet">Пока нет сообщений</div>

    <ul v-else>
      <TweetItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" @click="redirect(tweet)" />
    </ul>
  </div>
</template>

<style lang="css" scoped>
.listFeed__not-tweet {
  text-align: center;
  padding: 30px 0;
}
</style>
