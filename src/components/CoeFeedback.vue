<template>
  <transition-group name="feedback" class="coe-feedbacks" tag="ul">
    <slot name="feedbacks" :feedbacks="feedbacks" :info="info" :success="success" :error="error">
      <li
        v-for="(feedback, index) in feedbacks"
        :key="index"
        :class="['feedback', '-' + feedback.type]"
        :style="color"
      >
        <slot name="message">
          <div class="message-container">
            <span class="message">{{ feedback.message }} </span>
            <span class="highlighted">{{ feedback.highlighted }}</span>
          </div>
        </slot>

        <slot name="button">
          <div class="button" @click="$emit('close', feedback)">
            <div class="icon">×</div>
          </div>
        </slot>
      </li>
    </slot>
  </transition-group>
</template>

<script>
import { colorValidator } from '../support/helpers'

export default {
  props: {
    feedbacks: {
      type: Array,
      default: () => []
    },
    info: {
      type: String,
      default: '#b4b4b4',
      validator: color => colorValidator(color)
    },
    success: {
      type: String,
      default: '#3CE798',
      validator: color => colorValidator(color)
    },
    error: {
      type: String,
      default: '#FF7EB3',
      validator: color => colorValidator(color)
    }
  },

  computed: {
    color () {
      return {
        '--info': this.info,
        '--success': this.success,
        '--error': this.error
      }
    }
  },

  install (Vue) {
    Vue.component('CoeFeedback', this)
  }
}
</script>

<style lang="scss">
$feedback-colors: (
  info: var(--info),
  success: var(--success),
  error: var(--error)
);

.feedback-enter-active,
.feedback-leave-active { transition: all 0.3s; }
.feedback-enter,
.feedback-leave-to { opacity: 0; transform: translate(0, 100%); }

.coe-feedbacks {
  position: fixed;
  left: 0;
  margin: 0;
  bottom: 0;
  padding: 0;
  width: 365px;
  z-index: 999;

  & > .feedback {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    opacity: 0.9;
    min-height: 60px;
    margin-left: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: -1px -1px 4px 0 rgba(0,0,0,0.2);

    &:last-child { margin-bottom: 0; }

    & > .message-container {
      width: 285px;
      color: #fff;
      font-size: 14px;
      line-height: 19px;
      font-weight: bold;
      word-break: break-word;
      font-family: "Nunito Sans";
      text-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
      margin: { left: 20px; top: 20px; bottom: 20px; }

      & > .message {}
      & > .highlighted {}
    }

    & > .button > .icon { margin: { left: 15px; right: 15px; } }

    @each $type, $color in $feedback-colors {
      &.-#{$type} { background-color: $color; }
    }
  }
}
</style>
