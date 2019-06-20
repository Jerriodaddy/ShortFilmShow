<template>  
    <view>
		<view class="video-name">
			<view class="section title">Viedo name</view>
			<input class="name" v-model="name" placeholder="please enter video name:" :value="inputClearValue" @input="clearInput" />
			<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
		</view>
		<view class="video-discription">
			<view class="section title">Video discription</view>
			<input class="discription" v-model="disription" placeholder=" please enter video discription" :value="inputClearValue" @input="clearInput" />
			<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
		</view>
		<view class="Choose-class">
		<view class="uni-title uni-common-pl">video classification</view>
			<view class="list-cell">
				<view class="list-cell-left">
					class
				</view>
				<view class="list-cell-picker">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="locate-directory">
			<view class="path">{{path}}</view>
			<button type="primary" plain="true" @tap='findlocation'>press me to locate</button>
		</view>
		<view>
			<button type="primary" @tap="uploadvideo">页upload</button>
		</view>
    </view>   
</template>  

<script>
    export default {  
        data(){
			return {
				array: ['Drama', 'Fantasy', 'Thriller', 'Comedy', 'Honor', 'Music'],
				index: 0,
			}
		},
		methods: {
			clearInput: function(event) {
				this.inputClearValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			 
			findlocation: function () {
				//var self = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						path = res.tempFilePath;
					}
				});
			},
			uploadvideo(){
				uni.uploadFile({
					url: '', //服务器地址
					filePath: path,
					name: this.name,
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					}
				});
			}
		}
    }
	

</script>  

<style>  
</style>  