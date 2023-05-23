<script setup lang="ts"></script>

<template>
  <div class="logo">
    <NuxtLink to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="logo__svg"
      >
        <path
          fill="currentColor"
          d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z"
        />
      </svg>
    </NuxtLink>
  </div>
</template>

<style lang="css" scoped>
.logo {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
  transition: background-color 0.3s;
}

.logo:hover {
  background-color: rgb(0 195 255 / 0.05);
}

.logo__svg {
  width: 32px;
  height: 32px;
  color: var(--accent-color);
}
</style>
