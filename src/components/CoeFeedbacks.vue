<template>
  <transition-group name="feedback" class="coe-feedbacks" tag="ul">
    <slot name="feedbacks" :feedbacks="feedbacks">
      <li
        v-for="(feedback, index) in feedbacks"
        :key="index"
        :class="['feedback', '-' + feedback.type]"
        :style="color"
      >
        <slot name="message">
          <span class="message">{{ feedback.message }}</span>
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
      default: '#59efb2',
      validator: color => colorValidator(color)
    },
    error: {
      type: String,
      default: '#ef5959',
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
  width: 360px;
  z-index: 999;

  & > .feedback {
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.9;
    min-height: 20px;
    margin-bottom: 20px;
    border-radius: 0 5px 5px 0;
    box-shadow: -1px -1px 4px 0 rgba(0,0,0,0.2);

    &:last-child { margin-bottom: 0; }

    & > .message {
      color: #fff;
      margin: { left: 20px; top: 20px; bottom: 20px; }
      word-break: break-all;
    }

    & > .button > .icon { margin: { left: 15px; right: 15px; } }

    @each $type, $color in $feedback-colors {
      &.-#{$type} { background-color: $color; }
    }
  }
}
</style>
