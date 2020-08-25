import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase'

Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
   fb.initializeApp({
     apiKey: "AIzaSyC6PCzGTtov37XPaCZyLlZqKqnJmBgITQg",
     authDomain: "atom-73b6f.firebaseapp.com",
     databaseURL: "https://atom-73b6f.firebaseio.com",
     projectId: "atom-73b6f",
     storageBucket: "atom-73b6f.appspot.com",
     messagingSenderId: "967792798987",
     appId: "1:967792798987:web:3ace7ca06404fd3c04460e",
     measurementId: "G-JY7Y1B8Z02"
   })

    fb.auth().onAuthStateChanged(user => {
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
      this.$store.dispatch('fatchAds')
   fb.analytics();
  }
}).$mount('#app')
