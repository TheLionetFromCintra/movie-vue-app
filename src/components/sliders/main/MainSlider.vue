<template>
  <div class="main-slider">
    <base-spinner v-if="isMainSliderLoaded" />
    <swiper
      :speed="500"
      :navigation="true"
      :modules="modules"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      v-if="mainSlides"
    >
      <swiper-slide v-for="slide in mainSlides" :key="slide.id">
        <main-slide :slide="slide" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import MainSlide from "./MainSlide.vue";
import { mapGetters } from "vuex";

import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSlide,
  },
  data() {
    return {
      error: "",
    };
  },
  methods: {
    async loadMainSlider() {
      try {
        await this.$store.dispatch("movies/loadMainSlider", {
          typePlaying: "airing_today",
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
  computed: {
    ...mapGetters({
      mainSlides: "movies/mainSlider",
      isMainSliderLoaded: "movies/isMainSliderLoaded",
    }),
  },
  mounted() {
    this.loadMainSlider();
  },
};
</script>

<style lang="scss" scoped>
.main-slider {
  margin-top: 24px;
  width: 100%;
  height: 570px;
  position: relative;
  border-radius: 8px;
  perspective: 1px;
  overflow: hidden;
}
</style>
