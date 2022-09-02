<template>
  <div class="flex items-center tabs-bar justify-between">
    <the-tabs />
    <user-item />
  </div>
</template>

<script>
import TheTabs from "./TheTabs.vue";
import UserItem from "./user/UserItem.vue";

export default {
  components: {
    TheTabs,
    UserItem,
  },
};
</script>

<style lang="scss" scoped>
.tabs-bar {
  width: 100%;
}
</style>
