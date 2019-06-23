import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$serverUrl = 'http://127.0.0.1:8080'

const app = new Vue({
    ...App
})
app.$mount()
