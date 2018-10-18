export default {
  state: {
    feedbacks: [],
    delay: 0
  },

  getters: {
    __feedbacks: ({ feedbacks }) => feedbacks,

    __delay: ({ delay }) => delay
  },

  mutations: {
    SET_FEEDBACKS: (state, feedbacks) => (state.feedbacks = feedbacks),

    SET_DELAY: (state, delay) => (state.delay = delay)
  },

  actions: {
    FEEDBACK_DELAY: ({ commit }, delay) => {
      commit('SET_DELAY', delay)
    },

    FEEDBACKS_ADD: ({ commit, getters, dispatch }, payload) => {
      const isError = payload instanceof Error

      const feedback = {
        type: payload.type || (isError ? 'error' : 'info'),
        message: payload.message || payload
      }

      commit('SET_FEEDBACKS', [ ...getters['__feedbacks'], feedback ])

      setTimeout(() => { dispatch('FEEDBACK_REMOVE', feedback) }, getters['__delay'])
    },

    FEEDBACK_REMOVE: ({ commit, getters }, payload) => {
      const feedbacks = getters['__feedbacks'].filter(feedback => feedback !== payload)

      commit('SET_FEEDBACKS', feedbacks)
    }
  }
}
