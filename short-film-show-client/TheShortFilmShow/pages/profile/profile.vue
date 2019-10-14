<template>
	<view class="background">
		<view class="picbox">
			<view type="primary" @tap="upload">
				<!-- <image src="../../static/icons/logo.png" class="profilepic"></image> -->
				<image :src="faceUrl" class="profilepic"></image>

			</view>
			<!-- <text class="change">change picture</text> -->
			<!-- 			<button type="primary" @click="changeFaceImage" @tap="upload">change picture</button>-->
			<view class="">{{userInfo.username}}</view>
		</view>
		<!-- 数据框 pink-->
		<view class="data_box column_center">
			<text class="data_box_text">Follow</text>
			<view class="data_border"></view>
			<text class="data_box_text">Fans</text>
			<view class="data_border"></view>
			<text class="data_box_text">Donate</text>
		</view>

		<!-- Profile 所包含的内容块 -->
		<view class="container_profile column hor_center">
			<!-- Profile 的单个内容抽屉 -->
			<view class="drawer column_center">
				<image src="../../static/icons/history.png" mode="" class="icon-proflie"></image>
				<view class="profile_title column_center">
					<navigator url="../watchhistory/watchhistory" hover-class="navigator-hover" class="profiel_title_text">{{history}}</navigator>
				</view>
			</view>

			<!-- Profile 的单个内容抽屉 -->
			<view class="drawer column_center">
				<image src="../../static/icons/history.png" mode="" class="icon-proflie"></image>
				<view class="profile_title column_center">
					<navigator url="../profileinfo/profileinfo" hover-class="navigator-hover" class="profiel_title_text">Edit
						information</navigator>
				</view>
			</view>
		</view>
		<button @click="logout">logout</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				faceUrl: '../../static/icons/profilePic.png',
				src: '',
				history: 'Watch history',
				userInfo: {
					username: 'Please login',
				}
			}
		},

		onLoad(option) {
			uni.setNavigationBarTitle({
				title: "Profile"
			});

			// let {
			// 	avatar
			// } = option;
			// if (avatar) {
			// 	this.src = avatar;
			// }

		},
		
		onShow() {
			var userInfo = this.getGlobalUserInfo();
			
			// console.log(userInfo);
			this.queryUserInfo(userInfo);
			
			// 记录用户跳转页面行为
			this.goToPageRec();
		},
		
		methods: {
			upload() {
				var userInfo = this.getGlobalUserInfo();
				if (userInfo == null || userInfo == undefined || userInfo == "") {
					uni.navigateTo({
						url: '../login/login',
					});
					return;
				}

				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success(res) {
						console.log(res);
						
						const src = res.tempFilePaths[0];
						console.log("src=" + src)
						uni.redirectTo({
							url: '../upload/upload?src=' + src
						});
					}
				});
			},

			// 用户注销，清除用户缓存
			logout: function() {
				var userInfo = this.getGlobalUserInfo();
				if (userInfo == null || userInfo == undefined || userInfo == "") {
					uni.redirectTo({
						url: '../login/login',
					});
					return;
				}
				var that = this;
				uni.request({
					url: that.$serverUrl + '/logout',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data:{
						userId: userInfo.id,
					},
					success: (res) => {
						console.log(res.data);
						var status = res.data.status;
						if (status == 200) {
							uni.showToast({
								icon: 'none',
								title: 'Logout'
							});
							that.removeGlobalUserInfo();
							console.log("logout: userInfo.id=" + that.getGlobalUserInfo.id);
							console.log("logout: userInfo.userToken=" + that.getGlobalUserInfo.userToken);
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
				});
			},

			queryUserInfo(userInfo) {
				uni.showLoading({
					title: 'Loding...',
				});
				var that = this;
				uni.request({
					url: that.$serverUrl + '/user/query?userId=' + userInfo.id,
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'userId': userInfo.id,
						'userToken': userInfo.userToken,
					},
					success: (res) => {
						uni.hideLoading();
						
						console.log(res.data);
						var status = res.data.status;
						if (status == 200) {
							uni.hideLoading();
							// 赋值到当前页面
							var userInfo = res.data.data;
							that.userInfo = userInfo;
							if (userInfo.faceImage != null) {
								that.faceUrl = that.$serverUrl + userInfo.faceImage;
							}
							// 加上user的其他属性

						} else if (status == 502) {
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
							});
						}
					}
				});
			}

			// 			upload: function() {
			// 				var userInfo = this.getGlobalUserInfo();
			// 				if (userInfo == null) {
			// 					return;
			// 				}
			// 				var that = this;
			// 				uni.chooseImage({
			// 					count: 1, //默认9
			// 					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
			// 					sourceType: ['album'], //从相册选择
			// 					success: function(res) {
			// 						var tempFilePaths = res.tempFilePaths;
			// 						console.log(tempFilePaths);
			// 						uni.showLoading({
			// 							title: 'Uploading...'
			// 						});
			// 						// 以下三行用于测试，
			// 						uni.redirectTo({
			// 							url:'../upload/upload?src=' + src
			// 						});
			// 
			// 						uni.uploadFile({
			// 							url: that.$serverUrl + '/user/uploadFace?userId=' + userInfo.id,
			// 							filePath: tempFilePaths[0],
			// 							name: 'file',
			// 							success: (res) => {
			// 								var data = JSON.parse(res.data);
			// 								console.log(data.data);
			// 								uni.hideLoading();
			// 								if (data.status == 200) {
			// 									uni.showToast({
			// 										title: 'Success!',
			// 										icon: "success"
			// 									})
			// 									var imageUrl = data.data;
			// 									that.faceUrl = that.$serverUrl + imageUrl;
			// 								} else if (data.status == 500) {
			// 									uni.showToast({
			// 										title: data.msg
			// 									})
			// 								}
			// 							}
			// 						});
			// 					}
			// 				});
			// 			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}

	.background {
		height: 100%;
		background-color: #000000;
	}

	/* 头像框 */
	.picbox {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: orange;
		height: 300upx;
		align-items: center;
		justify-content: center;
		top: 0;
	}

	.profilepic {
		width: 120upx;
		height: 120upx;
		border-radius: 60upx;
	}

	/* 更改头像 */
	.change {
		color: white;
		font-size: x-small;
		margin-top: 20upx;
	}

	/* 数据框 */
	.data_box {
		position: relative;
		display: flex;
		height: 110upx;
		width: 100%;
		justify-content: space-around;
		background: linear-gradient(to right, orange, red, orange);
	}

	.data_box_text {
		fontsize: small;
		color: white;
	}

	.data_border {
		width: 2upx;
		background-color: darkgray;
		height: 90upx;
	}


	/* 抽屉容器 */
	.container_profile {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: blacke;
	}

	/* 抽屉 */
	.drawer {
		height: 100upx;
		width: 95%;
		margin-top: 10upx;
		border-top: 2upx solid darkgray;
		border-bottom: 2upx solid darkgray;
	}

	/* 图标 */
	.icon-proflie {
		width: 48upx;
		height: 48upx;
		position: absolute;
		margin-left: 5%;
	}

	/* 抽屉内容 */
	.profile_title {
		width: 87%;
		height: 80%;
		margin-left: 2%;

	}

	.profiel_title_text {
		font-size: large;
		color: white;
		margin-left: 20%;
	}
</style>
