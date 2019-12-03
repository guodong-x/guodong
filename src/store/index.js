import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list1: [],
    list2: [],
    list3: []
  },
  mutations: {
    ywcdlist(state, payload) {
      state.list1 = payload
    },
    jxzdlist(state, payload) {
      state.list2 = payload
    },
    qxzzdlist(state, payload) {
      state.list3 = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
