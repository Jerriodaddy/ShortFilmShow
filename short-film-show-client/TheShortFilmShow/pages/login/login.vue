<template>
	<view class="lg-back">
		<view class="picture">
			<image src="../../static/assets/logo.png" class="logo" mode="aspectFit"></image>
		</view>
		<form @submit="login">
			<view class="itemView">
				<input name="username" class="input" placeholder="Username" />
			</view>
			<view class="itemView">
				<input name="password" class="input" placeholder="Password" />
			</view>
			<view class="button-area">
				<button class="loginBtn" formType="submit">Login</button>
				<button class="registerBtn" @tap="register">Sign up now!</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: "Sign in"
			});
			
		},

		methods: {

			register() {
				uni.navigateTo({
					url: '../register/register',
				})
			},

			login(res) {
				var formObject = res.detail.value;
				var username = formObject.username;
				var password = formObject.password;
				if (username.length == 0 || password.length == 0) {
					uni.showToast({
						title: 'Username or password can not be null',
					});
				} else {
					var ServerUrl = this.$serverUrl;

					var that = this;
					uni.request({
						url: ServerUrl + '/login',
						method: 'POST',
						data: {
							username: username,
							password: password,
						},
						success: (res) => {
							console.log(res.data);
							var status = res.data.status;
							if (status == 200) {
								uni.showToast({
									icon: 'success',
									title: 'Welcome'
								});
								that.setGlobalUserInfo(res.data.data);
								that.goToIndex();
							} else if (status == 500) {
								uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 3000
								});
							}
						}
					});
				}
			},
			
			goToIndex() {
				uni.switchTab({
					url:'../index/index',
				})
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

	.lg-back {
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

	.input {
		BORDER-RIGHT: 0px solid;
		BORDER-TOP: 0px solid;
		BORDER-LEFT: 0px solid;
		BORDER-BOTTOM: 0px solid;
		//border-color: orange;
	}

	.loginBtn {
		width: 40%;
		margin-right: 30px;
		float: right;
	}

	.registerBtn {
		width: 40%;
		margin-left: 30px;
		float: left;
		background-color: orange;
		color: white;
	}
</style>
