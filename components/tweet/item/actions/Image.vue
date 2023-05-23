<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="actions">
    <div class="actions__svg">
      <slot name="image" classes="actions__slot-svg" />
    </div>

    <span class="actions__num">
      <slot name="num" />
    </span>
  </div>
</template>

<style lang="css" scoped>
.actions {
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
}

.actions__svg {
  background-color: transparent;
  border-radius: 50%;
  padding: 8px;
  transition: background-color 0.3s;
}

.actions:hover .actions__svg {
  background-color: rgb(v-bind(color) / 0.1);
}

.actions__num {
  transition: color 0.3s;
}

.actions:hover .actions__num {
  color: rgb(v-bind(color));
}
</style>

<style>
.actions__slot-svg {
  width: 30px;
  color: #ccc;
  display: block;
}
</style>
