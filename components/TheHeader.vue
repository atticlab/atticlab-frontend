<template>
  <div class="header">
    <!--    <NotificationLine-->
    <!--      v-if="isNotificationVisible"-->
    <!--      @onClose="handleNotificationClose"-->
    <!--    >-->
    <!--      <template>-->
    <!--        <a href="https://atticlab.net/vote" target="_blank">-->
    <!--          Please, vote for us as an EOS Block Producer, we need your support to-->
    <!--          continue offering tools and services!-->
    <!--        </a>-->
    <!--      </template>-->
    <!--    </NotificationLine>-->
    <b-container>
      <TheMenu />
    </b-container>
  </div>
</template>

<script>
// import NotificationLine from '~/components/NotificationLine.vue'
import TheMenu from '~/components/TheMenu.vue'

export default {
  name: 'TheHeader',
  components: {
    // NotificationLine,
    TheMenu,
  },
  data() {
    return {
      isNotificationVisible: true,
    }
  },
  created() {
    const notificationState = sessionStorage.getItem('notification_visible')

    if (notificationState !== null) {
      this.isNotificationVisible = JSON.parse(notificationState)
    }
  },
  methods: {
    handleNotificationClose() {
      this.isNotificationVisible = false
      sessionStorage.setItem('notification_visible', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: #bfe3eb;
}
</style>
