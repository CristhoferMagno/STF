<template>
  <main>
    <index-nav></index-nav>
    <section class="container mt-5 py-5" v-if="true">
      <article class="recipe-content text-center">
        
      </article>
    </section>
    <index-footer></index-footer>
  </main>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  components: {
    'indexNav': Nav,
    'indexFooter': Footer
  },
  created(){
    /*this.$resource('teste.php')
            .get()
            .then(response => console.log(response));*/
  },
  mounted(){
      $(".recipe-content").append(this.tip.text);
  },
  data(){
    return {
      tip: {
        title: 'Dica do dia',
        text: `<section>
                    <div class="container">
                        <div class="row">
                            <div class="titulo-principal">
                                <img class="img-titulo-dicas img-responsive" src="static/imgs/titulo-dicas.png" />
                            </div>
                        </div> 

                        <div class="row">
                            <div class="div-img-principal">
                                <img class="img-principal img-responsive" src="static/imgs/receita1.jpg" />
                            </div>
                        </div>

                        <div class="row" >
                            <div class="div-titulo-imprimir">
                                <h3 class="titulo-dica">DICA DE BOLO</h3>
                                <a href="javascript:print();">
                                    <span class="imprimir">Imprimir
                                        <img class="img-imprimir" src="static/imgs/print-green.png" />
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="div-paragrafo">
                                <p class="paragrafo-receita"> 
                                    CALDA: <br/>
                                    1 garrafa de leite de coco 1 xícara (chá) de <br/>
                                    leite 3 colheres (sopa) de açúcar<br/>
                                    RECHEIO:<br/>
                                    1 lata de leite condensado 1 colher (sopa) de <br/>
                                    margarina 100 g de coco ralado
                                    COBERTURA:<br/>
                                    3 colheres (sopa) de margarina 8 colheres (sopa) <br/>
                                    de açúcar 2 colheres (sopa) de chocolate em pó <br/>
                                    2 xícaras (chá) de leite
                                    Modo de Preparo<br/>
                                    BOLO:<br/>
                                    Bata no liquidificador, os ovos, o óleo e o leite<br/>
                                    por 3 minutos e reserve Em um recipiente, misture <br/>
                                    o açúcar, o trigo, o fermento, o chocolate e o coco <br/>
                                    ralado a gosto Despeje sobre a mistura do liquidificador <br/>
                                    e mexa até que a massa fique consistente Despeje a massa <br/>
                                    em uma forma untada e leve ao forno médio, preaquecido, <br/>
                                    por 30 minutos ou até que ao enfiar um garfo, este saia <br/>
                                    limpo Deixe esfriar, corte ao meio e reserve<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style="margin-top:50px;">
                    <div class="container">

                        <div class="row">
				           <div class="titulo-principal2">
                                <img class="img-titulo-dicas img-responsive" src="static/imgs/titulo-mais-dicas.png" />
                            </div>
			            </div>
			
                        <div class="row">
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                <div class="div-img-dicas img-dicas1">
                                    <a href="/dicas2"><img class="img-responsive img-dicas" src="static/imgs/dicas-tele.png" /></a>
                                </div>
                            </div>
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                <div class="div-img-dicas img-dicas2">
                                    <a href="/dicas3"><img class="img-responsive img-dicas" src="static/imgs/dicas-tele.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              `}
    }
  }
}
</script>

<style >

/*========= section 1 ==========*/
body{
    background-image: url("../../../static/imgs/background.jpg");
}
.titulo-principal{
    width: 890px;
    height: 135px;
    margin:0px auto 30px;
}

.img-titulo-dicas{
    width: 100%;
    height: 100%;
}

.div-img-principal{
    width: 890px;
    margin: 1px auto;
}

.img-principal{
    width: 100%;
    height: 100%;
}

.div-titulo-imprimir{
    width: 890px;
    margin: 10px auto;
}

.titulo-dica{
    float: left;
    color: dimgray;
    font-size: 45px;
    font-weight: 900;
    letter-spacing: -3px;  
}

.imprimir{
    float: right;
    width:100px;
    height:40px;
}

.div-paragrafo{
    width:890px;
    text-align: left;
    margin: -10px auto;
}


/*div{ border: 1px solid red;}*/

/*============== section 2 ================*/

.titulo-principal2{
    width: 890px;
    height: 75px;
    margin:0px auto 30px;
}

.div-img-dicas{
    height: 80%;
    width: 80%;
    margin: 0px auto;
}

.img-dicas{    
    height: 100%;
    width: 100%;
}

.img-dicas1{
    float: right;
}

.img-dicas2{
    float: left;
}

/*======== media queries ==========*/

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .titulo-principal{
        height: 60px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 42px;
    }   

    .img-principal{
        width: 100%;
        height: 200px;
    }  

    .titulo-dica{
        font-size: 24px;
        letter-spacing: -1px;
    }

    .imprimir{
        width:80px;
        height: 20px;
        font-size: 13px;
        font-family: Apple Chancery, cursive;
        color: rgba(33, 114, 47, 0.747);
    }

    .img-imprimir{
        width:15px;
        height: 15px;
    }

    .paragrafo-receita{
        font-size: 14px;
    }

    .img-dicas1{
        float: initial;
    }

    .img-dicas2{
        float: initial;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .titulo-principal{
        height: 80px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 48px;
    }   

    .img-principal{
        width: 100%;
        height: 260px;
    }  

    .titulo-dica{
        font-size: 35px;
    }

    .imprimir{
        width:90px;
        height: 25px;
        font-size: 16px;
        font-family: Apple Chancery, cursive;
        color: rgba(33, 114, 47, 0.747);
    }

    .img-imprimir{
        width:16px;
        height: 16px;
    }

    .paragrafo-receita{
        font-size: 14px;
    }

    .img-dicas1{
        float: right;
    }

    .img-dicas2{
        float: left;
    }
} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .titulo-principal{
        height: 87px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 53px;
    }   

    .img-principal{
        width: 100%;
        height: 290px;
    }  

    .titulo-dica{
        font-size: 40px;
    }

    .imprimir{
        width:100px;
        height: 30px;
        font-size: 18px;
        font-family: Apple Chancery, cursive;
        color: rgba(33, 114, 47, 0.747);
    }

    .img-imprimir{
        width:18px;
        height: 18px;
    }

    .paragrafo-receita{
        font-size: 15px;
    }

    .img-dicas1{
        float: right;
    }

    .img-dicas2{
        float: left;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .titulo-principal{
        height: 110px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 95px;
    }   

    .img-principal{
        width: 100%;
        height: 350px;
    }  

    .titulo-dica{
        font-size: 42px;
    }

    .imprimir{
        width:110px;
        height: 40px;
        font-size: 20px;
        font-family: Apple Chancery, cursive;
        color: rgba(33, 114, 47, 0.747);
    }

    .img-imprimir{
        width:20px;
        height: 20px;
    }

    .paragrafo-receita{
        font-size: 15px;
    }

    .img-dicas1{
        float: right;
    }

    .img-dicas2{
        float: left;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .titulo-principal{
        height: 130px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 75px;
    }   

    .img-principal{
        width: 100%;
        height: 400px;
    }  

    .titulo-dica{
        font-size: 45px;
    }

    .imprimir{
        width:110px;
        height: 40px;
        font-size: 20px;
        font-family: Apple Chancery, cursive;
        color: rgba(33, 114, 47, 0.747);
    }

    .img-imprimir{
        width:20px;
        height: 20px;
    }

    .paragrafo-receita{
        font-size: 15px;
    }

    .img-dicas1{
        float: right;
    }

    .img-dicas2{
        float: left;
    }
}

</style>

