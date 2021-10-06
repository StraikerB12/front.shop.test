<template>
  <div class="layout-default">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '~~/components/Header.vue'
  import Footer from '~~/components/Footer.vue'

  export default {
    name: 'layoutDefault',
    components: {
      Header,
      Footer
    },

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
        script: [
          // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
        ],
        link: [{ rel: 'canonical', href: canonical }]
      }
    }
  }
</script>