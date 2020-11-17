<template>
  <div class="container custom-grid">
    <Menu />

    <div class="page-content col-start-5 col-end-14 custom-subgrid">
      <TextElement tag="h1" content="Profile" class="col-start-3 col-end-6" />

      <section class="col-start-3 col-end-6">
        <form action="#" class="o-form">
          <FormInput label="Email" type="text" value="joeydart@vulf.com" />
          <FormInput label="Full name" type="name" value="Joey Dart" />
          <ButtonElement type="input" text="Save" theme="green" />
        </form>
      </section>

      <section class="col-start-3 col-end-7">
        <TextElement tag="h2" content="Delete my account" />
        <TextElement tag="p" :content="deleteText" />
        <ButtonElement type="button" text="Delete my account" theme="red" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteText:
        "If you're no longer interested in using specific Google services, like Gmail or YouTube, you can sign in to your Google Account to delete them",
    }
  },
  mounted() {
    document.querySelector('html').setAttribute('data-theme', 'light')
  },
}
</script>

<style lang="scss">
.container {
  height: 100%;
}
.page-content {
  --number-of-columns: 9;
  padding-top: var(--base-space-23);
}
</style>
