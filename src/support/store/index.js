const state = {
  feedbacks: [],
  delay: 0
}

const getters = {
  __feedbacks: ({ feedbacks }) => feedbacks,

  __delay: ({ delay }) => delay
}

const mutations = {
  SET_FEEDBACKS: (state, feedbacks) => (state.feedbacks = feedbacks),

  SET_DELAY: (state, delay) => (state.delay = delay)
}

const actions = {
  FEEDBACK_DELAY: ({ commit }, delay) => {
    commit('SET_DELAY', delay)
  },

  FEEDBACKS_ADD: ({ commit, getters, dispatch }, payload) => {
    const isError = payload instanceof Error

    const feedback = {
      type: payload.type || (isError && 'error'),
      message: payload.message || 'error message',
      highlighted: payload.highlighted
    }

    commit('SET_FEEDBACKS', [ ...getters['__feedbacks'], feedback ])

    setTimeout(() => { dispatch('FEEDBACK_REMOVE', feedback) }, getters['__delay'])
  },

  FEEDBACK_REMOVE: ({ commit, getters }, payload) => {
    const feedbacks = getters['__feedbacks'].filter(feedback => feedback !== payload)

    commit('SET_FEEDBACKS', feedbacks)
  }
}

export default { state, getters, mutations, actions }
