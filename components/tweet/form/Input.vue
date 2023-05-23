<script setup lang="ts">
import { IUser } from '~/types/auth.types';
import { ITweetForm } from '~/types/tweet.types';

const props = defineProps<{
  user: IUser;
}>();

const emit = defineEmits<{
  (e: 'onSubmit', val: ITweetForm): void;
}>();

//
const inputText = ref('');
const imageLoadImg = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const inputImageUrl = ref<string | ArrayBuffer | null>(null);

//
const isDisabled = computed(() => {
  return !inputText.value;
});

//
const handleFormSubmit = (evt: Event) => {
  emit('onSubmit', {
    text: inputText.value,
    mediaFiles: [selectedFile.value],
  });

  inputText.value = inputImageUrl.value = '';
  selectedFile.value = null;
};

const handleImageClick = () => {
  imageLoadImg.value?.click();
};

const handleImageChange = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  const file = target.files && target.files[0];
  selectedFile.value = file;

  if (file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      inputImageUrl.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <form @submit.prevent="handleFormSubmit" class="addTweet">
    <div class="addTweet__top">
      <div>
        <img class="addTweet__img" :src="user.profileImage" alt="" />
      </div>

      <textarea
        class="addTweet__text"
        v-model="inputText"
        placeholder="Напишите сообщение"
      ></textarea>
    </div>

    <img v-if="inputImageUrl" width="250" :src="inputImageUrl.toString()" alt="" />

    <div class="addTweet__button">
      <input
        type="file"
        hidden
        ref="imageLoadImg"
        accept=".png, .gif, .jpeg, jpg"
        @change="handleImageChange"
      />

      <div class="addTweet__images-link">
        <ImageLoadImg @click="handleImageClick" />
        <ImageGifImg />
        <ImageChartImg />
        <ImageEmojiImg />
        <ImageCalendarImg />
      </div>

      <UIButton title="Отправить" type="submit" bg="var(--accent-color)" :disabled="isDisabled" />
    </div>
  </form>
</template>

<style lang="css" scoped>
.addTweet {
  padding: var(--padding-main);
}

.addTweet__top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.addTweet__img {
  border-radius: 50%;
}

.addTweet__text {
  width: 100%;
  height: 50px;
  border: 1px solid transparent;
}

.addTweet__text:focus {
  border: 1px solid #ccc;
}

/*  */
.addTweet__button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.addTweet__images-link {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding-left: 54px;
}

.addTweet__images-link svg {
  width: 20px;
  color: var(--accent-color);
  cursor: pointer;
}
</style>
