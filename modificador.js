//capitalizar títulos?
function fnCapitalizarNovo(colecao, atributo) {     //coleção é o arquivo em que está o atributo; atributo é o atributo do obj.
    if (colecao.length > 0) {
        if(typeof colecao[0] == 'object') {
            colecao.map(item => item[atributo] = item[atributo].charAt(0).toUpperCase() + item[atributo].slice(1));
        } else {
            colecao.map(item => item = item.charAt(0).toUpperCase() + item.slice(1));
        }
        return colecao;
    }
}

//capitalizar títulos?
function fnCaixaAlta(colecao, atributo) {
    if (colecao.length > 0) {
        if (typeof colecao[0] == 'object' && atributo) {
            colecao.map(item => item[atributo] = item[atributo].toUpperCase());
        } else {
            colecao.map(item => item = item.toUpperCase());
        }
        return colecao;
    }
}
//ingredientes em ordem alfabética
function fnOrdenar(colecao, atributo) {
    return atributo ?
        colecao.sort(function(a, b){
            return typeof a[atributo] == 'number' ?
                a[atributo] - b[atributo] : a[atributo].localeCompare(b[atributo])
        }):
        colecao.sort(function(a, b){
            return typeof a == 'number' ?
                a - b:
                a.localeCompare(b)
        });
}

export default {    //objeto que retornará as funções que ele liga ao outro arquivo .js
    capitalizarNovo: fnCapitalizarNovo,         //funcionalidade e a função
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta  
};