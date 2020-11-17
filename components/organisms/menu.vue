<template>
  <div class="o-menu col-start-1 col-end-5">
    <TextElement tag="h2" content="Account" />
    <ul class="">
      <li v-for="item in menu" :key="item.id" class="">
        <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: 'Profile', link: '#profile' },
        { name: 'Settings', link: '#settings' },
        { name: 'Data', link: '#data' },
      ],
    }
  },
}
</script>
