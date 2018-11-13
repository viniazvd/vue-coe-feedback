import { mount, config, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { VueCoeFeedback, CoeFeedback } from '../src/index.js'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CoeFeedback', () => {
  let state
  let actions
  let store

  beforeEach(() => {
    state = {
      feedbacks: [
        { type: 'success', message: 'A sua compra foi', highlighted: 'aprovada!' },
        { type: 'success', message: 'A sua compra n foi', highlighted: 'aprovada!' }
      ]
    }

    actions = {
      FEEDBACKS_ADD: jest.fn({ type: 'success', message: 'A sua compra foi', highlighted: 'aprovada!' })
    }

    store = new Vuex.Store({ state, actions })
    localVue.use(VueCoeFeedback, store)
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(CoeFeedback)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('boladaum', () => {
    const wrapper = mount(CoeFeedback, {
      store,
      localVue,
      propsData: {
        feedbacks: store.state.feedbacks
      }
    })

    expect(wrapper.findAll('li')).toHaveLength(2)
  })
})