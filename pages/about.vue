<template>
  <div class="about">
    <!-- begin main -->
    <div class="about__main">
      <b-container fluid="lg">
        <BigBackgroundText
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
          <div class="about__contact">
            <nuxt-link
              :to="{ name: 'contact-us' }"
              class="page__button home-contact"
            >
              Contact us
            </nuxt-link>
          </div>
        </div>
      </b-container>
    </div>
    <!-- end main -->
    <!-- begin team -->
    <div class="about__team team">
      <b-container fluid="lg">
        <h2 class="page__title team__title">MEET OUR TEAM</h2>
        <ul class="team-list">
          <li
            v-for="member in team"
            :key="member.name"
            class="team__member member"
          >
            <img class="member__picture" :src="member.src" :alt="member.name" />
            <span class="member__name">{{ member.name }}</span>
          </li>
        </ul>
      </b-container>
    </div>
    <!-- end team -->
  </div>
</template>

<script>
/*eslint-disable*/
const BigBackgroundText = () =>
  import(
    /* webpackChunkName: "BigBackgroundText" */ '~/components/BigBackgroundText.vue'
  )
import { ObserveVisibility } from 'vue-observe-visibility'
import { animation } from '~/services/animation.service'
import debounce from 'lodash/debounce'

export default {
  name: 'About',
  head() {
    return {
      title: 'About us',
      meta: [
        {
          hid: 'Atticlab',
          name: 'Atticlab',
          content: 'About us page',
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
      debounce,
      team: [
        {
          name: 'Sergii Vasylchuk',
          src: require('../assets/images/team/vasylchuk.jpg'),
        },
        {
          name: 'Sergii Ropchan',
          src: require('../assets/images/team/ropchan.jpg'),
        },
        {
          name: 'Bohdan Opryshko',
          src: require('../assets/images/team/opryshko.jpg'),
        },
        {
          name: 'Vit Parkhomenko',
          src: require('../assets/images/team/parkhomenko.jpg'),
        },
        {
          name: 'Sabrina Korablova',
          src: require('../assets/images/team/korablova.jpg'),
        },
        {
          name: 'Olha Kaposloz',
          src: require('../assets/images/team/kaposloz.jpg'),
        },
        {
          name: 'Mykola Shylzhenko',
          src: require('../assets/images/team/shylzhenko.jpg'),
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

  .about__contact {
    @media (max-width: 1024px) {
      text-align: center;
    }
  }
}
</style>

<style lang="scss" scoped>
.team-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 35px;
  list-style: none;
  padding-left: 0;
}

@media (max-width: 1024px) {
  .team-list {
    justify-content: center;
  }

  .team__title {
    text-align: center;
  }
}

.team__member {
  display: flex;
  flex-direction: column;
  padding: 35px;
}

.team__member:last-child {
  padding-bottom: 0;
}

.member__name {
  text-align: center;
  color: #555;
  font-size: 20px;
  font-weight: 700;
  margin: 25px;
}
</style>
