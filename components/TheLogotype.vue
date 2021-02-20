<template functional>
  <div class="logo">
    <NuxtLink :to="{ name: 'index' }">
      <img
        class="logo__image"
        width="80px"
        height="73px"
        src="~/assets/images/logo.png"
        alt="Atticlab"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'TheLogotype',
}
</script>
