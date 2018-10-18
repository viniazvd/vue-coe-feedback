const feedbackFactory = context => {
  return {
    // getter
    list: context.$store.getters.__feedbacks,

    // actions
    delay (delay) {
      context.$store.dispatch('FEEDBACK_DELAY', delay)
    },

    add (feedbacks) {
      context.$store.dispatch('FEEDBACKS_ADD', feedbacks)
    },

    remove (feedback) {
      context.$store.dispatch('FEEDBACK_REMOVE', feedback)
    }
  }
}

export default feedbackFactory
