<template>
  <button
    v-if="tag === 'button'"
    :class="[
      'a-button',
      { 'a-button--green': theme === 'green', 'a-button--red': theme === 'red' },
    ]"
  >
    {{ text }}
  </button>

  <input
    v-else-if="tag === 'input'"
    type="button"
    :value="text"
    :class="[
      'a-button',
      { 'a-button--green': theme === 'green', 'a-button--red': theme === 'red' },
    ]"
  />
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      default: 'Button',
    },
    theme: {
      type: String,
      default: 'green',
    },
  },
}
</script>
