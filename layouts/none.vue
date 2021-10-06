<template>
  <div class="layout-none">
    <nuxt />
  </div>
</template>

<script>
  export default {
    name: 'layoutNone',
    computed: {
      meta () {
        return [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no' },
          { hid: 'description', name: 'description', content: 'Главная' }
        ]
      }
    },

    head () {
      const canonical = `https://mysite.com${this.$route.path.toLowerCase().replace(/\/$/,'')}`
      return {
        meta: [ ...this.meta ],
        script: [ ],
        link: [{ rel: 'canonical', href: canonical }]
      }
    }
  }
</script>