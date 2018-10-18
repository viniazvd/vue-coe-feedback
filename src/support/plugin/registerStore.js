import feedbackStore from '../store'

const registerStore = (store, storeName) => {
  store.registerModule(storeName, { ...feedbackStore })
}

export default registerStore
