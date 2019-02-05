<template>
    <div>
        <h1>{{getArticle}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  created(){
      const token = localStorage.getItem("jwt_auth"); 
            this.$store.dispatch('getArticle',{token:token}).then((tokenRes) =>{
            this.$store.commit("SET_ARTICLE", tokenRes);
            });
  },
  computed:{
      getArticle(){
            const testing = this.$store.getters.getArticle;;
            // console.log(this.$store.getters.getArticle);
           return  testing;
          
      }
  }
}
</script>
