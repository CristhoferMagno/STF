<template>
  <main >
    <index-nav></index-nav>
    <section class="container py-5  " v-if="true">
      <article class="recipe-content text-left pt-5">
        
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
        text:  `
            
            <section>
                    <div class="container">
                        <div class="row">
                            <div class="titulo-principal">
                                <img class="img-titulo-dicas img-responsive" src="static/imgs/titulo-receitas.png" />
                            </div>
                        </div> 

                        <div class="row">
                            <div class="div-img-principal">
                                <img class="img-principal img-responsive" src="static/imgs/receita3.jpg" />
                            </div>
                        </div>

                        <div class="row" >
                            <div class="div-titulo-imprimir">
                                <h3 class="titulo-dica">PIZZA LOW CARB</h3>
                                <a href="javascript:print();">
                                    <span class="imprimir" >Imprimir 
                                        <img class="img-imprimir" src="static/imgs/print-orange.png" />
                                    </span>
                                </a>
                           </div>
                        </div>

                        <div class="row" ">
                            
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                    <div class="div-ingredientes">
                                        <img class="img-icon" src="static/imgs/info-point-arrow-img2.png"/>
                                        <span class="topicos">ingredientes</span>

                                        <p class="paragrafo-receita"> 
                                            1 xícara de frango desfiado bem compactada e cheia <br/>
                                            50 gramas de queijo ralado (usei minas padrão mas um muçarela ou prato é ok também) <br/>
                                            3 ovos <br/>
                                            2 colheres de sopa bem cheias de azeite <br/>
                                            1 colher de sopa de fermento químico em pó <br/>
                                            Orégano e pimenta <br/>
                                            RECHEIO <br/>
                                            molho de tomate <br/>
                                            queijo, tomate, cebola e pimentão <br/>
                                        </p>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="div-como-fazer" >
                                        <img class="img-icon" src="static/imgs/info-point-arrow-img2.png"> 
                                        <span class="topicos">Como fazer</span>
                                        
                                            <p class="paragrafo-receita"> 
                                                Coloque todos os ingredientes da massa <br/>
                                                no processador (ou liquidificador) e <br/>
                                                bata até ficar homogêneo. <br/>
                                                2. Despeje a massa em uma forma de <br/>
                                                pizza (usei uma com teflon) untada <br/>
                                                com azeite. <br/>
                                                3. Abra a massa com a ajuda de uma <br/>
                                                espátula. Nessa hora fica parecendo <br/>
                                                que não vai dar <br/>
                                                certo, mas siga em frente.<br/>
                                                4. Leve ao forno pré aquecido por 10 <br/>
                                                minutos e depois de 10 minutos, <br/>
                                                verifique se já está <br/>
                                                douradinha por baixo. A minha assei <br/>
                                                mais ou menos a 180 graus. <br/>
                                                5. Quando dourar por baixo use uma <br/>
                                                espátula para virar, asse por mais 10 <br/>
                                                minutos ou até que <br/>
                                                os dois lados estejam douradinhos. <br/>
                                                6. Retire do forno, acrescente os recheios <br/>
                                                que você escolher e volte ao forno por mais dez <br/>
                                                minutos.
                                            </p>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </section>

                <section style="margin-top: 40px;">
                    <div class="container">

                        <div class="row">
				           <div class="titulo-principal2">
                                <img class="img-titulo-dicas img-responsive" src="static/imgs/titulo-mais-receitas.png" />
                            </div>
			            </div>
			
                        <div class="row">
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                <div class="div-img-dicas img-dicas1">
                                    <a href="/receitas"><img class="img-responsive img-dicas" src="static/imgs/receitas-do-dia.png" /></a>
                                </div>
                            </div>
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                <div class="div-img-dicas img-dicas2">
                                    <a href="/receitas2"><img class="img-responsive img-dicas" src="static/imgs/receitas-do-dia.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                `
      }
    }
  }
}
</script>

<style>

/*========= section 1 ==========*/
body{
    background-image: url("../../../static/imgs/background.jpg");
}
.titulo-principal{
    width: 890px;
    height: 150px;
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
    color: rgba(133, 132, 132, 0.884);
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -3px;  
}

.imprimir{
    float: right;
    width:100px;
    height:40px;
}

.img-icon{
    width: 40px;
}

.topicos{
    font-size: 26px;
    font-family: Apple Chancery, cursive;
    color: rgb(255, 136, 0);
}

.div-ingredientes{
    float: left;
    margin-left: 92px;
}

.div-como-fazer{
    float: left;
    
}

/*div{ border: 1px solid red;}*/
/*============== section 2 ================*/

.titulo-principal2{
    width: 890px;
    height: 90px;
    margin:0px auto 0px;
}

.div-img-dicas{
    height: 80%;
    width: 80%;
    margin: 30px auto;
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .titulo-principal{
        height: 60px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 55px;
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
        width:90px;
        height: 25px;
        font-size: 16px;
        font-family: Apple Chancery, cursive;
        color: rgb(255, 136, 0);
    }

    .img-imprimir{
        width:16px;
        height: 16px;
    }

    .paragrafo-receita{
        font-size: 14px;
    }

    .div-ingredientes{
        
        margin-left: -19px;
    }

    .div-como-fazer{
       margin-left: -19px;
    
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
        font-size: 30px;
        letter-spacing: -1px;
    }

    .imprimir{
        width:90px;
        height: 25px;
        font-size: 16px;
        font-family: Apple Chancery, cursive;
        color: rgb(255, 136, 0);
    }

    .img-imprimir{
        width:16px;
        height: 16px;
    }

    .paragrafo-receita{
        font-size: 14px;
    }

    .div-ingredientes{
        margin-left: -19px;
    }

    .div-como-fazer{
       margin-left: -19px;
    }
} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .titulo-principal{
        height: 87px;
        margin:0px auto 30px;
    }

    .titulo-principal2{
        height: 60px;
    } 
    
    .img-principal{
        width: 100%;
        height: 290px;
    }

    .titulo-dica{
        font-size: 35px;
        letter-spacing: -1px;
    }

    .imprimir{
        width:100px;
        height: 30px;
        font-size: 18px;
        font-family: Apple Chancery, cursive;
        color: rgb(255, 136, 0);
    }

    .img-imprimir{
        width:18px;
        height: 18px;
    }

    .paragrafo-receita{
        font-size: 14px;
    }

    .div-ingredientes{
        margin-left: -19px;
    }

    .div-como-fazer{
       margin-left: -19px;
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
        font-size: 38px;
        letter-spacing: -1px;
    }

    .imprimir{
        width:110px;
        height: 40px;
        font-size: 20px;
        font-family: Apple Chancery, cursive;
        color: rgb(255, 136, 0);
    }

    .img-imprimir{
        width:20px;
        height: 20px;
    }

    .div-ingredientes{
        margin: initial;
        
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .titulo-principal{
        height: 130px;
        margin:0px auto 30px;
    }

    .img-principal{
        width: 100%;
        height: 400px;
    }  
    
    .titulo-dica{
        font-size: 40px;
    }

    .imprimir{
        width:110px;
        height: 40px;
        font-size: 20px;
        font-family: Apple Chancery, cursive;
        color: rgb(255, 136, 0);
    }

    .img-imprimir{
        width:20px;
        height: 20px;
    }

    .div-ingredientes{
        float: left;
        margin-left: 92px;
    }

    .paragrafo-receita{
        font-size: 15px;
    }

    /*============== section 2 ================*/

    .img-dicas1{
        float: right;
    }

    .img-dicas2{
        float: left;
    }
}

</style>