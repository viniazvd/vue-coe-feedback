import { mount, config, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { VueCoeFeedback, CoeFeedback } from '../src/index.js'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = new Vuex.Store()
localVue.use(VueCoeFeedback, store)

describe('CoeFeedback', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CoeFeedback)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('add five feedbacks', async () => {
    for (let i = 1; i <= 5; i++) {
      await store.dispatch('FEEDBACKS_ADD', { type: 'success', message: 'A sua compra foi', highlighted: 'aprovada!' })
    }

    const wrapper = mount(CoeFeedback, {
      store,
      localVue,
      propsData: { feedbacks: store.getters.__feedbacks }
    })

    expect(wrapper.findAll('li')).toHaveLength(5)
  })

  test('disappear after delay', () => {
    store.dispatch('FEEDBACKS_ADD', { type: 'success', message: 'A sua compra foi', highlighted: 'aprovada!' })

    const wrapper = mount(CoeFeedback, {
      store,
      localVue,
      propsData: { feedbacks: store.getters.__feedbacks }
    })

    setTimeout(() => {
      expect(wrapper.findAll('li')).toHaveLength(0)
    }, store.getters.__delay);
  })
})