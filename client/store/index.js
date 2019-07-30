import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import cookieparser from 'cookieparser'

Vue.use(Vuex);

let store = () => new Vuex.Store({
  modules: {
    app
  },
  state,
  getters,
  mutations,
  actions: {
    nuxtServerInit({ commit, state }, { req }) {
      let auth = null
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        try {
          auth = JSON.parse(parsed.auth)
        } catch (err) {
          // No valid cookie found
        }
        commit('setAuth', auth)
      }
    }
  }
});

export default store
