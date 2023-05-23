<script setup lang="ts">
import { IWhatsHappening, IWhoToFollow } from '~/types/sidebarRight';

//
const whatsHappeningItems = ref<IWhatsHappening[]>([
  { title: 'Роскосмос', count: '50.5 К сообщений' },
  { title: 'Программирование', count: '30.5 К сообщений' },
  { title: 'Искусство для всех', count: '40.5 К сообщений' },
]);

const whoToFollowItems = ref<IWhoToFollow[]>([
  { name: 'Захар', handle: 'Петров', image: '/img/User-Avatar.png' },
  { name: 'Илья', handle: 'Панчен', image: '/img/User-Avatar.png' },
  { name: 'Даша', handle: 'Лучевая', image: '/img/User-Avatar.png' },
]);
</script>

<template>
  <div class="right-sidebar">
    <!--  -->
    <SidebarRightPreviewCard title="Что происходит">
      <SidebarRightPreviewCardItem
        v-for="whatsHappeningItem in whatsHappeningItems"
        :key="whatsHappeningItem.title"
      >
        <div class="what">
          <dl class="what__text">
            <dt class="what__title">{{ whatsHappeningItem.title }}</dt>
            <dd class="what__desc">{{ whatsHappeningItem.count }}</dd>
          </dl>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!--  -->
    <SidebarRightPreviewCard title="Подписаться">
      <SidebarRightPreviewCardItem
        v-for="whoToFollowItem in whoToFollowItems"
        :key="whoToFollowItem.name"
      >
        <div class="what who">
          <div class="what__text">
            <div class="what__text-img">
              <img
                width="30"
                :src="whoToFollowItem.image"
                :alt="whoToFollowItem.name"
              />
            </div>

            <div>
              <div class="what__title">{{ whoToFollowItem.name }}</div>
              <div class="what__desc">{{ whoToFollowItem.handle }}</div>
            </div>
          </div>

          <UIButton title="Подписаться" font-size="12px" />
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<style lang="css" scoped>
.right-sidebar {
  padding: 30px;
}

/*  */
.what {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.what__title {
  font-weight: 900;
  margin-bottom: 5px;
}

.what__desc {
  color: #a3a3a3;
  font-weight: 500;
  font-size: 12px;
}

/*  */
.what.who {
  padding: 15px;
}

.who .what__text {
  display: flex;
  align-items: center;
  gap: 0 10px;
}

.who .what__title {
  font-size: 14px;
}
</style>
