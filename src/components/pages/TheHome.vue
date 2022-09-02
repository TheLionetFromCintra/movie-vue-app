<template>
  <tabs-bar />
  <main-slider />
</template>

<script>
import MainSlider from "../sliders/main/MainSlider.vue";
import TabsBar from "../ui/TabsBar.vue";

export default {
  components: {
    MainSlider,
    TabsBar,
  },
};
</script>

<style lang="scss" scoped></style>
