<script setup lang="ts">
import { ITweet } from '~/types/tweet.types';

const props = defineProps<{
  tweet: ITweet;
}>();
</script>

<template>
  <li class="tweet">
    <TweetItemHeader :id-post="tweet.id" :author="tweet.author" />

    <div class="tweet__bx-image">
      <p class="tweet__bx-image-title">{{ tweet.text }}</p>

      <div v-for="image in tweet.mediaFiles" :key="image.id" class="tweet__bx-image-img">
        <img :src="'/' + image.url" alt="" />
      </div>
    </div>

    <TweetItemActions />
  </li>
</template>

<style lang="css" scoped>
.tweet {
  padding: 30px;
}

.tweet:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.tweet__bx-image-img {
  border-radius: 20px;
  overflow: hidden;
  margin: 30px 0;
}
</style>
