<script setup lang="ts">
import { ITweet } from '~/types/tweet.types';

//
useHead({
  title: 'Главная',
});

//
const { useAuthUser } = useAuth();
const user = useAuthUser();

const { getHomeTweets } = useTweets();

//
const loading = ref(false);
const homeTweets = ref<ITweet[]>([]);

//
onBeforeMount(async () => {
  loading.value = true;

  try {
    const { tweets } = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <MainSection title="Главная" :loading="loading">
      <TweetForm :user="user" />

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<style lang="css" scoped></style>
