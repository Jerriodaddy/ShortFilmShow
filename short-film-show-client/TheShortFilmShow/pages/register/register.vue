<template>
	<view class="reg-back">
		<view class="picture">
			<image src="../../static/assets/logo.png" class="logo" mode="aspectFit"></image>
		</view>
		<form @submit="register" bindreset="formReset">
			<view class="itemView">
				<input name="email" class="input" placeholder="Email" />
			</view>
			<view class="itemView">
				<input name="username" class="input" placeholder="Username" />
			</view>
			<view class="itemView">
				<input name="password" class="input" placeholder="Password" />
			</view>
			<view class="itemView">
				<input name="vPassword" class="input" placeholder="Vertify Password" />
			</view>
			<view class="btn-row">
				<button class="register" formType="submit">Complete!</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		
		onShow() {
			// 记录用户跳转页面行为
			this.goToPageRec();
		},
		
		methods: {
			register(res) {
				var formObject = res.detail.value;
				var email = formObject.email;
				var username = formObject.username;
				var password = formObject.password;
				var vPassword = formObject.vPassword;

				if (email.length < 1 || !~email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: 'Your email address is not valid'
					});
					return;
				} else {
					// TODO 验证邮箱

					// 改成邮箱登录？
				}

				if (username.length == 0 || password.length == 0) {
					uni.showToast({
						title: 'Username or password can not be null',
					});
				} else if (password != vPassword) {
					uni.showToast({
						icon: 'none',
						title: 'Vertify password is different with password'
					});
				} else {
					var ServerUrl = this.$serverUrl;
					
					var that = this;
					uni.request({
						url: ServerUrl + '/register',
						method: 'POST',
						data: {
							email: email,
							username: username,
							password: password,
						},
						header: {
							'content-type': 'application/json'
						},

						success: (res) => {
							console.log(res.data);
							var status = res.data.status;
							if (status == 200) {
								uni.showToast({
									icon: 'none',
									title: 'Register Complete'
								});
								
								that.setGlobalUserInfo(res.data.data);
							
								uni.navigateTo({
									url: '../login/login',
								});
							} else if (status == 500) {
								uni.showToast({
									icon: 'none',
									title: res.data.msg,
								});
							}
						},
						fail: (res) => {
							console.log(res.data);
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
							});
						}
					});
				}
			}
		},
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.picture {
		display: flex;
	}

	.reg-back {
		height: 100%;
		background-color: black;
	}

	.itemView {
		height: 60upx;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-bottom: 20upx;
		background-color: #F0F0F0;
	}

	.btn-row {
		width: 100%;
	}

	.register {
		width: 50%;
		margin: 0px auto;
		background-color: orange;
		color: white;
	}
</style>
