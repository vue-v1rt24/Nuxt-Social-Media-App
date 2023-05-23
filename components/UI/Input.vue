<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue?: string;
    placeholder?: string;
    type?: string;
  }>(),
  {
    type: 'text',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void;
}>();

/*  */
const change = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="form-control">
    <label v-if="label" class="form-control-label">{{ label }}</label>

    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="change"
      class="form-control-input"
    />
  </div>
</template>

<style lang="css" scoped>
.form-control {
  margin-bottom: 30px;
}

.form-control-label {
  display: block;
  margin-bottom: 10px;
}

.form-control-input {
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 10px;
}
</style>
