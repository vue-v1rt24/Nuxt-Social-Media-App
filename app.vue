<script setup lang="ts">
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const user = useAuthUser();
const isAuthLoading = useAuthLoading();

/*  */
onBeforeMount(() => {
  initAuth();
});
</script>

<template>
  <LoadingPage v-if="isAuthLoading" />

  <div v-else-if="user" class="wrapperApp">
    <!-- Левый блок -->
    <SidebarLeft />

    <!-- Контент -->
    <main class="main">
      <NuxtPage />
    </main>

    <!-- Правый блок -->
    <SidebarRight />
  </div>

  <AuthPage v-else />
</template>

<style lang="css" scoped>
.wrapperApp {
  max-width: 1920px;
  display: grid;
  grid-template-columns: 300px 1fr 400px;
  margin: 0 auto;
}
</style>
