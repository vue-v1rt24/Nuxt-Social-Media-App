<script setup lang="ts">
import { ITweet } from '~/types/tweet.types';

const props = defineProps<{
  idPost: number;
  author: ITweet['author'];
}>();
</script>

<template>
  <div class="author">
    <div v-if="author?.profileImage">
      <img class="author__img" :src="author.profileImage" alt="" />
    </div>

    <span class="author__name">{{ author?.name }}</span>
    <span class="author__name">
      <NuxtLink :to="{ name: 'status-id', params: { id: idPost } }">{{ author?.handle }}</NuxtLink>
      <!-- <NuxtLink :to="`/status/${idPost}`">{{ author?.handle }}</NuxtLink> -->
    </span>
  </div>
</template>

<style lang="css" scoped>
.author {
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;
}

.author__img {
  border-radius: 50%;
}
</style>
