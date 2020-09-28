<template>
  <div class="logo">
    <NuxtLink :to="{ name: 'index' }">Atticlab</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'TheLogotype',
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 24px;
  font-weight: 900;
  color: #555;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
