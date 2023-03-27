function fnCapitalizarNovo(colecao, atributo) {     //coleção é o arquivo em que está o atributo; atributo é o atributo do obj.
    if(typeof colecao[0] == 'object') {
        let resultado = colecao.map(function(obj){  //irá percorrer todas as posições do array ingredientes e fazer 
            let letraInicial = obj[atributo].charAt(0).toUpperCase();
            let restoTexto = obj[atributo].slice(1);  //cortar a partir do segundo caractere (incluindo ele mesmo)

            obj[atributo] = letraInicial + restoTexto;  //"atributo" já é o nome dos ingredientes

            return obj;
        });

        console.log(resultado);
    }
    /*else {
        if (typeof colecao[0] == 'string) {
            let resultado = colecao.map(function(obj){
                let 
            })



        }
    }*/
}
//este precisa ficar se a captalização já é feita no de cima?
function fnCapitalizar(vetor) {
    let modificado = [];

    let letraInicial = vetor[i].charAt(0).toUpperCase();
    let restoTexto = vetor[i].slice(1);  //cortar a partir do segundo caractere (incluindo ele mesmo)
    let resultado = letraInicial + restoTexto;
    
    for (let i = 0; i < vetor.length; i++) {

        modificado[i] = resultado
    }
    return modificado;
}

function fnOrdenar(vetor) {
    return vetor.sort(function(a,b) {              //função dentro do sort (quem são a e b?)
        return a.localeCompare(b);                                //fará a ordenação de acordo com os caracteres locais (os nossos incluem letras com acentos, isso será levado em consideração)
    });
}

export default {    //objeto que retornará as funções que ele liga ao outro arquivo .js
    capitalizar: fnCapitalizar,         //funcionalidade e a função
    capitalizarNovo: fnCapitalizarNovo,         //funcionalidade e a função
    ordenar: fnOrdenar  
};