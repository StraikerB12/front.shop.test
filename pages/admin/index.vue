<template>
  <div>
    admin <a href="/">main</a> <div @click="refreh">бновить</div>
  </div>
</template>

<script>
  // import '@fortawesome/fontawesome-free/js/all.js'
  export default {
    name: 'AdminMainPage',
    layout: 'admin',
    middleware: 'notAuth',
    mounted(){
      console.log('token', this.$auth.strategy.token.get());
      console.log('refreshToken', this.$auth.strategy.refreshToken.get());
    },
    methods: {
      refreh(){
        // this.$auth.strategy.token.reset()
        this.$auth.refreshTokens()
      }
    }
  }
</script>

<style>

</style>