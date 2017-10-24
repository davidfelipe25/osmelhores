<template>
  <div id="compMessi">
	<header class="he2">
	 <img src="http://s2.glbimg.com/Q_H6ZUwAKFTxZuTLTqsWKjSUr9Y=/620x470/smart/s.glbimg.com/es/ge/f/original/2016/01/12/bbb.jpg" class="Foto">
	</header>
    <section class="Sec1">
     <h1 class="Messi">Messi</h1>	
     <p>Na opinião da grande maioria dos especialistas do esporte, sua qualidade técnica, jogadas, velocidade, habilidade na perna esquerda, trabalho de equipe e extraordinária vocação para o gol, o tornam o melhor futebolista do mundo atualmente. Os europeus desde já o comparam aos grandes nomes da história do futebol, como Pelé, Tostão, Garrincha, Di Stéfano, Maradona, Puskás ou Cruijff, o colocando como 2º maior jogador de todos os tempos atrás somente de Pelé. Seus feitos com a camisa do Barcelona o levaram a arrebatar por cinco vezes (2009, 2010, 2011, 2012 e 2015) o Ballon d'Or, oferecido pela revista francesa especializada France Football, a mais tradicional premiação do futebol mundial, que a partir de 2011 passou a denominar-se Bola de Ouro da FIFA. Em março de 2012, com apenas 24 anos, Messi se tornaria o maior artilheiro da história do Barcelona, superando o ídolo do clube catalão nas décadas de 1940 e 1950, César Rodríguez.[8] Ao marcar o seu 91º[9] gol em dezembro de 2012, em partida contra o Valladolid (Barcelona 3-1), Messi superou o recorde de gols num só ano no futebol mundial, considerando apenas partidas oficiais disputadas com a camisa do Barcelona e Seleção Argentina.[10][11]</p>
   </section>
  </div>	
</template>
<script>
	export default {
  name: 'Messi',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
	#compMessi{
		width: 100%;
		height: 100vh;
		margin: 0;
		background-image:url(http://res.cloudinary.com/db79cecgq/image/upload/c_crop,h_720,w_1440,y_91/c_fill,h_800,w_1600/v1412616410/As_estrelas-2.jpg);
	   	background-repeat:repeat;
	   	background-size:cover;	
	}
   .Sec1{
   	color:yellow;
    
   }
   .Messi{
   	color:#fff;

   }
   .Foto{
   	border-radius:30%;
    height:15%;
    width:30%;    	
   }
   	
   
</style>