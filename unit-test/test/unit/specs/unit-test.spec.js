import Vue from 'vue'
import UnitTest from '@/components/unit-test'

describe('unit-test.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(UnitTest)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.unit-test__content').textContent)
      .to.equal('data bind test')
  })
})
