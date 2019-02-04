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
  data() { 
    return {
      form:{} 
    }
  },
  methods:{ 
    save() {
      console.log('Hello World')
    }
  }
}
</script>
