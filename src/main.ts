import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import * as firebase from 'firebase'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyAgi_bXoT9A13pW2htUsr34xoalJqB_pb8',
  authDomain: 'teenagers-30cce.firebaseapp.co',
  databaseURL: 'https://teenagers-30cce.firebaseio.com',
  projectId: 'teenagers-30cce',
  storageBucket: 'teenagers-30cce.appspot.com',
  messagingSenderId: '753847676396',
  appId: '1:753847676396:web:0818cb089001fcc4a0a4c9',
  measurementId: 'G-G8L27LHX1V'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
