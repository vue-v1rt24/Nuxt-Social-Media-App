<script setup lang="ts"></script>

<template>
  <div class="loading">
    <div class="loading__anim">
      <ImageLogo />
    </div>
  </div>
</template>

<style lang="css" scoped>
.loading {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading__anim {
  animation: pin 1s infinite;
}

@keyframes pin {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(2);
    opacity: 1;
  }
}
</style>
