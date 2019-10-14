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

/**
 * 返回页面栈最后一页(当前页面)
 */
Vue.prototype.getCurrentPage = function() {
	var pages = getCurrentPages();
	var currentPage = pages[pages.length - 1];
	return currentPage;
}
/**
 * 记录用户跳转页面行为
 */
Vue.prototype.goToPageRec = function() {
	uni.request({
		url: app.$serverUrl + '/user/goToPageRec',
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded',
			'userId': app.getGlobalUserInfo().id,
			'userToken': app.getGlobalUserInfo().userToken,
		},
		data:{
			userId: app.getGlobalUserInfo().id,
			target: app.getCurrentPage().route
		},
		success: (res) => {
			console.log(res.data);		
		},
	});
}
const app = new Vue({
	...App
})
app.$mount()
