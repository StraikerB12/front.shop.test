<template>
  <div>
    <h1>Категория {{ title }}</h1>
  </div>
</template>

<script>

  export default {

    // validate ({ params }) {
    //   return /^([0-9]{12,12})$/.test(params.CategorySlug)
    // },
    
    computed: {
      title: function(){
        return this.$route.params.CategorySlug
      }
    },
    
  }
</script>