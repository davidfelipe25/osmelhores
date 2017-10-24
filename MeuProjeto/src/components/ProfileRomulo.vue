<template>
	<section id="perfilRomulo">
		<img class="fotoPerfil" src="http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/16464490_1058064647670397_4633625325555679232_n.jpg?ig_cache_key=MTQ1MDEyNDA0NDQ2NDk5MDM0MQ%3D%3D.2" alt="Foto Romulo Tunala">
		<h1 class="tituloPerfil">Rômulo Tunala</h1>
		<p class="paragPerfil">Eu sou o professor do Vai an Web.</p>
	</section>
</template>
<script>
	name: 'ProfileRomulo'
</script>
<style scoped>
	#perfilRomulo{
		background-color: #00F;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
	.fotoPerfil{
		width: 30%;
		border-radius: 50%;
	}
	.tituloPerfil{
		color: #FFF;
	}
	.paragPerfil{
		color: #FFF;	
	}
</style>
