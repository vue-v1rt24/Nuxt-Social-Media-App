<script setup lang="ts">
const generateRandomNumber = () => {
  return ~~(Math.random() * 100);
};
</script>

<template>
  <div class="actions-wrap">
    <TweetItemActionsImage color="var(--accent-color-num)">
      <template #image="{ classes }">
        <ImageActionsMessage :class="classes" />
      </template>

      <template #num>{{ generateRandomNumber() }}</template>
    </TweetItemActionsImage>

    <TweetItemActionsImage color="0 255 100">
      <template #image="{ classes }">
        <ImageActionsPath :class="classes" />
      </template>

      <template #num>{{ generateRandomNumber() }}</template>
    </TweetItemActionsImage>

    <TweetItemActionsImage color="155 0 255">
      <template #image="{ classes }">
        <ImageActionsHeart :class="classes" />
      </template>

      <template #num>{{ generateRandomNumber() }}</template>
    </TweetItemActionsImage>

    <TweetItemActionsImage color="255 0 0">
      <template #image="{ classes }">
        <ImageActionsArrowApTray :class="classes" />
      </template>

      <template #num>{{ generateRandomNumber() }}</template>
    </TweetItemActionsImage>
  </div>
</template>

<style lang="css" scoped>
.actions-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}
</style>
