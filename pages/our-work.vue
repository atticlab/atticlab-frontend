<template>
  <div class="our-work">
    <!-- begin main -->
    <div class="our-work__main">
      <b-container fluid="lg">
        <BigBackgroundText
          v-observe-visibility="{
            callback: debounce(handleBigTextAnimation, 300),
          }"
          :options="{
            content: 'Our work',
            color: 'white',
            position: 'right',
            fontSize: '9em',
          }"
          class="our-work-background-text"
        />
        <!-- begin list -->
        <div class="our-work-list">
          <div
            v-for="(project, index) in projects"
            :key="`${project.name}${index}`"
            class="our-work-item"
          >
            <img
              :src="project.image"
              :alt="`${project.name} logotype`"
              class="our-work-image"
            />
            <div class="our-work-description">
              <p class="our-work__title">{{ project.name }}</p>
              <p v-if="project.description" class="our-work__paragraph">
                {{ project.description }}
              </p>
              <p class="our-work__date">{{ project.date }}</p>
            </div>
          </div>
        </div>
        <!-- end list -->
      </b-container>
    </div>
    <!-- end main -->
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
  name: 'OurWork',
  components: {
    BigBackgroundText,
  },
  data() {
    return {
      debounce,
      projects: [
        {
          name: 'Everstake',
          image: 'https://atticlab.net/img/everstake.png',
          description:
            'Your Social Staking Platform. Everstake helps institutional investors and regular token holders to profit off their crypto assets. We operate in a wide range of Proof of Stake blockchains, providing our customers with numerous options to choose from. Pick the most promising projects, delegate with Everstake and make 5%-20% annually.',
          date: 'JAN 13, 2019',
        },
        {
          name: 'Humaniq',
          image: 'https://atticlab.net/img/humaniq.png',
          date: 'AUGUST 16, 2017',
        },
        {
          name: 'OpenBankIT',
          image: 'https://atticlab.net/img/openbank.png',
          date: 'JANUARY 19, 2017',
        },
        {
          name: 'НАЦИОНАЛЬНАЯ КРИПТОВАЛЮТА',
          image: 'https://atticlab.net/img/nat-crypto.png',
          date: 'DECEMBER 3, 2016',
        },
        {
          name: 'Smart money',
          image: 'https://atticlab.net/img/smartmoney.png',
          date: 'OCTOBER 5, 2016',
        },
        {
          name: 'Cryptagio',
          image: 'https://atticlab.net/img/cryptagio.png',
          date: 'SEPTEMBER 16, 2016',
        },
      ],
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
.our-work {
  &__main {
    padding: 35px 0;
    background-color: #f9f9f9;
  }

  &__container {
    font-size: 16px;
    max-width: 800px;
    padding-left: 180px;
    margin-left: auto;
  }

  &-item {
    position: relative;
    min-height: 100vh;
    padding: 5% 0;

    @media (max-width: 960px) {
      text-align: center;
      min-height: auto;
    }
  }

  &-image {
    position: absolute;
    top: 50px;
    right: 50px;
    max-width: 700px;

    @media (max-width: 960px) {
      position: static;
      width: 100%;
      height: auto;
    }
  }

  &-description {
    position: absolute;
    left: 50px;
    bottom: 50px;
    width: 100%;
    max-width: 700px;
    padding: 50px 60px 30px;
    background-color: #fff;
    box-shadow: 0 2px 24px 6px rgba(197, 197, 197, 0.2);

    @media (max-width: 960px) {
      position: static;
      padding: 15px;
      text-align: left;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__title {
    color: #555;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  &__paragraph {
    color: #555;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  &__date {
    color: #b8b8b8;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-background-text {
    @media (max-width: 960px) {
      text-align: center !important;
    }
  }
}
</style>
