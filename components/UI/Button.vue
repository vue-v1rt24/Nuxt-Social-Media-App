<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'reset' | 'submit';
    width?: string;
    title: string;
    fontSize?: string;
    colorText?: string;
    bg?: string;
    disabled?: boolean;
  }>(),
  {
    type: 'button',
    width: 'auto',
    fontSize: '16px',
    colorText: 'white',
    bg: 'black',
    disabled: false,
  },
);

//
const emit = defineEmits<{
  (e: 'onClick', val: Event): void;
}>();

//
const handleClick = ($event: Event) => {
  emit('onClick', $event);
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :style="{ width, fontSize, color: colorText, backgroundColor: bg }"
    class="btnComponent"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<style lang="css" scoped>
.btnComponent {
  font-size: 14px;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  transition: opacity 0.2s;
}

.btnComponent:hover {
  opacity: 0.7;
}

.btnComponent:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
