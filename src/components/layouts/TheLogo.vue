<template>
  <div>
    <router-link to="/" class="flex items-center">
      <div class="logo flex items-center justify-center">
        <img src="../../assets/images/cinema.png" alt="logo" />
      </div>
      <h1 class="text-lg text-white tracking-widest font-semibold uppercase">
        <span>movie</span><span class="title--blue">hunter</span>
      </h1>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  margin-left: 12px;
}
.title--blue {
  color: $color-primary-blue;
}
.logo {
  width: 40px;
  height: 40px;
  overflow: hidden;
}
</style>
