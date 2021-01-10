import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

interface StoredUser {
  displayName: string;
  email: string;
  userID: string;
}

const store = new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null as StoredUser | null
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value
    },
    SET_USER (state, data) {
      state.user.data = data
    }
  },
  actions: {
    fetchUser ({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email,
          userID: user.uid
        })
      } else {
        commit('SET_USER', null)
      }
    }
  }
})

export default function () {
  return store
}

export { store }
