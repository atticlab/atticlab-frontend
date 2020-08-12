<template>
  <div class="page">
    <header class="page__header">
      <TheHeader />
    </header>

    <main class="page__main">
      <Nuxt />
    </main>

    <footer class="page__footer">
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
