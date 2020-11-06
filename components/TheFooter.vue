<template>
  <div
    class="footer page--background-accent"
    :class="{
      'footer-white': $route.name === 'index',
    }"
  >
    <b-container>
      <div class="footer__logo">
        <img class="footer__img" src="~assets/images/logo.png" alt="Atticlab" />
      </div>
      <div class="footer__socials">
        <!-- begin social networks -->
        <SocialNetworks mode="icon" />
        <!-- end social networks -->
      </div>
      <div class="footer__menu">
        <NuxtLink class="footer__link" :to="{ name: 'index' }">Home</NuxtLink>
        <NuxtLink class="footer__link" :to="{ name: 'about' }"
          >About us</NuxtLink
        >
        <a class="footer__link" href="https://everstake.one/" target="_blank">
          Everstake
        </a>
        <NuxtLink class="footer__link" :to="{ name: 'our-work' }"
          >Our work</NuxtLink
        >
        <NuxtLink class="footer__link" :to="{ name: 'contact-us' }"
          >Contact us</NuxtLink
        >
      </div>
      <div class="footer__contacts">
        <a class="footer__contact" href="mailto:inbox@atticlab.net"
          >inbox@atticlab.net</a
        >
      </div>
      <div class="footer__copyright copyright">
        <span class="copyright__line"></span>
        <span class="copyright__text"
          >© 2020. Atticlab. All Rights Reserved.</span
        >
        <span class="copyright__line"></span>
      </div>
    </b-container>
  </div>
</template>

<script>
import SocialNetworks from '../components/SocialNetworks'

export default {
  name: 'TheFooter',
  components: {
    SocialNetworks,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 35px 0;

  &__logo {
    text-align: center;
  }

  &__img {
    max-width: 120px;
  }

  &__menu,
  &__action,
  &__copyright {
    margin: 35px 0;
    text-align: center;
  }

  &__link {
    margin-right: 15px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    color: #555;
    transition: color 0.2s;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  &__copyright {
    margin-bottom: 0;
    color: #555;
    font-size: 14px;
    font-weight: 600;
  }

  &__contacts {
    text-align: center;
  }

  &__contact {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;

    &:not(:last-child) {
      margin-right: 35px;
    }

    @media (max-width: 480px) {
      display: block;

      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  }
}

.copyright {
  &__text {
    padding: 0 20px;

    @media (max-width: 480px) {
      padding: 0;
    }
  }

  &__line {
    background-color: #555;
    height: 1px;
    display: inline-block;
    vertical-align: middle;
    width: 5%;
    min-width: 0;

    @media (max-width: 480px) {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.footer__socials {
  margin: 35px 0;
  text-align: center;

  & .socials__link {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 26px;
  }

  & .socials__link:first-child {
    margin-left: 0;
  }

  & .socials__link:last-child {
    margin-right: 0;
  }
}
</style>

<style lang="scss">
.footer {
  & .nuxt-link-exact-active {
    color: #fff !important;
  }
}

.footer--white {
  background: #fff !important;

  & .nuxt-link-exact-active {
    color: #01ead4 !important;
  }
}
</style>
