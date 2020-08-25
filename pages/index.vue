<template>
  <div class="home">
    <!-- begin main -->
    <section class="home__main page--background-accent">
      <b-container class="home__container">
        <div class="home__heading">
          <BigBackgroundText
            :options="{
              content: 'Atticlab',
              color: 'accent',
              fontSize: '12em',
              animation: true,
            }"
          />
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
    <!-- end main -->

    <!-- begin about us -->
    <section class="about page__offset">
      <b-container class="home__container">
        <BigBackgroundText
          :options="{
            content: 'About us',
            color: 'white',
            fontSize: '9em',
          }"
          class="about__text"
        />
        <h2 class="home__title about__title">
          We are innovative fintech company
        </h2>
        <b-row>
          <b-col cols="12" lg="6">
            <blockquote class="quote">
              <font-awesome-icon class="home__quote" icon="quote-left" />
              <p class="quote__text">
                I’m Sergii Vasylchuk, a co-founder and CEO of Attic Lab. We are
                an innovative fintech company that has got the most inspired
                professionals in banking, IT and crypto industries. It is a
                great honor for me to lead the team of young experts, determined
                to reinvent the current financial system.
              </p>
              <p class="quote__text">
                Our goals may seem beyond possible or even crazy, but I’m
                convinced this is the only way to change the world and make
                impact.
              </p>
            </blockquote>
          </b-col>
          <b-col cols="12" lg="6">
            <p class="about__paragraph">
              We participate in disruptive projects only. Though we are young,
              we work with banks and businesses across the world, from Africa to
              Asia. Our expertise allows us to feel confident on both
              traditional financial and dynamic crypto markets. Our software is
              certified by Central Banks, and many financial institutions use it
              already today.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- end about us -->

    <!-- begin tech stack -->
    <section class="tech-stack page__offset">
      <b-container class="home__container">
        <BigBackgroundText
          :options="{
            content: 'Tech Stack',
            color: 'white',
            fontSize: '9em',
          }"
          class="tech-stack__text"
        />
        <h2 class="home__title tech-stack__title">
          We love complex and unrealistic tasks
        </h2>
        <b-row>
          <b-col cols="12" lg="6">
            <p class="tech-stack__paragraph">
              01 <span class="tech-stack__feature">Anti-fraud</span>
            </p>
            <p class="tech-stack__paragraph">
              02 <span class="tech-stack__feature">Blockchain</span>
            </p>
            <p class="tech-stack__paragraph">
              03 <span class="tech-stack__feature">Web sites</span>
            </p>
            <p class="tech-stack__paragraph">
              04 <span class="tech-stack__feature">Web applications</span>
            </p>
          </b-col>
          <b-col cols="12" lg="6">
            <p class="tech-stack__paragraph">
              05
              <span class="tech-stack__feature"
                >Distributed data processing</span
              >
            </p>
            <p class="tech-stack__paragraph">
              06
              <span class="tech-stack__feature">Network applications</span>
            </p>
            <p class="tech-stack__paragraph">
              07
              <span class="tech-stack__feature">Cryptocurrency</span>
            </p>
            <p class="tech-stack__paragraph">
              08
              <span class="tech-stack__feature">Data storage system</span>
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
        <b-row>
          <b-col cols="12" lg="6">
            <div class="result">
              <div class="result__amount">180</div>
              <div class="result__label">Clients</div>
            </div>
            <div class="result">
              <div class="result__amount">46</div>
              <div class="result__label">Website Development</div>
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <div class="result">
              <div class="result__amount">232</div>
              <div class="result__label">Consultations</div>
            </div>
            <div class="result">
              <div class="result__amount">86</div>
              <div class="result__label">Projects</div>
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
import BigBackgroundText from '~/components/BigBackgroundText.vue'
import SocialNetworks from '~/components/SocialNetworks.vue'

export default {
  name: 'Index',
  components: {
    BigBackgroundText,
    SocialNetworks,
  },
}
</script>

<style lang="scss" scoped>
.home {
  &__main {
    height: calc(100vh - 110px);
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
    flex-grow: 2;
    padding-top: 150px;
    text-align: center;
  }

  &__title {
    margin-bottom: 70px;
    font-size: 44px;
    font-weight: 900;
    text-transform: uppercase;
    color: #555;
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
  }
}
</style>

<style lang="scss" scoped>
.about {
  &__text {
    z-index: -1;
    position: absolute;
    top: -80px;
    right: 0;
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
  padding-left: 80px;

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
    z-index: -1;
    position: absolute;
    top: -130px;
    right: -100px;
    max-width: 700px;
    color: #fff;
    line-height: 1;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: 'Our expertise';
      font-weight: 900;
      text-transform: uppercase;
      color: #555;
      font-size: 20px;
      transform: translate(-50%, -50%);
    }
  }

  &__title {
    max-width: 700px;
  }

  &__paragraph {
    display: flex;
    padding-left: 35px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    color: #555;
    border-left: 2px solid transparent;
    transition: border-left 0.2s, color 0.2s;

    &:not(:last-child) {
      margin-bottom: 35px;
    }

    &:hover {
      border-left: 2px solid #00ead4;
      color: #00ead4;
      transition: border-left 0.2s, color 0.2s;
    }
  }

  &__feature {
    &::before {
      content: '';
      display: inline-block;
      margin: 0 20px;
      width: 30px;
      height: 2px;
      background-color: #ddd7d7;
      vertical-align: middle;
    }
  }

  &__button {
    margin-top: 35px;
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

  &__amount {
    font-size: 120px;
    font-weight: 900;
    line-height: 100px;
  }

  &__label {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-bottom: 100px;
  }
}
</style>
