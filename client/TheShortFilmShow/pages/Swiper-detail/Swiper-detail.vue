<template>
	<view class="container">
		<view class="background">
			<view class="fud">
				<text class="notice">Function under development</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}

	.container {
		height: 100%;
		width: 100%;
	}

	.background {
		background-color: #888888;
		height: 100%;
		width: 100%;
	}

	.fud {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	.notice {
		color: white;
		font-weight: 200;
		font-size: large;
	}
</style>
