<template>
    <div>
        <h1>{{getArticle}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed:{
      getArticle(){
        return this.$store.getters.getArticle
      }
  }
}
</script>
