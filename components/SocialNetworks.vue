<template functional>
  <div class="socials">
    <a
      v-for="(social, index) in props.socials"
      :key="index"
      :href="social.href"
      class="socials__link"
      target="_blank"
      rel="nofollow noopener"
    >
      <span v-if="mode === 'text'"> {{ social.name }} </span>
      <font-awesome-icon
        v-else-if="'icon'"
        :icon="['fab', social.name.toLowerCase()]"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialNetworks',
  props: {
    socials: {
      type: Array,
      default: () => {
        return [
          // { name: 'Steemit', href: 'https://steemit.com/@attic-lab' },
          { name: 'Reddit', href: 'https://www.reddit.com/user/atticlab_it' },
          {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/attic-lab-5ab9a2129/',
          },
          { name: 'Facebook', href: 'https://www.facebook.com/atticlab/' },
          { name: 'Twitter', href: 'https://twitter.com/atticlab_it' },
          { name: 'Medium', href: 'https://medium.com/eosatticlab' },
          { name: 'Github', href: 'https://github.com/atticlab/' },
          { name: 'Telegram', href: 'https://t.me/atticlabeosb' },
        ]
      },
    },
    mode: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style lang="scss" scoped>
.socials {
  &__link {
    font-size: 16px;
    font-weight: 700;
    color: #555;
    margin-right: 10px;
  }
}
</style>
