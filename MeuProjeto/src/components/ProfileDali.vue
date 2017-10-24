<template>
	<section id="perfilRomulo">
		<img class="fotoPerfil" src="https://avatars0.githubusercontent.com/daliannyvieira">
		<h1 class="tituloPerfil">Dalianny Vieira</h1>
		<p class="paragPerfil">Ela também é professora do Vai na Web.</p>
	</section>
</template>
<script>
	name: 'ProfileDali'
</script>
<style scoped>
	#perfilRomulo{
		background-color: tomato;
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
</style>r