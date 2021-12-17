import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    items: state => {
      return state.items
    }
  },
  mutations: {
    SET_Items (state, items) {
      state.items = items
    }
  },
  actions: {
    loadItems ({ commit }) {
      axios.get('https://api.punkapi.com/v2/beers', {})
        .then(response => response.data)
        .then(items => {
          commit('SET_Items', items)
        })
    }
  },
  modules: {
  }
})
