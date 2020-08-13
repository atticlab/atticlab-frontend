import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import NotificationLine from '~/components/NotificationLine.vue'

// temporary ignore bootstrap-vue components
Vue.config.ignoredElements = [
  'b-col',
  'b-row',
  'b-container',
  'font-awesome-icon',
]

describe('NotificationLine', () => {
  it('Should test emit of onClose method', async () => {
    const wrapper = shallowMount(NotificationLine)

    wrapper.vm.onClose()
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('onClose')).toBeTruthy()
  })
})
