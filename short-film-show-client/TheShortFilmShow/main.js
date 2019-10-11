import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// Vue.prototype.$serverUrl = 'http://129.28.130.27:8080/sfs'
Vue.prototype.$serverUrl = 'http://127.0.0.1:8080'

Vue.prototype.setGlobalUserInfo = function(user) {
	uni.setStorageSync('userInfo', user);
}

Vue.prototype.getGlobalUserInfo = function() {
	var value = uni.getStorageSync('userInfo');
	return value;
}

Vue.prototype.removeGlobalUserInfo = function() {
	uni.removeStorageSync('userInfo');
}

const app = new Vue({
	...App
})
app.$mount()
