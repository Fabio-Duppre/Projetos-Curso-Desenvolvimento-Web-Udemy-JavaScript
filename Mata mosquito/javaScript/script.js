//Obtendo as dimensoes da pagina para o palco do jogo
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var tempoMosquito = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?','');

if(nivel === 'normal'){
    var tempoMosquito = 1500;

}else if (nivel === 'dificil'){
    var tempoMosquito = 1000;

}else if (nivel === 'hardCore'){
    var tempoMosquito = 750;

}

function ajustaTamanhoPalcoJogo (){
    altura = window.innerHeight;
    largura = window.innerWidth;    
}

ajustaTamanhoPalcoJogo();

//Definindo o cronometro

var cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';

    }else{        
        document.getElementById('cronometro').innerHTML = tempo; 
    }       
}, 1000)

//Posicao aleatoria do mosquito

function posicaoRandomica(){

    //Remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        
        //Controle das vidas

        if(vidas >= 3){
            window.location.href = "fim_de_jogo.html"

        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
        
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = (posicaoX < 0) ? 0 : posicaoX;
    posicaoY = (posicaoY < 0) ? 0 : posicaoY;
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoMosquito() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id =  'mosquito';
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)
}


//Tamanho do mosquito

function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//Lado que o mosquito esta olhando

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'      
    }
}

//Tempo em que os mosquitos aparecem

criaMosquito = setInterval(function(){
    posicaoRandomica();
}, tempoMosquito)

