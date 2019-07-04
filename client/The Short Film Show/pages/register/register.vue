<template>
	<view class="Reg-back">
		<view class="picture">
			<image src="../../static/assets/logo3.png" class="logo" mode=""></image>
		</view>
		<form bindsubmit="formSubmit" bindreset="formReset">
			<view class="itemView">
				<input name="username" class="input" v-model="email" placeholder="Email" />
			</view>
			<view class="itemView">
				<input name="username" class="input" v-model="account" placeholder="Username" />
			</view>
			<view class="itemView">
				<input name="password" class="input" v-model="password" password placeholder="Password" />
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="Register">Complete</button>
			</view>
		</form>
	</view>
</template>

<script>
	import service from '../../service.js';
	// import aes from '../../myaes.js'
	
	export default {
		data() {
		    return {
		        account: '',
		        password: '',
		        email: ''
		    }
		},
		methods:{
				register() {
					if (this.email.length < 3 || !~this.email.indexOf('@')) {
					    uni.showToast({
					        icon: 'none',
					        title: 'Your email address is not valid'
					    });
					    return;
					}
					if (this.account.length < 5) {
					    uni.showToast({
					        icon: 'none',
					        title: 'Your name musty be at least 5 characters'
					    });
					    return;
					}
					if (this.password.length < 6) {
					    uni.showToast({
					        icon: 'none',
					        title: 'Your password must be at least 6 characters'
					    });
					    return;
					}
					const data = {
					    account: this.account,
					    password: this.password,
					    email: this.email
					}
				uni.request({
					url: 'http://localhost:8080/servlat/register',
					method: 'POST',
					data: {
						username: this.username,
						password: this.password,
					},
			
					success: (res) => {
						uni.showToast({
								icon: 'none',
								title: 'Register Complete'
							});
							uni.navigateTo({
								url: '../login/login',
							});
						},fail: () => {
							uni.showToast({
								icon: 'none',
								title: 'The network is out of order,please try again later'
							});
					}
				});
			}

		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}
	
	.Reg-back {
		height: 100%;
		background-color: white;
	}
	
	.logo {
		display: flex;
		width: 100%;
	}
	
	.itemView {
		height: 10%;
		border: 1upx solid black;
		border-radius: 2px;
		background-color: #F8F8FF;
	}
</style>
