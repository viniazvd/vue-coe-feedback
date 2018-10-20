<h1 align="center">vue-coe-feedback ✅</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/npm/l/vuelidation.svg" alt="License" target="_blank"></a>
</p>

<br>

<p align="center">
  ✨ <a href="#">Example</a>✨
</p>

<br>

**Install** <br>
`yarn add vue-coe-feedback`
or
`npm i add vue-coe-feedback`


**Configuration**
```javascript
import Vue from 'vue'

import { VueCoeFeedback } from 'vue-coe-feedback'

Vue.use(VueCoeFeedback, store, options)
```

**how to use?**
- **inside the component:** <br>
```
this.$feedback.add({ type, message, highlighted })
or
this.$feedback.remove({ type, message, highlighted })
```

- **inside the store:**
```
actions: {
  SOME_ACTION: ({ commit, dispatch }) => {
    ...
    dispatch('FEEDBACKS_ADD', { type, message, highlighted })
    or
    dispatch('FEEDBACKS_REMOVE', { type, message, highlighted })
    ...
  }
}
```

**options type**
- info 
- success
- error

## Example
```vue
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
import { CoeFeedbacks } from 'vue-coe-feedback'

export default {
  components: { CoeFeedbacks },
  
  methods: {
    onSucces () {
      this.$feedback.add({ type: 'success', message: 'A sua compra foi', highlighted: 'aprovada!' })
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
...
</script>
```

<br>

## Options: plugin instance

Name          | Default        | Required | About
:-------------|:--------------:|:--------:|:-------------------------
storeName     | `coefeedback`  | `false`  | store name
delay         | `5000`         | `false`  | delay for notifications to disappear

## component props

Name          | Default        | Required | About
:-------------|:--------------:|:--------:|:-------------------------
feedbacks     | `[]`           | `false`  | list of feedbacks
info          | `#b4b4b4`      | `false`  | info color 
success       | `#59efb2`      | `false`  | success color 
error         | `#ef5959`      | `false`  | error color 

<br>

## Events

- close

<br>

## Slots: component

- feedbacks (**slot-scope**: feedback, info, success, error)
- message
- button
