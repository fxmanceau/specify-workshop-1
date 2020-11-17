<template>
  <div class="m-form-input">
    <TextElement tag="label" :content="label" />
    <InputElement :type="type" :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
