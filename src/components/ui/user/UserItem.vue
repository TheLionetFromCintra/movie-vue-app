<template>
  <div class="flex items-center">
    <span>Anonymous</span>
    <div class="img-wrapper flex items-center justify-center user-img">
      <img
        src="../../../assets/images/defaultAvatar.jpg"
        alt="User avatar"
        class="rounded-full object-cover"
        referrerpolicy="no-referrer"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-img {
  width: 28px;
  height: 28px;
  margin-left: 16px;
}
</style>
