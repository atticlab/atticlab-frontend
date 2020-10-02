<template>
  <div class="contact">
    <!-- begin main -->
    <div class="contact__main">
      <b-container fluid="lg">
        <BigBackgroundText
          v-observe-visibility="{
            callback: debounce(handleBigTextAnimation, 300),
          }"
          :options="{
            content: 'contact us',
            color: 'white',
            fontSize: '6em',
          }"
          class="contact-background-text"
        />
        <div class="contact__container">
          <b-row>
            <b-col cols="12" lg="6" order="2" order-lg="1">
              <b-form
                v-if="show"
                class="contact__form"
                action="https://formspree.io/f/inbox@atticlab.net"
                method="POST"
              >
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                  name="_replyto"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Message:"
                  label-for="input-2"
                >
                  <b-form-textarea
                    id="input-2"
                    v-model="form.message"
                    placeholder="How can we help you?"
                    rows="3"
                    max-rows="6"
                    required
                    name="message"
                  ></b-form-textarea>
                </b-form-group>

                <b-button type="submit" class="contact__button">Send</b-button>
              </b-form>
            </b-col>
            <b-col cols="12" lg="6" order="1" order-lg="2">
              <h1 class="page__title contact__title">
                START REALIZING YOUR IDEAS TODAY
              </h1>
              <p class="page__subtitle contact__subtitle">
                If your idea seems impossible to realize and yet you strive to
                make it work then we have a lot in common.
              </p>
              <p class="page__subtitle contact__subtitle">
                Let’s get to know each and find out how we can turn your ideas
                into real, actionable solutions.
              </p>
            </b-col>
          </b-row>
        </div>
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
  name: 'ContactUs',
  components: {
    BigBackgroundText,
  },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      debounce,
      form: {
        email: '',
        message: '',
      },
      show: true,
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
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  &__main {
    padding: 70px 0;
    background-color: #f9f9f9;
  }

  &__team {
    padding: 35px 0;
  }

  &__title {
    font-size: 28px;
    margin-bottom: 35px;
  }

  &__container {
    font-size: 16px;
  }

  &-background-text {
    animation: rotate 4s ease-in-out alternate infinite;

    @media (max-width: 960px) {
      text-align: center !important;
    }
  }

  &__form {
    max-width: 600px;

    @media (max-width: 960px) {
      margin: 35px auto auto;
    }
  }

  &__button {
    padding: 8px 50px;
    color: #fff;
    font-size: 15px;
  }

  &__title,
  &__subtitle {
    @media (max-width: 960px) {
      margin: auto;
      max-width: 600px;
    }
  }
}
</style>
