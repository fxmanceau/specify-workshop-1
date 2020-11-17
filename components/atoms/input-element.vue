<template>
  <input
    :type="type"
    :value="value"
    :class="['a-input', { 'a-input--text': type.match(/text|password|name|email|tel|/) }]"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>
