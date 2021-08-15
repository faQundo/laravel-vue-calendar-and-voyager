import Vue from 'vue'
import App from './App.vue'


import vuetify from './plugins/vuetify'

new Vue({
    /* router,
    store,
    i18n,
    acl, */
    vuetify,
    render: h => h(App)
  }).$mount('#app')
