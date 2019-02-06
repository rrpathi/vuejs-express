<template>
    <div>
         <table class="table table-bordered">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Body</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(article,index) in getArticle" :key="index">
        <td>{{article.title}}</td>
        <td>{{article.author}}</td>
        <td>{{article.body}}</td>
        <td><button @click="deleteArticle(article._id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
  <!-- <addarticle :token="token"></addarticle> -->
    </div>
</template>

<script>
import addarticle from './addarticle.vue'
export default {
  name: 'Dashboard',
  data(){
      return{
          token:localStorage.getItem("jwt_auth")
      }
  },
  components:{
      addarticle
  },
  created(){
            this.$store.dispatch('getArticle',{token:this.token}).then((tokenRes) =>{
            this.$store.commit("SET_ARTICLE", tokenRes);
            });
  },
  computed:{
      getArticle(){
            const testing = this.$store.getters.getArticle;;
           return  testing;
          
      }
  },
  methods:{
      deleteArticle(articleId){
        this.$store.dispatch('deleteArticle',{articleId:articleId}).then((articleRes) =>{
        this.$store.dispatch('getArticle',{token:this.token}).then((tokenRes) =>{
        this.$store.commit("SET_ARTICLE", tokenRes);
            });
        });
           
      }
  }
}
</script>
