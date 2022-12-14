<template>
  <router-link
    class="slide flex items-center"
    :to="`/${getCurrentState === 'tv' ? 'tv' : 'movie'}/${slide.id}`"
  >
    <div
      class="slide-rating flex items-center rounded-full"
      v-if="slide.vote_average"
    >
      <span>{{ slide.vote_average }}</span>
      <svg>
        <use href="../../../assets/images/icons.svg#icon-rating"></use>
      </svg>
    </div>
    <div class="slide-play-btn rounded-full flex items-center justify-center">
      <svg>
        <use href="../../../assets/images/icons.svg#icon-play-btn"></use>
      </svg>
    </div>
    <div class="img-wrapper" v-if="slide.backdrop_path">
      <div class="img img-wrapper flex items-center justify-center">
        <img
          :src="backdropImage"
          :alt="getCurrentState === 'tv' ? slide.name : slide.title"
        />
      </div>
    </div>
    <div class="slide-content">
      <h2
        class="slide-title text-5xl font-black tracking-wide text-overflow"
        v-if="slide.name || slide.title"
      >
        {{ getCurrentState === "tv" ? slide.name : slide.title }}
      </h2>
      <div
        class="slide-subtitle text-white font-semibold text-2xl text-base"
        v-if="slide.original_name || slide.original_title"
      >
        <span>{{
          getCurrentState === "tv" ? slide.original_name : slide.original_title
        }}</span>
      </div>
      <div class="slide-date" v-if="slide.first_air_date || slide.release_date">
        <span>
          {{ getCurrentState === "tv" ? "First air date:" : "Release date:" }}
          {{
            getCurrentState === "tv" ? slide.first_air_date : slide.release_date
          }}</span
        >
      </div>
      <div class="slide-genres flex items-center">
        <div
          class="slide-genre rounded-full"
          v-for="genre in genres"
          :key="genre.id"
        >
          {{ genre.name }}
        </div>
      </div>
      <div class="slide-text text-overflow" v-if="slide.overview">
        <p>{{ slide.overview }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import api from "../../../api.js";

export default {
  props: ["slide"],
  data() {
    return {
      genres: [],
      error: "",
    };
  },
  computed: {
    getCurrentState() {
      return this.$store.getters["movies/currentState"];
    },
    backdropImage() {
      return "https://image.tmdb.org/t/p/w1280" + this.slide.backdrop_path;
    },
  },
  methods: {
    async getGenres() {
      try {
        const res = await api.get(`/genre/${this.getCurrentState}/list`);
        const data = res.data.genres;
        this.genres = data
          .map((item) => {
            if (this.slide.genre_ids.includes(item.id)) {
              return item;
            }
          })
          .filter((item) => item);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },

  mounted() {
    this.getGenres();
  },
};
</script>

<style lang="scss" scoped>
.slide {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  padding-left: 70px;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &::before {
    background: linear-gradient(270deg, transparent, rgba(0, 0, 0, 0.55) 65%);
  }
  &::after {
    background: linear-gradient(-270deg, transparent, rgba(0, 0, 0, 0.55) 65%);
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  &-play-btn {
    width: 64px;
    height: 64px;
    color: #fff;
    background: linear-gradient(#5179ff, #c353b4);
    transition: opacity 0.3s linear, visibility 0.3s linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    svg {
      width: 35px;
      height: 35px;
    }
  }
  &:hover &-play-btn {
    opacity: 1;
    visibility: visible;
  }
  &:hover::after {
    opacity: 1;
  }

  &-title {
    color: $color-primary-blue;
    margin-bottom: 24px;
    -webkit-line-clamp: 3;
  }
  &-subtitle {
    margin-bottom: 4px;
  }
  &-text {
    margin-top: 12px;
    -webkit-line-clamp: 4;
  }
  &-genres {
    margin-top: 20px;
  }
  &-genre {
    padding: 4px 12px;
    border: 1px solid #fff;
  }
  &-genre + &-genre {
    margin-left: 10px;
  }
  &-content {
    width: 100%;
    max-width: 600px;
  }
  &-rating {
    background-color: $color-primary-blue;
    color: #fff;
    padding: 4px 12px;
    position: absolute;
    right: 3%;
    top: 5%;
    svg {
      height: 15px;
      width: 15px;
      margin-left: 8px;
    }
  }
}
.img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -2;
}
.img {
  height: 100%;
}
</style>
