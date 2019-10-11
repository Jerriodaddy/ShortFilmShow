<template>
	<view class="background">
		<view class="information-card">
			<view class="title-line">
				<text class="info-title">Nicke name</text>
				<text class="info-title">ID</text>
				<text class="info-title">Gender</text>
				<text class="info-title">Birthday</text>
				<text class="info-title">Prefer</text>
			</view>

			<view class="content-line">
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				faceUrl: '../../static/icons/logo.png',
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "Profile"
			});
		},
		methods: {
			changeFaceImage: function() {
				var that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						var tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths);
						uni.showLoading({
							title: 'Uploading...'
						})
						uni.uploadFile({
							url: that.$serverUrl + '/user/uploadFace?userId=' + 'tmp-user-id',
							filePath: tempFilePaths[0],
							name: 'file',
							success: (res) => {
								var data = JSON.parse(res.data);
								console.log(data.data);
								uni.hideLoading();
								if (data.status == 200) {
									uni.showToast({
										title: 'Success!',
										icon: "success"
									})
									var imageUrl = data.data;
									that.faceUrl = that.$serverUrl + imageUrl;
								} else if (data.status == 500) {
									uni.showToast({
										title: data.msg
									})
								}
							}
						});
					}
				});
			}
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
	
	.information-card{
		display:flex;
	}
	
	/* 左侧标题 */
	.title-line {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 600upx;
		margin-left: 50upx;
	}

	.infoline {
		height: 100upx;
		display: flex;
	}

	.info-title {
		color: #888888;
		margin-left: 20upx;
	}

	/* 右侧内容 */
	.info-content {
		color: white;
		margin-left: 200upx;
	}

	.content-line {
		display: flex;
		flex-direction: column;
		height: 600upx;
		justify-content: space-around;
	}

	.content-space {
		margin-left: 200upx;
	}

	/* “编辑”按钮样式 */
	.edit-button {
		width: 100%;
		height: 60upx;
		display: flex;
		justify-content: center;
		align-content: center;
		margin-top: 50upx;
	}

	.edit-text {
		color: #929292;
		font-size: large;
	}

	.film-upload {
		display: flex;
		width: 100%;
		height: 60upx;
		justify-content: center;
		align-items: center;
	}

	.film-upload-text {
		color: white;
		font-size: middle;
	}
</style>
