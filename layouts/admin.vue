<template>
  <div class="layout">
    <div class="layout__header">
      <Header></Header>
    </div>
    <div class="layout__main">
      <div class="layout__menu">
        <Menu></Menu>
      </div>
      <div class="layout__content">
        <nuxt />
      </div>
    </div>
    <div class="layout__footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from '~/components/Admin/Footer.vue'
  import Header from '~/components/Admin/Header.vue'
  import Menu from '~/components/Admin/Menu.vue'

  export default {
    name: 'layoutAdmin',
    components: {
      Footer,
      Header,
      Menu
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
        script: [ ],
        link: [{ rel: 'canonical', href: canonical }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;

    .layout__header{}
    .layout__main{
      flex-grow: 1;
      display: flex;

      .layout__menu{}
      .layout__content{}
    }
    .layout__footer{}
  }
</style>