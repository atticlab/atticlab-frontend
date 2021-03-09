<template>
  <div class="home">
    <!-- begin main -->
    <section class="home__main page--background-accent">
      <b-container class="home__container" fluid="lg">
        <div
          v-observe-visibility="{
            callback: debounce(handleHeaderAnimation, 300),
            once: true,
          }"
          class="home__heading"
        >
          <div class="home-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="994.368"
              height="234.048"
              class="home__animated-text home-logo__desktop"
            >
              <path
                fill="#daeeee"
                stroke="#fff"
                d="M116.35 185.86L104.45 157.06L42.05 157.06L30.14 185.86L-1.73 185.86L58.18 51.46L88.90 51.46L148.99 185.86L116.35 185.86ZM52.03 133.44L94.66 133.44L73.34 81.98L52.03 133.44ZM184.13 185.86L184.13 76.80L141.12 76.80L141.12 51.46L258.24 51.46L258.24 76.80L215.23 76.80L215.23 185.86L184.13 185.86ZM304.70 185.86L304.70 76.80L261.70 76.80L261.70 51.46L378.82 51.46L378.82 76.80L335.81 76.80L335.81 185.86L304.70 185.86ZM395.52 185.86L395.52 51.46L426.62 51.46L426.62 185.86L395.52 185.86ZM522.82 188.16Q502.27 188.16 485.66 179.23Q469.06 170.30 459.55 154.46Q450.05 138.62 450.05 118.66L450.05 118.66Q450.05 98.69 459.55 82.85Q469.06 67.01 485.66 58.08Q502.27 49.15 523.01 49.15L523.01 49.15Q540.48 49.15 554.59 55.30Q568.70 61.44 578.30 72.96L578.30 72.96L558.34 91.39Q544.70 75.65 524.54 75.65L524.54 75.65Q512.06 75.65 502.27 81.12Q492.48 86.59 487.01 96.38Q481.54 106.18 481.54 118.66L481.54 118.66Q481.54 131.14 487.01 140.93Q492.48 150.72 502.27 156.19Q512.06 161.66 524.54 161.66L524.54 161.66Q544.70 161.66 558.34 145.73L558.34 145.73L578.30 164.16Q568.70 175.87 554.50 182.02Q540.29 188.16 522.82 188.16L522.82 188.16ZM599.23 185.86L599.23 51.46L630.34 51.46L630.34 160.51L697.73 160.51L697.73 185.86L599.23 185.86ZM816.77 185.86L804.86 157.06L742.46 157.06L730.56 185.86L698.69 185.86L758.59 51.46L789.31 51.46L849.41 185.86L816.77 185.86ZM752.45 133.44L795.07 133.44L773.76 81.98L752.45 133.44ZM962.11 115.97Q973.63 119.62 980.16 128.16Q986.69 136.70 986.69 149.18L986.69 149.18Q986.69 166.85 972.96 176.35Q959.23 185.86 932.93 185.86L932.93 185.86L863.42 185.86L863.42 51.46L929.09 51.46Q953.66 51.46 966.82 60.86Q979.97 70.27 979.97 86.40L979.97 86.40Q979.97 96.19 975.26 103.87Q970.56 111.55 962.11 115.97L962.11 115.97ZM925.25 74.88L894.34 74.88L894.34 106.56L925.25 106.56Q936.77 106.56 942.72 102.53Q948.67 98.50 948.67 90.62L948.67 90.62Q948.67 82.75 942.72 78.82Q936.77 74.88 925.25 74.88L925.25 74.88ZM930.62 162.43Q942.91 162.43 949.15 158.40Q955.39 154.37 955.39 145.92L955.39 145.92Q955.39 129.22 930.62 129.22L930.62 129.22L894.34 129.22L894.34 162.43L930.62 162.43Z"
              />
            </svg>
            <BigBackgroundText
              v-observe-visibility="{
                callback: debounce(handleBigTextAnimation, 350),
                once: true,
              }"
              :options="{
                content: 'ATTICLAB',
                color: 'white',
                fontSize: '9em',
              }"
              class="home__animated-text--big home-logo__mobile"
            />
          </div>
          <h1 class="page__title home-title">
            We build solutions that change the world

            <nuxt-link
              :to="{ name: 'contact-us' }"
              class="page__button home-contact"
            >
              Contact us
            </nuxt-link>
          </h1>
        </div>
      </b-container>
    </section>
    <!-- end main -->

    <!-- begin about us -->
    <section class="about page__offset">
      <b-container class="home__container">
        <BigBackgroundText
          v-observe-visibility="{
            callback: debounce(handleBigTextAnimation, 350),
            once: true,
          }"
          :options="{
            content: 'About us',
            color: 'white',
            fontSize: '9em',
          }"
          class="about__text home-big-text"
        />
        <h2 class="home__title about__title">
          We are innovative fintech company
        </h2>
        <b-row>
          <b-col cols="12" lg="6">
            <blockquote class="quote">
              <font-awesome-icon class="home__quote" icon="quote-left" />
              <p class="quote__text">
                We started Attic Lab in 2014 as a company that focuses on
                blockchain software development and fintech.
              </p>
            </blockquote>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- end about us -->

    <!-- begin tech stack -->
    <section class="tech-stack page__offset">
      <b-container class="home__container">
        <BigBackgroundText
          v-observe-visibility="{
            callback: debounce(handleBigTextAnimation, 350),
            once: true,
          }"
          :options="{
            content: 'Our expertise',
            color: 'white',
            fontSize: '9em',
          }"
          class="tech-stack__text home-big-text"
        />
        <b-row>
          <b-col cols="12" lg="6">
            <p
              v-for="{ label, value } in features.slice(0, 4)"
              :key="label"
              class="tech-stack__paragraph"
            >
              {{ label }} <span class="tech-stack__feature">{{ value }}</span>
            </p>
          </b-col>
          <b-col cols="12" lg="6" class="mb35">
            <p
              v-for="{ label, value } in features.slice(4, 8)"
              :key="label"
              class="tech-stack__paragraph"
            >
              {{ label }} <span class="tech-stack__feature">{{ value }}</span>
            </p>
          </b-col>
        </b-row>
        <nuxt-link
          :to="{ name: 'our-work' }"
          class="page__button tech-stack__button"
          >See our work</nuxt-link
        >
      </b-container>
    </section>
    <!-- end tech stack -->

    <!-- begin tech stack -->
    <section class="results page__offset page--background-accent">
      <b-container class="home__container">
        <b-row
          v-observe-visibility="{
            callback: debounce(handleCounterAnimation, 300),
            once: true,
          }"
        >
          <b-col cols="12" lg="6" class="mb35">
            <div
              v-for="(result, index) in results.slice(0, 2)"
              :key="index"
              class="result"
            >
              <div class="result__amount">{{ result.initialValue }}</div>
              <div class="result__label">{{ result.label }}</div>
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <div
              v-for="(result, index) in results.slice(2, 4)"
              :key="index"
              class="result"
            >
              <div class="result__amount">{{ result.initialValue }}</div>
              <div class="result__label">{{ result.label }}</div>
            </div>
          </b-col>
        </b-row>
        <nuxt-link
          :to="{ name: 'our-work' }"
          class="page__button results__button"
          >See our work</nuxt-link
        >
      </b-container>
    </section>
    <!-- end tech stack -->
  </div>
</template>

<script>
/*eslint-disable*/
import debounce from 'lodash/debounce'
import { ObserveVisibility } from 'vue-observe-visibility'
import { animation } from '~/services/animation.service'
const BigBackgroundText = () =>
  import(
    /* webpackChunkName: "BigBackgroundText" */ '~/components/BigBackgroundText.vue'
  )
import anime from 'animejs'

export default {
  name: 'Index',
  head() {
    return {
      title: 'Atticlab',
      meta: [
        {
          hid: 'Atticlab',
          name: 'Atticlab',
          content: 'Atticlab main page',
        },
      ],
    }
  },
  components: {
    BigBackgroundText,
  },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      results: [
        { label: 'Clients', initialValue: 0, value: '180' },
        { label: 'Website Development', initialValue: 0, value: '46' },
        { label: 'Consultations', initialValue: 0, value: '232' },
        { label: 'Projects', initialValue: 0, value: '86' },
      ],
      features: [
        { label: '01', value: 'ANTI-FRAUD' },
        { label: '02', value: 'BLOCKCHAIN' },
        { label: '03', value: 'SMART CONTRACTS' },
        { label: '04', value: 'DECENTRALIZED APPLICATIONS' },
        { label: '05', value: 'DISTRIBUTED DATA PROCESSING' },
        { label: '06', value: 'MOBILE APPLICATIONS' },
        { label: '07', value: 'CRYPTOCURRENCY' },
        { label: '08', value: 'DATA STORAGE SYSTEM' },
      ],
      debounce,
    }
  },
  methods: {
    handleHeaderAnimation(nodeInViewport) {
      if (nodeInViewport) {
        const title = document.querySelectorAll('.page__title')
        const contactButton = document.querySelector('.home-contact')

        anime({
          targets: [title, contactButton],
          marginBottom: 0,
          easing: 'easeInOutQuad',
          duration: 500,
          delay: 500,
        })
      }
    },
    handleCounterAnimation(nodeInViewport) {
      if (nodeInViewport) {
        const nodes = document.querySelectorAll('.result__amount')
        const { results } = this

        nodes.forEach((node, index) => {
          animation({
            targets: node,
            innerText: [results[index].initialValue, results[index].value],
            round: true,
            delay: 500,
            duration: 1000,
          })
        })
      }
    },
    handleBigTextAnimation(nodeInViewport, { target }) {
      if (nodeInViewport) {
        animation({
          targets: target,
          translateY: [-50, 0],
          opacity: [0, 1],
          duration: 1500,
          delay: 300,
          once: true,
          begin() {
            // target.style.visibility = 'visible';
          },
        })
      } else {
        // target.style.visibility = 'hidden';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  &__main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 64px);

    & .big-background-text {
      text-align: center;
    }
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  &__heading {
    z-index: 1;
    margin: auto;
    padding-top: 35px;
    padding-bottom: 35px;
    text-align: center;

    @media (max-width: 480px) {
      padding-top: 35px;
    }
  }

  &-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    max-width: 700px;
    padding-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
  }

  &-contact {
    margin-top: 35px;
  }

  &__title {
    margin-bottom: 35px;
    font-size: 44px;
    font-weight: 900;
    text-transform: uppercase;
    color: #555;

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  &__socials {
    padding: 20px 0;
    text-align: right;
  }

  &__quote {
    position: absolute;
    left: 20px;
    font-size: 30px;
    color: #00ead4;

    @media (max-width: 768px) {
      left: 0;
      font-size: 24px;
    }
  }

  &__animated-text--big {
    opacity: 0;
  }

  &-logo__desktop {
    display: none;
  }

  &-big-text {
    opacity: 0;
  }
}
</style>

<style lang="scss" scoped>
.about {
  &__text {
    position: static;
    color: #fff;
  }

  &__title {
    max-width: 500px;
  }

  &__paragraph {
    font-size: 16px;
    font-weight: 600;
    color: #555;
  }
}

.quote {
  position: relative;
  margin-bottom: 0;
  padding-left: 80px;

  @media (max-width: 480px) {
    padding-left: 35px;
  }

  &__text {
    font-size: 20px;
    font-weight: 700;
    color: #555;

    &:not(:last-child) {
      margin-bottom: 35px;
    }
  }
}
</style>

<style lang="scss" scoped>
.tech-stack {
  position: relative;

  &__text {
    position: static;
    color: #fff;
    line-height: 1;
  }

  &__title {
    max-width: 700px;
  }

  &__paragraph {
    display: flex;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    color: #555;
    border-left: 2px solid transparent;
    transition: border-left 0.2s, color 0.2s;
    padding-left: 35px;

    &:not(:last-child) {
      margin-bottom: 35px;
    }

    &:hover {
      border-left: 3px solid #00ead4;
      color: #00ead4;
      transition: border-left 0.2s, color 0.2s;
    }
  }

  &__feature {
    @media (max-width: 480px) {
      padding-left: 15px;
    }

    &::before {
      content: '';
      display: inline-block;
      margin: 0 20px;
      width: 30px;
      height: 2px;
      background-color: #ddd7d7;
      vertical-align: middle;

      @media (max-width: 480px) {
        display: none;
      }
    }
  }

  &__button {
    margin-top: 35px;

    @media (max-width: 768px) {
      margin-left: 0;
    }

    @media (max-width: 480px) {
      margin-left: auto;
    }
  }
}
</style>

<style lang="scss" scoped>
.results {
  &__button {
    margin-top: 35px;
  }
}

.result {
  color: $color-white;
  text-align: center;

  @media (max-width: 480px) {
    padding: 7px 0;
  }

  &__amount {
    font-size: 120px;
    font-weight: 900;
    line-height: 100px;

    @media (max-width: 480px) {
      font-size: 80px;
    }
  }

  &__label {
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;

    @media (max-width: 420px) {
      margin: auto;
      width: 80%;
    }
  }

  &:not(:last-child) {
    margin-bottom: 100px;

    @media (max-width: 480px) {
      margin-bottom: 0;
    }
  }
}
</style>
