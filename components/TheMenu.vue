<template>
  <b-navbar class="menu" toggleable="lg">
    <b-navbar-brand>
      <TheLogotype />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <NuxtLink class="menu__link" :to="{ name: 'index' }">Home</NuxtLink>
        </b-nav-item>
        <b-nav-item
          ><NuxtLink class="menu__link" :to="{ name: 'about' }"
            >About us</NuxtLink
          ></b-nav-item
        >
        <b-nav-item
          ><NuxtLink
            class="menu__link"
            to="https://everstake.one/"
            target="_blank"
          >
            Everstake
          </NuxtLink></b-nav-item
        >
        <b-nav-item
          ><NuxtLink class="menu__link" :to="{ name: 'our-work' }"
            >Our work</NuxtLink
          ></b-nav-item
        >
        <b-nav-item
          ><NuxtLink class="menu__link" :to="{ name: 'contact-us' }"
            >Contact us</NuxtLink
          ></b-nav-item
        >
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
  &__link {
    font-size: 15px;
    font-weight: 700;
    color: $color-content;
    text-transform: uppercase;
  }
}
</style>
