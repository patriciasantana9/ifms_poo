//definir os argumentos e seus valores

function salada(nome, ingredientes, valor, img) {
    return {
        nome: nome,
        ingredientes: ingredientes,
        valor: valor,
        img: img
    }
}

const saladas = [
    salada('Salada 1', 'alface crespa, cebola roxa, pepino, tomate', 5, 'prato1.png'),
    salada('Salada 2', 'Alface crespa, croutonn, pepino, tomate', 6, 'prato2.png'),
    salada('Salada 3', 'Cebola roxa, rúcula, tomate cereja', 5, 'prato3.png'),
    salada('Salada 4', 'Cebola, tomate, pepino, queijo', 5, 'prato4.png'),
    salada('Salada 5', 'Frango, cebola roxa, agrião, castanhas, tomate cereja', 7, 'prato5.png'),
    salada('Salada 6', 'tomate, cebolinha, pepino, acelga, abobrinha', 5, 'prato6.png'),
    salada('Salada 7', 'frango, croutonn, alface crespa, acelga, brócolis', 7, 'prato7.png')
]
// console.log(saladas)
export default saladas;