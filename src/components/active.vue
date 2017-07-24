<template>
	<div class="active">
		<img :src=src  @click="change">
		<div class="mark" v-if="show">
			<img :src=mark alt="" />
		</div>
	</div>
</template>

<script>
	export default{
		name:"active",
		data(){
			return {
				data:[
	    			"./src/assets/img/2.png",
	    			"./src/assets/img/3.png",
	    			"./src/assets/img/4.png",
	    			"./src/assets/img/5.png",
	    			"./src/assets/img/6.png",
	    			"./src/assets/img/7.png",
	    			"./src/assets/img/8.png",
	    			"./src/assets/img/9.png",
	    			"./src/assets/img/11.png",
	    			"./src/assets/img/12.png",
	    			"./src/assets/img/13.png",
	    			"./src/assets/img/14.png",
	    			"./src/assets/img/15.png"
    			],
    			count:0,
    			src:"./src/assets/img/2.png",
    			mark:"./src/assets/img/mark.png",
    			show:false
			}
		},
		methods:{
			change(){
				this.src = this.data[this.count]
				if(this.count>11){
					this.show=true
				}else{
					this.count++
				}
			}
		}
	}
</script>

<style>
	#app{
		width: 100%;
		height: 100%;
	}
	.active{
		width: 100%;
		height: 100%;
	}
	img{
			width: 100%;
			height: 100%;
	}
	
	.mark{
		z-index: 100;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		animation: show 0.5s ease;
	}
	.mark img{
		width: 90%;
		height: 90%;
		margin-top: 9%;
		margin-left: 5%;
	}
	@keyframes show{
		from{
			opacity: 0;
		}
		to{
			opacity: 0.6;
		}
	}
</style>