<script setup lang="ts">
const { login } = useAuth();

/*  */
const data = reactive({
  username: 'Имя',
  password: '123',
});

const loading = ref(false);

/*  */
const loginHandler = async () => {
  loading.value = true;

  try {
    await login({ ...data });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="loginHandler" class="loginHandler">
    <UIInput label="Имя" placeholder="Имя" v-model="data.username" />
    <UIInput label="Пароль" placeholder="***" type="password" v-model="data.password" />

    <UIButton title="Войти" type="submit" />
  </form>
</template>

<style lang="css" scoped>
.loginHandler {
  width: 300px;
  max-width: 100%;
}
</style>
