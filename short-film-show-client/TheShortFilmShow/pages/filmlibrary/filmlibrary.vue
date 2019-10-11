<template>
	<view class="container column">
		<!-- Populer recommand card-->
		<view class="card">
			<navigator class="rec" url='../videoplay1/videoplay1'>
				<video class="play-video" id="5285890787780845965" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4"
				 @error="videoErrorCallback" controls></video>
				<text class="cardtitle">Vendetta (ven·dét·ta)</text>
			</navigator>
		</view>
		<view class="card">
			<navigator class="rec" url='../videoplay1/videoplay1'>
				<video class="play-video" id="5285890787780845965" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4"
				 @error="videoErrorCallback" controls></video>
				<text class="cardtitle">Vendetta (ven·dét·ta)</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				circular: true
			}
		},

		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay
		},
		intervalChange(e) {
			this.interval = e.target.value
		},
		durationChange(e) {
			this.duration = e.target.value
		},

		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},

		onLoad() {
			uni.setNavigationBarTitle({
				title: "Films Library"
			});
		},

		methods: {

		}

	}
</script>

<style>
	page {
		height: 220%;
		width: 100%;
	}

	.play-video {
		height: 400upx;
		width: 98%;
		margin-top: 7upx;
		margin-left: 10upx;
		margin-right: 10upx;
	}

	.card {
		display: flex;
		flex-direction: column;
		height: auto;
		width: 95%;
		align-items: center;
		background:linear-gradient(to bottom,#FFFFFF,#696878 );
		margin: 12upx 20upx;
		border-radius: 20upx;
	}

	.fword {
		font-size: xx-small;
		color: black;
		position: fixed;
		margin-left: 10upx;
	}

	.followicon {
		height: 40upx;
		width: 40upx;
		position: fixed;
		padding-left: 10upx;
	}

	.action {
		display: flex;
		margin-top: 20upx;
	}

	.rec {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cardtitle {
		font-size: large;
		color: white;
		margin: 30upx 0upx;
	}

	.container {
		display:flex;
		flex-direction:column;
		height: 100%;
		background-color: black;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.t1 {
		color: white;
	}
</style>
