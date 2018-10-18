import feedbackFactory from './feedbackFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store, options = {}) {
    if (!store) {
      console.error('stack need store')
      return false
    }

    let { storeName, delay } = options
    if (!storeName) storeName = 'coefeedback'
    if (!delay) delay = 5000

    registerStore(store, storeName, delay)

    store.dispatch('FEEDBACK_DELAY', delay)

    Object.defineProperty(Vue.prototype, '$feedback', {
      get () {
        return feedbackFactory(this)
      }
    })
  }
}
