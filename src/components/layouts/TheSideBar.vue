<template>
  <div class="sidebar">
    <the-logo />

    <ul>
      <li>
        <h4 class="text-white text-lg font-medium title">Menu</h4>
        <div class="links">
          <router-link to="/" class="link flex items-center">
            <svg>
              <use href="../../assets/images/icons.svg#icon-home"></use>
            </svg>
            <span>Home</span>
          </router-link>
          <router-link to="/explore" class="link flex items-center">
            <svg>
              <use href="../../assets/images/icons.svg#icon-explore"></use>
            </svg>
            <span>Explore</span>
          </router-link>
          <router-link to="/search" class="link flex items-center">
            <svg>
              <use href="../../assets/images/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
          </router-link>
        </div>
      </li>
      <li>
        <h4 class="text-white text-lg font-medium title">Personal</h4>
        <div class="links">
          <router-link to="/bookmarked" class="link flex items-center">
            <svg>
              <use href="../../assets/images/icons.svg#icon-bookmarked"></use>
            </svg>
            <span>Bookmarked</span>
          </router-link>
          <router-link to="/history" class="link flex items-center">
            <svg>
              <use href="../../assets/images/icons.svg#icon-history"></use>
            </svg>
            <span>History</span>
          </router-link>
        </div>
      </li>
      <li>
        <h4 class="text-white text-lg font-medium title">General</h4>
        <div class="links">
          <router-link to="/profile" class="link flex items-center">
            <svg>
              <use href="../../assets/images/icons.svg#icon-profile"></use>
            </svg>

            <span>Profile</span>
          </router-link>
          <router-link to="/login" class="link flex items-center">
            <svg class="icon--big">
              <use href="../../assets/images/icons.svg#icon-login"></use>
            </svg>

            <span>Login</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TheLogo from "./TheLogo.vue";

export default {
  components: {
    TheLogo,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  max-width: 270px;
  padding: 40px 0 0 32px;
  position: sticky;
  top: 0;
}
ul {
  li {
    margin-top: 48px;
    svg + span {
      padding-left: 24px;
    }
  }
}
.title {
  text-transform: uppercase;
}
.links {
  margin: 32px 0 0 16px;
}
.link + .link {
  margin-top: 24px;
}
.link {
  transition: color 0.3s linear;
  svg {
    transition: stroke 0.3s linear;
  }
  &:hover {
    color: #fff;
  }
  &.router-link-active {
    color: $color-primary-blue;
    border-right: 4px solid $color-primary-blue;
  }
}
svg {
  width: 24px;
  height: 24px;
}
.icon {
  &--big {
    width: 30px;
    height: 30px;
  }
}
</style>
