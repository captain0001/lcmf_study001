import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import accounts from '../../public/master/index'
export default new Vuex.Store({
  state: {
    master:{
      accounts
    } 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})