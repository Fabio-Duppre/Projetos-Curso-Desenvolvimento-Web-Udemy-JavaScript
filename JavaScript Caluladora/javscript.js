function calcular(tipo, valor){
    
    if(tipo === 'acao'){
        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value='';
        }

        if(valor === '-' || valor === '+' || valor === '/' || valor === '*'){
            //limpar o visor
            document.getElementById('resultado').value += valor;
        }

        if(valor === '='){            
            document.getElementById('resultado').value = eval(document.getElementById('resultado').value);
            
        }

    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor;

    }
}