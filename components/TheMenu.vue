<template>
  <b-navbar class="menu" toggleable="lg">
    <b-navbar-brand>
      <TheLogotype />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="menu__link" href="/">Home</b-nav-item>
        <b-nav-item class="menu__link" href="/about">About us</b-nav-item>
        <b-nav-item
          class="menu__link"
          href="https://everstake.one/"
          target="_blank"
        >
          Everstake
        </b-nav-item>
        <b-nav-item class="menu__link" href="#">Our work</b-nav-item>
        <b-nav-item class="menu__link" href="#">Media Room</b-nav-item>
        <b-nav-item class="menu__link" href="#">Contact us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import TheLogotype from '@/components/TheLogotype.vue'

export default {
  name: 'TheMenu',
  components: {
    TheLogotype,
  },
}
</script>

<style lang="scss" scoped>
.menu {
  &__link a {
    font-size: 15px;
    font-weight: 700;
    color: $color-content;
    text-transform: uppercase;
  }
}
</style>
