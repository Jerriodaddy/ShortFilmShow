<template>
	<view class="VP-back">
		<view class="VP-screen">
			<view class="screen">
				<video class="play-video" id="Vendetta (ven·dét·ta)" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4"
				 @error="videoErrorCallback" controls></video>
			</view>
		</view>
		<view class="control_interface">
			<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
				<block v-for="(menuTabs,index) in menuTabs" :key="index">
					<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
						<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
							<view class="menu-one-txt">{{menuTabs.name}}</view>
							<view class="menu-one-bottom">
								<view class="menu-one-bottom-color"></view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>

			<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<block v-for="(swiperDate,index1) in swiperDateList" :key="index1">
					<swiper-item>
						<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(index1)">
							<block>
								<view class="video-info-card">
									<view class="video-pic-box">
										<image class="video-pic-set" src="../../static/assets/images2.jpg" mode=""></image>
									</view>
									<view class="video-info-box">
										<text class="filmname">Vendetta (ven·dét·ta)</text>
										<view class="actors">
											<text class="actor-name">Film Maker:</text>
											<text class="actor-name">Andrea Facheris</text>
										</view>
									</view>
								</view>

								<text class="filmintro">
								</text>
							</block>
						</scroll-view>
					</swiper-item>

					<swiper-item>
						<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(index1)">
							<block>
								<view class="new_comment hor_center">
									<text class="latest_comment hor_center">Latest comment</text>
								</view>
								<!-- 分割线 -->
								<view class="border_line"></view>
								<view class="videocomment">
									<view class="user_info">
										<image class="comment_profile_pic" src="../../static/icons/logo.png"></image>
										<view class="user_info_name">
											<text class="user_info_name_text">Guetta</text>
										</view>
									</view>
									<view class="comment_box">
										<view class="time">
											<text class="time_text">22-06-2019</text>
										</view>
										<view class="content_box">
											<text class="content_text">
												The magical war has gradually entered a climax. </text>
											<view class="text_i"></view>
										</view>
										<view class="comment_show super_center">
											Show more
										</view>
									</view>
								</view>
									<!-- 分割线 -->
								<view class="border_line"></view>
								
								<view class="videocomment">
									<view class="user_info">
										<image class="comment_profile_pic" src="../../static/icons/logo.png"></image>
										<view class="user_info_name">
											<text class="user_info_name_text">Guetta</text>
										</view>
									</view>
									<view class="comment_box">
										<view class="time">
											<text class="time_text">2-06-2019</text>
										</view>
										<view class="content_box">
											<text class="content_text">
												This film is really nice and I almost remember everything in this film. </text>
											<view class="text_i"></view>
										</view>
										<view class="comment_show super_center">
											Show more
										</view>
									</view>
								</view>
									<!-- 分割线 -->
								<view class="border_line"></view>
								
								<view class="videocomment">
									<view class="user_info">
										<image class="comment_profile_pic" src="../../static/icons/logo.png"></image>
										<view class="user_info_name">
											<text class="user_info_name_text">Guetta</text>
										</view>
									</view>
									<view class="comment_box">
										<view class="time">
											<text class="time_text">17-09-2018</text>
										</view>
										<view class="content_box">
											<text class="content_text">
												I really like the actors in this film. For their really nice outlook and their suits. It's really cool. </text>
											<view class="text_i"></view>
										</view>
										<view class="comment_show super_center">
											Show more
										</view>
									</view>
								</view>
									<!-- 分割线 -->
								<view class="border_line"></view>
							</block>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
			<view class="V-com-area">
				<view class="com-write">
					<input name="comment" class="input" placeholder="Write some comment?" />
				</view>
			</view>
		</view>
		<view class="">
			<image class="like_button" src="../../static/icons/like2.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuTabs: [{
					name: 'Detail'
				}, {
					name: 'Comment'
				}],

				actorinfo: [{
					name: 'Sam',
				}, {
					name: 'David',
				}],
				swiperDateList: [
					[],
					[]
				]
				// 								indicatorDots: true,
				// 								autoplay: true,
				// 								interval: 5000,
				// 								duration: 500,
				// 								circular: true
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

		onLoad: function() {
			//初始化数据
			for (var i = 0; i < this.swiperDateList.length; i++) {
				this.getDateList(i);
			};
			uni.setNavigationBarTitle({
				title: 'TheShortFilmShow'
			});
		},

		// 		onLoad: function() {
		// 			uni.setNavigationBarTitle({
		// 				title: 'TheShortFilmShow'
		// 			});
		//}, 

		methods: {
			swichMenu: async function(current) { //点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.setScrollLeft(current);
				}
			},

			// preindex = 默认的index,
			// current index
			swiperChange: async function(e) {
				let index = e.target.current;
				this.setScrollLeft(index);
				this.currentTab = index;
			},
			setScrollLeft: async function(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = await this.getWidth('tabNum' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			loadMore: function(tabIndex) {
				console.log('正在加载更多数据。。。')
				this.getDateList(tabIndex);
			},
			getDateList: function(tabIndex) {
				for (var i = 0; i < 20; i++) {
					var entity = this.menuTabs[tabIndex].name + (this.swiperDateList[tabIndex].length);
					this.swiperDateList[tabIndex].push(entity);
				}
			}

		}

	}
</script>

<style>
	page {
		width: 100%;
		height: 200%;
		/* display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center; */
	}

	/* 通用属性 */
	.super_center {
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.hor_center {
		display: flex;
		align-items: center;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	/* 页面属性 */

	.VP-back {
		height: 100%;
	}

	.play-video {
		width: 100%;
	}

	.V-intro {
		height: 50%;
	}
	
	/* 影片图片、名字、评分显示 */

	.video-info-card {
		display: flex;
		width: 100%;
		height: 350upx;
		/* 		border: 1upx solid black;
 */
		/* 测试用边框显示，正式版请删除本行与上一行 */
	}

	.video-pic-box {
		display: flex;
		flex-direction: column;
		height: 297upx;
		width: 221.31upx;
		margin: 20upx 20upx 20upx;
		margin-bottom: 20upx;
		/* 		border: 1upx solid black;
 */
		/* 测试用边框显示，正式版请删除本行与上一行 */
	}

	.video-pic-set {
		height: 297upx;
		width: 100%;
	}

	.video-info-box {
		display: flex;
		flex-direction: column;
		margin-left: 50upx;
		height: 100%;
		/* 		border: 1upx solid black;
 */
		/* 测试用边框显示，正式版请删除本行与上一行 */
	}

	.actors {
		display: flex;
		flex-direction: column;
		color: black;
		font-size: large;
	}

	/* ===========================电影信息 —— 结束 */

	.com-write {
		height: 10%;
		border: 1upx solid black;
		border-radius: 2px;
		background-color: #F8F8FF;
	}

	.V-com-area {
		position: fixed;
		bottom: 1%;
		left: 0;
		right: 0;
	}

	.body-view {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		width: 100%;
		background-color: black;
	}

	.top-menu-view {
		display: flex;
		justify-content: space-around;
		white-space: nowrap;
		width: 100%;
		background-color: orange;
		height: 80upx;
		top: 0;
		/* 在这里设置导航条高度 */

	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 50%;

	}

	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: white;
		line-height: 40upx;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.top-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(0, 170, 255, 1);
		line-height: 40upx;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}

	.swiper-box-list {
		flex: 1;
		width: 100%;
		height: 60%;
		background-color:black;
		/*调试背景色*/
		border: 5upx solid #000000;
		position: absolute;
	}

	.swiper-one-list {
		height: 100%;
		width: 100%;
	}

	/* 		.swiper-one-list .swiper-list-entity {
			width: 100%;
			height: 112upx;
			text-align: center;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}
 */
	/* swiper */

	.swiper {
		height: 360upx;
	}

	.slideimage {
		width: 100%;
	}


	/* films part */
	.filmsarea {
		display: flex;
		flex-direction: column;
	}

	.oneline {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: larger;
		color: orange;
		padding-left: 50upx;
		margin-bottom: 20upx;
		margin-top: 20upx;
	}

	.filmsline {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.filmname {
		color: #FFA500;
		font-size: large;
	}

	.film {
		display: flex;
		flex-direction: column;
	}

	.filmpic {
		width: 245.9upx;
		height: 330upx;
	}

	/* 评论属性 */

	.new_comment {
		width: 100%;
		height: 80upx;
	}

	.latest_comment {
		font-size: large;
		color: white;
		margin-left: 40upx;
	}

	.videocomment {
		width: 100%;
		height: 26%;
		display: flex;
		position: relative;

	}

	.user_info {
		height: auto;
		width: auto;
		min-width: 40upx;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
		margin: 20upx 20upx;
		position: absolute;

	}

	.user_info_name {
		width: auto;
		min-width: 40upx;
		max-width: 80upx;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
	}

	.content_box {
		margin-left: 20upx;
		margin-right: 40upx;
		margin-top: 50upx;
		margin-bottom: 20upx;
		position: absolute;
		height: 60%;
		width: 95%;

	}

	.text_i {
		display: inline-block;
		width: 100%;
	}

	.content_text {
		display: inline-block;
		width: 100%;
		text-align: justify;
		font-size: medium;
		color: white;
	}

	.user_info_name_text {
		font-size: small;
		color: white;
	}

	.comment_profile_pic {
		height: 80upx;
		width: 80upx;
		border: 2upx;
		border-radius: 150upx;
	}

	.comment_text {
		display: inline-block;
		font-size: medium;
		color: #1AAD19;
		width: 100%;
	}

	.comment_box {
		height: 100%;
		left: 15%;
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 80%;

	}

	.time {
		display: flex;
		height: 20%;
		right: 3%;
		position: absolute;
	}

	.time_text {
		font-size: small;
		color: #BBBBBB;
	}

	/* 分割线 */
	.border_line {
		position: relative;
		width: 80%;
		left: 10%;
		right: 10%;
		height: 2upx;
		border-bottom: 2upx solid #777777;
	}
	
	/* 评论展开 */
	.comment_show{
		width: 25%;
		height: 15%;
		position: absolute;
		bottom: 0;
		right: 0;
		align-content: center;
		display: flex;
		font-size: x-small;
		color: white;
	}
	
	.like_button{
		height: 16%;
		width: 16%;
		position: fixed;
		bottom: 4%;
		right: 5%;
	}
</style>
