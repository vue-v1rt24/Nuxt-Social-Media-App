<script setup lang="ts">
const props = defineProps<{
  active?: boolean;
}>();

/*  */
const isActiveClass = computed(() => props.active && 'active');
</script>

<template>
  <li class="menu__item">
    <NuxtLink to="/" :class="['menu__link', isActiveClass]">
      <div class="menu__img">
        <slot name="img" />
      </div>

      <div class="menu__name">
        <slot name="title" />
      </div>
    </NuxtLink>
  </li>
</template>

<style lang="css" scoped>
.menu__link {
  color: black;
  display: flex;
  align-items: center;
  gap: 0 10px;
  transition: color 0.3s, text-decoration 0.3s;
}

.menu__link.active,
.menu__link:hover {
  color: var(--accent-color);
}

.menu__link.active {
  color: var(--accent-color);
  pointer-events: none;
}
</style>
