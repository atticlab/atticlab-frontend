<template>
  <div class="animated-text">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackgroundText',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.animated-text {
  user-select: none;
  pointer-events: none;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-size: 12em;
  color: #daeeee;
  text-shadow: rgb(208, 230, 231) 1px 1px, rgb(208, 230, 231) 2px 2px,
    rgb(208, 230, 231) 3px 3px, rgb(208, 230, 231) 4px 4px,
    rgb(208, 230, 231) 5px 5px, rgb(208, 230, 231) 6px 6px,
    rgb(208, 230, 231) 7px 7px, rgb(208, 230, 231) 8px 8px,
    rgb(208, 230, 231) 9px 9px, rgb(189, 214, 218) 10px 10px 40px;
  animation: rotate-left-to-right 8s ease-in-out infinite,
    text-shadow 10s ease-in infinite;
}
</style>
