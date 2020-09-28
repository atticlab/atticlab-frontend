<template>
  <div class="about">
    <!-- begin main -->
    <div class="about__main">
      <b-container fluid="lg">
        <BigBackgroundText
          v-observe-visibility="{
            callback: debounce(handleBigTextAnimation, 300),
          }"
          :options="{
            content: 'About us',
            color: 'white',
            fontSize: '6em',
          }"
          class="about-background-text"
        />
        <div class="about__container">
          <h1 class="page__title about__title">
            PROFICIENT, INVENTIVE & BOLD - WE ARE EVERYTHING YOU HAVE BEEN
            LOOKING FOR
          </h1>
          <p class="page__subtitle">
            According to our programmers, a boring job is worse than a
            nightmare. Tasks that start with “I have an incredible idea...” and
            “This may be challenging but..” are our favorites.
          </p>
          <p class="page__subtitle">
            As for the fintech experts in our team, they have been a driving
            force for quite a few profitable banks for 20 years now. No matter
            how big of a bank we’re dealing with, we can handle it.
          </p>
          <nuxt-link
            :to="{ name: 'contact-us' }"
            class="page__button home-contact"
          >
            Contact us
          </nuxt-link>
        </div>
      </b-container>
    </div>
    <!-- end main -->
    <!-- begin team -->
    <!--    <div class="about__team">-->
    <!--      <b-container fluid="lg">-->
    <!--        <h2 class="page__title">MEET OUR TEAM</h2>-->
    <!--      </b-container>-->
    <!--    </div>-->
    <!-- end team -->
  </div>
</template>

<script>
/*eslint-disable*/
import BigBackgroundText from '~/components/BigBackgroundText.vue'
import { ObserveVisibility } from 'vue-observe-visibility'
import { animation } from '~/services/animation.service'
import anime from 'animejs'
import debounce from 'lodash/debounce'

export default {
  name: 'About',
  components: {
    BigBackgroundText,
  },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      debounce,
    }
  },
  methods: {
    handleBigTextAnimation(nodeInViewport, { target }) {
      if (nodeInViewport) {
        animation({
          targets: target,
          translateY: [-50, 0],
          opacity: 1,
          duration: 1500,
          delay: 300,
          complete() {
            if (!nodeInViewport) {
              target.style.opacity = 0
            }
          },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  &__main {
    padding: 70px 0;
    background-color: #f9f9f9;
  }

  &__team {
    padding: 35px 0;
  }

  &__title {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 35px;
  }

  &__container {
    max-width: 860px;
    font-size: 16px;
  }

  &-background-text {
    animation: rotate 4s ease-in-out alternate infinite;
  }
}
</style>
