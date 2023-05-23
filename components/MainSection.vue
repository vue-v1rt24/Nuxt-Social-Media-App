<script setup lang="ts">
const props = defineProps<{
  title: string;
  loading: boolean;
}>();
</script>

<template>
  <div class="content">
    <div class="content__sticky">
      <h1 class="content__h1">{{ title }}</h1>
    </div>

    <div v-if="loading" class="loading">
      <UISpinner />
    </div>

    <div v-else>
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.content {
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  padding-top: 20px;
}

/*  */
.content__sticky {
  position: sticky;
  top: 0;
  /* padding: var(--padding-main); */
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  margin-bottom: 30px;
}

.content__h1 {
  font-weight: 900;
  font-size: 24px;
}

/*  */
.loading {
  border-bottom: 1px solid var(--border-color);
}
</style>
