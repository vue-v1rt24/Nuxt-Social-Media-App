<script setup lang="ts">
const handleClick = (evt: Event) => {
  console.log(evt);
};
</script>

<template>
  <div class="left-sidebar">
    <nav>
      <ImageLogo />

      <ul class="menu">
        <SidebarLeftTab active>
          <template #img>
            <ImageMenuHome />
          </template>

          <template #title>Главная</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuHash />
          </template>

          <template #title>Изучать</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuNotification />
          </template>

          <template #title>Уведомления</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuMessages />
          </template>

          <template #title>Сообщения</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuBookmark />
          </template>

          <template #title>Избранное</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuList />
          </template>

          <template #title>Списки</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuUser />
          </template>

          <template #title>Профиль</template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #img>
            <ImageMenuMore />
          </template>

          <template #title>Ещё</template>
        </SidebarLeftTab>
      </ul>
    </nav>

    <UIButton
      width="100%"
      title="Написать"
      bg="var(--accent-color)"
      @on-click="handleClick($event)"
    />
  </div>
</template>

<style lang="css" scoped>
.left-sidebar {
  height: 100vh;
  padding: 20px 30px 30px 30px;
}

/*  */
.menu {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding-left: 10px;
  margin-bottom: 20px;
}
</style>
