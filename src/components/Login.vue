<template>
  <div>
    <b-form inline>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="form.email" id="inlineFormInputName2" placeholder="Jane Doe" />
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inlineFormInputGroupUsername2" v-model="form.password" placeholder="Username" />
      </b-input-group>
      <b-button @click="save" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {}
    }
  },
  methods: {
    save () {
      this.$store.dispatch('login', {
        requestParams: {'email': this.form.email, 'password': this.form.password}
      }).then((res) => {
        if (res.data.status === 'ok') {
          // console.log('login success')
          // this.$router.push({
          //   name: 'dashboard'
          // })
          this.$store.dispatch('getArticle',{token:res.data.token}).then((tokenRes) =>{
          this.$store.commit("SET_ARTICLE", tokenRes);
          this.$router.push({
            name: 'dashboard'
          })
            // console.log(tokenRes);
          })
        }
      })
        .catch(() => {
          console.log('Error Return')
        })
    }
  }
}
</script>
