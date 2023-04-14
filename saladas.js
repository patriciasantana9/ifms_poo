
let saladas = [];

function saladas(nome, ingredientes, valor, img){
    return {
        nome: nome,
        ingredientes: ingredientes,
        valor: valor,
        img: img
    }
}
const salada1 = saladas('Salada 1', 'alface crespa, cebola roxa, pepino, tomate', 5, 'prato1.png');
const salada2 = saladas('Salada 2', 'alface crespa, croutonn, pepino, tomate', 6, 'prato2.png');
const salada3 = saladas('Salada 3', 'Cebola roxa, rúcula, tomate cereja', 5, 'prato3.png');
const salada4 = saladas('Salada 4', 'Cebola, tomate, pepino, queijo', 5, 'prato4.png');
const salada5 = saladas('Salada 5', 'Frango, cebola roxa, agrião, castanhas, tomate cereja', 7, 'prato5.png');
const salada6 = saladas('Salada 6', 'tomate, cebolinha, pepino, acelga, abobrinha', 5, 'prato6.png');
const salada7 = saladas('Salada 7', 'frango, croutonn, alface crespa, acelga, brócolis', 7, 'prato7.png');
console.log(salada1);

//repetir para todas as saladas
//considerar que os objetos devem ser repetidos no arquivo .html
//considerar que aqui os objetos estão dentro de um array que é exportado

// export default saladas;