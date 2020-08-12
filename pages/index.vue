<template>
  <div class="home">
    <section class="home__section page--background-accent">
      <b-container class="home__container">
        <div class="home__heading">
          <AnimatedBackgroundText content="Atticlab" />
          <h1 class="page__title">
            Fintech & blockchain software development
          </h1>
          <p class="page__subtitle">
            We build solutions that change the world
          </p>
          <nuxt-link :to="{ name: 'contact' }" class="page__button">
            Contact us
          </nuxt-link>
        </div>
        <SocialNetworks class="home__socials" />
      </b-container>
    </section>
  </div>
</template>

<script>
import AnimatedBackgroundText from '~/components/AnimatedBackgroundText.vue'
import SocialNetworks from '~/components/SocialNetworks.vue'

export default {
  name: 'Index',
  components: {
    AnimatedBackgroundText,
    SocialNetworks,
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 110px);

  &__section {
    height: 100%;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  &__heading {
    z-index: 1;
    margin: auto;
    flex-grow: 2;
    padding-top: 150px;
    text-align: center;
  }

  &__socials {
    padding: 20px 0;
    text-align: right;
  }
}
</style>
