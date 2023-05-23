<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="previewCard">
    <h2 class="previewCard__h2">{{ title }}</h2>

    <slot />

    <div class="previewCard__link">
      <NuxtLink to="/">Показать больше</NuxtLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
.previewCard {
  background-color: #f4f9f6;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
}

.previewCard__h2 {
  font-weight: 900;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.previewCard__link {
  font-size: 14px;
  padding: 10px;
}

.previewCard__link a {
  color: var(--accent-color);
}
</style>
