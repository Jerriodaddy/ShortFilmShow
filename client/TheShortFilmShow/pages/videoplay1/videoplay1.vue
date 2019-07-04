<template>
	<view class="VP-back">
		<view class="VP-screen">
			<view class="screen">
				<video class="play-video" id="Vendetta (ven·dét·ta)" src="http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4" @error="videoErrorCallback" controls></video>
			</view>
		</view>
		<!-- 
		<view class="V-name">
			<text class="filmname">Name</text>
		</view> -->

		<!-- <scroll-view class="V-intro" scroll-y="true">
			<text class="filmintro">fill: 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。
				contain: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此
				参数可能会在容器内留下空白。
				cover: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。
				none: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
				scale-down: 中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。
		</scroll-view>
		
		<view class="V-com-area">
			<view class="com-write">
				<input name="comment" class="input" placeholder="Write some comment?" />
			</view>
		</view> -->

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
									<image class="video-pic-set" src="../../static/assets/Andrea Facheris.jpg" mode=""></image>
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
			</block>
		</swiper>
		<view class="V-com-area">
			<view class="com-write">
				<input name="comment" class="input" placeholder="Write some comment?" />
			</view>
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
					name: 'Commit'
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

		// 				onLoad: function() {
		// 					//初始化数据
		// 					for (var i = 0; i < this.swiperDateList.length; i++) {
		// 						this.getDateList(i);
		// 					}
		// 				},
		// 		
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: 'TheShortFilmShow'
			});

		},
		methods: {
			swichMenu: async function(current) { //点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.setScrollLeft(current);
				}
			},
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
		height: 100%;
		/* display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center; */
	}

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
 */		/* 测试用边框显示，正式版请删除本行与上一行 */
	}

	.video-pic-box {
		display: flex;
		flex-direction: column;
		height: 297upx;
		width: 221.31upx;
		margin: 20upx 20upx 20upx;
		margin-bottom: 20upx;
/* 		border: 1upx solid black;
 */		/* 测试用边框显示，正式版请删除本行与上一行 */
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
 */		/* 测试用边框显示，正式版请删除本行与上一行 */
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
		background-color: #FFFFFF;
		border: 5upx solid #000000;
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
</style>
