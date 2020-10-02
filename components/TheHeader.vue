<template>
  <div
    class="header"
    :class="{
      'header--white': $route.name !== 'index',
    }"
  >
    <b-container fluid="lg">
      <TheMenu />
    </b-container>
  </div>
</template>

<script>
import TheMenu from '~/components/TheMenu.vue'

export default {
  name: 'TheHeader',
  components: {
    TheMenu,
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: #bfe3eb;
}
</style>

<style lang="scss">
.header {
  & .nuxt-link-exact-active {
    color: #fff !important;
  }

  & .logo__link.nuxt-link-exact-active {
    color: #555 !important;
  }
}

.header--white {
  background: #fff !important;

  & .nuxt-link-exact-active {
    color: #01ead4 !important;
  }

  & .logo__link.nuxt-link-exact-active {
    color: #555 !important;
  }
}
</style>
