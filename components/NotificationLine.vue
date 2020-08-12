<template>
  <div class="notification">
    <b-container fluid="lg">
      <b-row>
        <b-col cols="12">
          <div class="notification__container">
            <div class="notification__content">
              <slot />
            </div>
            <div class="notification__close" @click.once="onClose">
              <div class="icon">
                <font-awesome-icon icon="times" />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NotificationLine',
  methods: {
    onClose() {
      return this.$emit('onClose')
    },
  },
}
</script>

<style lang="scss" scoped>
.notification {
  background-color: $color-white;

  &__container {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  &__content {
    flex-grow: 2;
    color: $color-content;
  }

  &__content,
  &__close {
    padding: 10px 5px;
  }
}
</style>
