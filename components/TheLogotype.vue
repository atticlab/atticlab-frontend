<template>
  <div class="logo">
    <NuxtLink class="logo__link" :to="{ name: 'index' }">Atticlab</NuxtLink>
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
  text-transform: uppercase;
  text-decoration: none;
}

.logo__link {
  text-decoration: none;
  color: #555 !important;
}
</style>
