<template>
  <component
    :is="tag"
    :class="[
      'a-text',
      {
        'a-text--title': tag === 'h1',
        'a-text--subtitle': tag === 'h2',
        'a-text--label': tag === 'label',
        'a-text--body-s': tag === 'p',
      },
    ]"
    v-html="content"
  ></component>
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
  },
}
</script>
