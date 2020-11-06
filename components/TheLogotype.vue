<template>
  <div class="logo">
    <NuxtLink :to="{ name: 'index' }">
      <img class="logo__image" src="~/assets/images/logo.png" alt="Atticlab" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'TheLogotype',
}
</script>

<style lang="scss" scoped>
.logo__image {
  display: inline-block;
  max-width: 80px;
}
</style>
