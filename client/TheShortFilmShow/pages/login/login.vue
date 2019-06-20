<template>
	<view class="lg-back">
		<view class="picture">
			<image src="../../static/assets/logo3.png" class="logo" mode=""></image>
		</view>
		<form bindsubmit="formSubmit" bindreset="formReset">
			<view class="itemView">
				<input name="username" v-model="account" class="input" placeholder="Username" />
			</view>
			<view class="itemView">
				<input name="password" class="input" v-model="password" password placeholder="Password" />
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">Login</button>
			</view>
			<view class="action-row">
				<navigator class="Reg" url="../register/register">Register</navigator>
			</view>
		</form>
	</view>
</template>

<script>
	import service from '../../service.js';
	import aes from '../../my_aes.js'
	export default {
		data() {
			return {
				account: '',
				password: ''
			};
		},
		methods:{
			bindLogin(){
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
				uni.request({
					
					url:'http://localhost:8080/servlat/login',
					data:{
						username:this.account,
						password:this.password,
					},success: () => {
						this.toMain(this.account);
					},fail: () => {
						uni.showToast({
						    icon: 'none',
						    title: 'Incorrect username of password',
						});
					}	
				})
			},
			toMain(userName) {
			    this.login(userName);
			    /**
			     * 强制登录时使用reLaunch方式跳转过来
			     * 返回首页也使用reLaunch方式
			     */
			    if (this.forcedLogin) {
			        uni.reLaunch({
			            url: '../classify/classify',
			        });
			    } else {
			        uni.navigateBack();
			    }
			
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.lg-back {
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

	.action-row {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.Reg {
		color: black;
	}
</style>
