<template>
  <div class="header">
    <b-container>
      <TheMenu />
    </b-container>
  </div>
</template>

<script>
import TheMenu from '~/components/TheMenu.vue'

export default {
  name: 'TheHeader',
  components: {
    TheMenu,
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: #bfe3eb;
}
</style>
