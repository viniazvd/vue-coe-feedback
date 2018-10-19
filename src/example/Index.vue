<template>
  <div id="app">
    <coe-feedbacks @close="feedback => $feedback.remove(feedback)" :feedbacks="$feedback.list" />

    <button @click="onSucces">show feedback success</button>
    <button @click="onInfo">show feedback info</button>
    <button @click="onError">show feedback error</button>

    <button @click="onCoe">set coe</button>
  </div>
</template>

<script>
import CoeFeedbacks from './lib/components/CoeFeedbacks'

export default {
  components: { CoeFeedbacks },

  methods: {
    onSucces () {
      this.$feedback.add({ type: 'success', message: 'SUCCESS' })
    },

    onInfo () {
      this.$feedback.add({ type: 'info', message: 'INFO' })
    },

    onError () {
      this.$feedback.add({ type: 'error', message: 'ERROR' })
    },

    onCoe () {
      this.$store.dispatch('COE', { type: 'success', message: 'COÉ MANÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ!' })
    }
  }
}
</script>
