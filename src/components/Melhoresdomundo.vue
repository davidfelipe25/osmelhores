<template>
<div class="div1">
	<header>
		<h1 class="title">Os Melhores</h1>
	</header>			
	<main>
	<section class="sec1">
		  <h2 class="messi">Messi</h2>
		  <img src="">
		  <button class="button1" v-on:click="addMessi()">+</button>
		  <p class="p1">{{Messi}}</p>
		  <button class="button1" v-on:click="removeMessi()">-</button>
		</section>
	<section class="sec2">
		<h2 class="cr7">Cr7</h2>
		<button class="button2" v-on:click="addCr7()">+</button>
 		<p class="p2">{{Cr7}}</p>
 		<button class="button2" v-on:click="removeCr7()">-</button>
	</section>
	<section>
		<button class="omelhor"  v-on:click="Melhor()">OMelhor</button>
		<p class="omelhor">{{ OMelhor }}</p>
	</section>
	</main>
</div>
</template>
<script>
export default {
  name: 'Melhoresdomundo',
  data () {
    return {
    	Messi:0,
    	Cr7:0,
    	OMelhor:''
    }
  },
  methods: {
  	addMessi(){
  		return this.Messi++
  	},
  	removeMessi(){
  		 return this.Messi--
  	},
  	addCr7(){
  		return this.Cr7++
  	},
  	removeCr7(){
  		return this.Cr7--
  	},
  	Melhor(){
  		if(this.Messi > this.Cr7){
  			return this.OMelhor='Messi OMelhor'			
  		}else{
  			return this.OMelhor='Cr7 OMelhor'
  		}
  	}
  }
}	
</script>
<style scoped>
	.div1{
		width: 100%;
		height: 100vh;
		margin: 0;
		background-image:url(http://www.cartorioportobelo.com.br/wp-content/uploads/2014/04/DICAS-1.jpg);
	   	background-repeat:repeat;
	   	background-size:cover;	
	}
	.title{
		color:yellow;
	}
	.button1{
		font-size:20px; 
		width:10%;
		height:40px;
	}
	.button2{
		font-size:20px; 
		width:10%; 
		height:40px;
	}
	.omelhor{
		margin:1%;
		padding:1%;
		font-size:30px;
		color:black;
	}
	.messi{
		color:yellow;
		font-size:30px;
	}
	.cr7{
		color: yellow;
		font-size: 30px;
		margin:1%;
	}
	.p1{
		font-size:20px;
		color:black;	 
	}
	.p2{
		font-size:20px;
		color:black; 
	
	}



	
</style>