<template>
  <div class="flex tabs">
    <button
      :class="activeTab === 'tv' ? 'active' : ''"
      @click="activeTab = 'tv'"
    >
      TV Show
    </button>
    <button
      :class="activeTab === 'movie' ? 'active' : ''"
      @click="activeTab = 'movie'"
    >
      Movie
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "tv",
    };
  },
  methods: {
    async loadMainSlider() {
      try {
        await this.$store.dispatch("movies/loadMainSlider", {
          typePlaying: this.activeTab === "tv" ? "airing_today" : "now_playing",
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
  updated() {
    this.$store.dispatch("movies/setCurrentState", this.activeTab);
    this.loadMainSlider();
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  border-bottom: 1px solid rgba(58, 57, 57, 1);
}
button + button {
  margin-left: 36px;
}
button {
  position: relative;
  transition: color 0.3s linear;
  padding-bottom: 14px;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "";
    background-color: #fff;
    height: 3px;
    width: 46%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  &.active::before {
    opacity: 1;
  }
  &.active {
    color: #fff;
    font-weight: 500;
  }
}
</style>
