<template>
  <div
    class="big-background-text"
    :class="{
      'big-background-text--accent': options.color === 'accent',
      'big-background-text--white': options.color === 'white',
      'big-background-text--animation': options.animation,
    }"
    :style="{ fontSize: options.fontSize }"
  >
    {{ options.content }}
  </div>
</template>

<script>
export default {
  name: 'BigBackgroundText',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.big-background-text {
  user-select: none;
  pointer-events: none;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  &--accent {
    color: #daeeee;
    text-shadow: rgb(208, 230, 231) 1px 1px, rgb(208, 230, 231) 2px 2px,
      rgb(208, 230, 231) 3px 3px, rgb(208, 230, 231) 4px 4px,
      rgb(208, 230, 231) 5px 5px, rgb(208, 230, 231) 6px 6px,
      rgb(208, 230, 231) 7px 7px, rgb(208, 230, 231) 8px 8px,
      rgb(208, 230, 231) 9px 9px, rgb(189, 214, 218) 10px 10px 40px;
  }

  &--white {
    color: $color-white;
    text-shadow: 1px -1px #eeeef0, 2px -1px #eeeef0, 3px -2px #eeeef0,
      4px -2px #eeeef0, 5px -3px #eeeef0, 6px -3px #eeeef0, 7px -4px #eeeef0,
      8px -4px #eeeef0, 9px -5px #eeeef0,
      10px -5px 40px rgba(204, 204, 204, 0.7);
  }

  &--animation {
    animation: rotate-left-to-right 8s ease-in-out infinite,
      text-shadow 8s ease-in-out infinite;
  }
}
</style>
