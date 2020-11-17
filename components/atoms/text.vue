<template>
  <component :is="tag" v-html="content" :class="['a-text', {}]"></component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    content: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: '',
    },
  },
}
</script>
