<script setup lang="ts">
import { ITweet } from '~/types/tweet.types';

const route = useRoute();
const { getTweetById } = useTweets();

const { useAuthUser } = useAuth();
const user = useAuthUser();

const loading = ref(false);
const tweet = ref<ITweet | null>(null);

//
const getTweet = async () => {
  loading.value = true;
  const id = route.params.id as string;

  try {
    tweet.value = await getTweetById(id);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

//
onBeforeMount(async () => {
  await getTweet();
});

//
watch(
  () => route.fullPath,
  () => {
    getTweet();
  },
);
</script>

<template>
  <div>
    <MainSection title="Сообщение" :loading="loading">
      <TweetDetails :tweet="tweet!" :user="user" />
    </MainSection>
  </div>
</template>

<style lang="css" scoped></style>
