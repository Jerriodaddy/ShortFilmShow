<template>
	<view class="body-view">
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

		<!-- Code below are not use until now, but don't delete' -->
		<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
			<block v-for="(swiperDate,index1) in swiperDateList" :key="index1">
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(index1)">
						<block>
							<swiper class="swiper" :indicator-dots="true" :indicator-color="white" :indicator-active-color="black" :autoplay="true"
							 :interval="3000" :duration="500" :circular="true">
								<swiper-item>
									<navigator url="../videoplay1/videoplay1">
										<image src="../../static/assets/Andrea Facheris.jpg" class="slideimage" mode=""></image>
									</navigator>
								</swiper-item>
								<swiper-item>
									<navigator url="../videoplay2/videoplay2">
										<image src="../../static/assets/Sunnie Du.jpg" class="slideimage" mode=""></image>
									</navigator>
								</swiper-item>
								<swiper-item>
									<navigator url="../videoplay3/videoplay3">
										<image src="../../static/assets/Matt Bowron.jpg" class="slideimage" mode=""></image>
									</navigator>
								</swiper-item>
							</swiper>

							<view class="filmsarea">
								<view class="title">Default Column1</view>
								<scroll-view class="oneline" scroll-x="true" @scrolltolower="getMoreAllVideoList">
									<view class="filmsblock">
										<view class="film" v-for="item in videoList" v-bind:key="item.id">
											<view @click="navigatToVideoPlay(item)">
												<image class="filmpic" :src="serverUrl+item.coverPath" mode=""></image>
												<text class="filmname">{{item.videoName}}</text>
											</view>
										</view>
									</view>
								</scroll-view>
							</view>
						</block>
					</scroll-view>
				</swiper-item>
			</block>
		</swiper>
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
					name: 'Crime'
				}, {
					name: 'Drama'
				}, {
					name: 'Comedy'
				}, {
					name: 'Sci-Fi'
				}, {
					name: 'Animation'
				}, {
					name: 'Action'
				}],

				swiperDateList: [
					[],
					[],
					[],
					[],
					[],
					[]
				],
				// 								indicatorDots: true,
				// 								autoplay: true,
				// 								interval: 5000,
				// 								duration: 500,
				// 								circular: true

				// 用于分页的属性
				totalPage: 1,
				page: 1,
				videoList: [],

				screenWidth: 350,
				serverUrl: "",

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

		onLoad() {
			var userInfo = this.getGlobalUserInfo();
			if (userInfo == null || userInfo == undefined || userInfo == "") {
				uni.redirectTo({
					url: '../login/login',
				});
				return;
			}
			
			uni.setNavigationBarTitle({
				title: 'TheShortFilmShow'
			});

			var screenWidth = uni.getSystemInfoSync().screenWidth;
			this.screenWidth = screenWidth;

			// 获取当前页面
			var page = this.page;
			this.getAllVideoList(page);
			
		},
		
		onShow() {
			// 记录用户跳转页面行为
			this.goToPageRec();
		},
		
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
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
			},

			getAllVideoList: function(page) {
				var that = this;
				var serverUrl = that.$serverUrl;
				uni.showLoading({
					title: 'Loading...',
				});
				console.log("当前请求页：" + page);
				uni.request({
					url: serverUrl + '/video/showAll',
					data: {
						page: page,
						pageSize: 4,
					},
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					
					success: (res) => {
						uni.hideLoading();
						console.log(res.data.data);
						// 如果page 是第一页 清空videoList
						if (page == 1) {
							that.videoList = [];
						}

						var videoList = that.videoList;
						var newVideoList = res.data.data.rows;

						that.videoList = videoList.concat(newVideoList);
						that.page = page;
						that.totalPage = res.data.data.total;
						that.serverUrl = serverUrl;
					}
				});
			},

			getMoreAllVideoList: function() {
				var currentPage = this.page;
				var totalPage = this.totalPage;

				if (currentPage != totalPage) {
					var page = currentPage + 1;
					this.getAllVideoList(page);
					this.page = page;
				}

			},

			navigatToVideoPlay: function(film) {
				// console.log(film);
				film = JSON.stringify(film)
				uni.navigateTo({
					url: '../videoplay/videoplay?film=' + film
				});
			}

		}

	}
</script>

<style>
	page {
		width: 100%;
		height: 200%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
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
		background-color: #000000;
	}

	.swiper-one-list {
		height: 100%;
		width: 100%;
	}

	/* 	.swiper-one-list .swiper-list-entity {
		width: 100%;
		height: 112upx;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	} */

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

	.filmsblock {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.filmname {
		color: white;
		font-size: small;
	}

	.film {
		display: flex;
		flex-direction: column;
		/* background: #1AAD19; */
	}

	.filmpic {
		width: 245.9upx;
		height: 330upx;
	}


</style>
