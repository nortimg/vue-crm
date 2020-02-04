import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin.js'
import 'materialize-css/dist/js/materialize.min.js'
import dateFilter from '@/filters/date.filter.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter) 



firebase.initializeApp({
  apiKey: "AIzaSyB8zWV9GFWsGbESMzieWp8hUlRlUIhra-I",
  authDomain: "vue-crm-8288f.firebaseapp.com",
  databaseURL: "https://vue-crm-8288f.firebaseio.com",
  projectId: "vue-crm-8288f",
  storageBucket: "vue-crm-8288f.appspot.com",
  messagingSenderId: "166784343368",
  appId: "1:166784343368:web:5425d75de9f47edfe5677d",
  measurementId: "G-LJDC4GBWRB"
})

let app; 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})