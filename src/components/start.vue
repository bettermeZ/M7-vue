<template>
	<div class="start">
		<img :src=src alt="" @click="start" />
	</div>
</template>

<script>
	export default{
		name:"start",
		data(){
			return {
    			src:"./src/assets/img/1.png"
			}
		},
		methods:{
			start(){
				this.$router.push("/active")
			}
		}
	}
</script>

<style>
	#app {
	  width: 100%;
	  height: 100%;
	}

	img{
		width: 100%;
		height: 100%;
	}
	.start{
		width: 100%;
		height: 100%;
	}
</style>