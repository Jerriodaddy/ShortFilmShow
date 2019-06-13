<template>
	<view class="container">
		<!-- Populer recommand card-->
		<view class="card1">
			<navigator class="rec" url='../videoplay1/videoplay1'>
				<video class="play-video" id="5285890787780845965" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4" @error="videoErrorCallback" controls></video>
				<text class="cardtitle">Vendetta (ven·dét·ta)</text>
			</navigator>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card2">
			<navigator class="rec" url='../videoplay2/videoplay2'>
				<video class="play-video" id="Newbeginnig" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd48c5b5285890787780845452/0OKOPIAaH4oA.mp4" @error="videoErrorCallback" controls></video>
				<text class="cardtitle">Newbeginnig</text>
			</navigator>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card2">
			<navigator class="rec" url='../videoplay3/videoplay3'>
				<video class="play-video" id="Magic Lee - Clean Version" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/f99283fa5285890787780757053/OejgkLtvjuoA.mp4" @error="videoErrorCallback" controls></video>
				<text class="cardtitle">Magic Lee - Clean Version</text>
			</navigator>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card2">
			<navigator class="rec" url='../videoplay/videoplay'>
				<video class="play-video" id="myVideo" src="static/assets/sample2.mp4" @error="videoErrorCallback" controls></video>
				<text class="cardtitle">#Titletitletitletitletitle</text>
			</navigator>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
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
		
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: "Today's best films"
			});

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

	.card1 {
		height: 640upx;
		width: 95%;
		align-items: center;
		background-color: white;
		margin: 0upx 20upx;
		border-radius: 20upx;
		box-shadow: 0upx 10upx 3upx 10upx #C0C0C0;
	}

	.card2 {
		height: 640upx;
		width: 95%;
		align-items: center;
		background-color: white;
		margin: 50upx 20upx;
		border-radius: 20upx;
		box-shadow: 0upx 10upx 3upx 10upx #C0C0C0;
	}

	.directorid {
		display: flex;
		height: 80upx;
		width: 95%;
	}

	.nickname {
		display: flex;
	}

	.follow {
		display: flex;
	}

	.namepic {
		height: 80upx;
		width: 80upx;
		border: 2upx solid #707070;
		border-radius: 100upx;
		margin-left: 20upx;
	}

	.namew {
		margin-top: 10upx;
		margin-left: 20upx;
		margin-right: 20upx;
	}

	.comment {
		height: 50upx;
		width: 50upx;
		margin: 0upx 20upx;
		margin-left: 100upx;
	}

	.like {
		height: 50upx;
		width: 50upx;
		margin: 0upx 20upx;

	}

	.more {
		height: 50upx;
		width: 50upx;
		margin: 0upx 20upx;
	}

	.btn {
		font-size: x-small;
		height: 50upx;
		width: 100upx;
		justify-content: center;
		align-items: center;
		margin-top: 20upx;
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.recpic {
		margin-top: 7upx;
		height: 400upx;
		width: 700upx;
		margin-left: 10upx;
		margin-right: 10upx;
	}

	.cardtitle {
		font-size: large;
		color: black;
		margin: 30upx 0upx;
	}

	.container {
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
