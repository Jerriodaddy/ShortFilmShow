<template>
	<view class="container column">
		<view class="history_a column">
			<!--观看历史二层框架-->
			<view class="card_loop" v-for="c in history_card" v-bind:key="c[0]">
				<view class="history_card row hor_center" @click="jumpvp">
					<!--单个历史卡片-->
					<view class="history_t super_center">
						<!--电影标题部分-->
						<text class="history_fn">{{history}}</text>
						<!--电影标题文字-->
					</view>
					<view class="history_ia super_center">
						<image src="../../static/assets/Tom Eastwood.jpg" mode="aspectFit" class="history_img"></image>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				history: [
					[123],[234],[345],[465]
				],
				history_card:[
					1,2,3,4,5
				]

			};
		},

		onLoad: function() {
			uni.setNavigationBarTitle({
				title: "Watch History"
			})

			// var userInfo = this.getGlobalUserInfo();
			// if (userInfo == null || userInfo == undefined || userInfo == "") {
			// 	uni.navigateTo({
			// 		url: '../login/login',
			// 	});
			// 	return;
			// }
			// 
			// console.log(userInfo);
		},
		
		onShow() {
			// 记录用户跳转页面行为
			this.goToPageRec();
		},
		
		methods: {

			jumpvp: function() {
				uni.navigateTo({
					url: '../videoplay/videoplay',
					success: res => {
						console.log("jump successfully")
					},
					fail: () => {
						console.log("jump fail")
					}
				});

			}

		}
	}
</script>

<style>
	page {
		background-color: #000000;
	}

	.history_a {
		display: flex;
		position: relative;
		background-color: black;
		width: 100%;
		height: auto;
	}
	
	.card_loop{
		width: 100%;
	}
	
	.history_card {
		display: flex;
		width: 100%;
		height: 160upx;
		border-bottom: 2upx solid darkgray;
		margin-top: 20upx;
	}

	.history_t {
		position: absolute;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 68%;
	}

	.history_fn {
		font-size: medium;
		color: darkgray;
	}

	.history_ia {
		position: absolute;
		left: 68%;
		width: 32%;
		height: 100%;
	}

	.history_img {
		position: absolute;
		width: 100%;
	}
</style>
