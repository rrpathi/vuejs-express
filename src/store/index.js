import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas: []
  },
  actions: {
    login (context, payload) {
      // return axios.post('http://localhost:3000/api/login', {'email': payload.requestParams.email, 'password': payload.requestParams.password})
      return axios.post(`${window.serverURL}/api/login`, {'email': payload.requestParams.email, 'password': payload.requestParams.password})
    },
    getArticle (context, payload) {
      return axios.post('http://localhost:3000/api/getArticle', {'token': payload.token})
    },
    deleteArticle (context, payload) {
      return axios.post('http://localhost:3000/api/deleteArticle', {'articleId': payload.articleId})
      // return payload
    },
    addArticle (context, payload) {
      return payload
    }
  },
  mutations: {
    SET_ARTICLE (state, payload) {
      // console.log(state)
      // Get Article
      state.datas = payload.data
      console.log(state.datas)
    }
  },
  getters: {
    getArticle (state) {
      return state.datas
    }

  }
})
