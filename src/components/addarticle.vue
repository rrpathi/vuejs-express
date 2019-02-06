<template>
    <div>
        <p>Add Article</p>
        Title: <input v-model="title" type="text" ><br /><br />
        Author: <input v-model="author" type="text"><br /><br />
        Body: <input v-model="body" type="text"><br /><br />
        <button @click="addArticle">Add New Article </button>
    </div>
</template>
<script>
export default {
    name:'AddArticle',
    props:{
        token:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            name:'Ragupathi',
            title:'',
            author:'',
            body:''
        }
    },
    methods:{
        addArticle(){
            let articleInput = {token:this.token,title:this.title,author:this.title,body:this.body}
            this.$store.dispatch('addArticle',articleInput).then((articleRes) =>{
                console.log(articleRes);
            });
        }
    }
}
</script>
