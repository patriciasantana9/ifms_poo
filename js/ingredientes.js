//definir os argumentos e seus valores


function ingrediente (nome, valorAdicional, img) {
    return {
        nome: nome,
        valorAdicional: valorAdicional,
        img: img
    }
}

const ingredientes = [
    ingrediente('Abóbora', 0.5, 'abobora.png'),
    ingrediente('Abobrinha', 0.5, 'abobrinha.png'),
    ingrediente('Acelga', 0.5, 'acelga.png'),
    ingrediente('Agrião', 0.5, 'agriao.png'),
    ingrediente('Alface americana', 0.5, 'alface-americana.png'),
    ingrediente('Alface crespa', 0.5, 'alface-crespa.png'),
    ingrediente('bataba doce', 0.5, 'batata-doce.png'),
    ingrediente('batata palha', 0.5, 'batata-palha.png'),
    ingrediente('berinjela', 0.5, 'berinjela.png'),
    ingrediente('brocólis', 0.5, 'brocolis.png'),
    ingrediente('beterraba', 0.5, 'beterraba.png'),
    ingrediente('camarão', 0.5, 'camarao.png'),
    ingrediente('carne', 0.5, 'carne.png'),
    ingrediente('cebola-roxa', 0.5, 'cebola-roxa.png'),
    ingrediente('cebolinha', 0.5, 'cebolinha.png'),
    ingrediente('cenoura', 0.5, 'cenoura.png'),
    ingrediente('chuchu', 0.5, 'chuchu.png'),
    ingrediente('couve-flor', 0.5, 'couve-flor.png'),
    ingrediente('croutonn', 0.5, 'croutonn.png'),
    ingrediente('espinafre', 0.5, 'espinafre.png'),
    ingrediente('frango', 0.5, 'frango.png'),
    ingrediente('limão', 0.5, 'limao.png'),
    ingrediente('molho-branco', 0.5, 'molho-branco.png'),
    ingrediente('molho-mostarda', 0.5, 'molho-mostarda.png'),
    ingrediente('molho-pimenta', 0.5, 'molho-pimenta.png'),
    ingrediente('molho-vermelho', 0.5, 'molho-vermelho.png'),
    ingrediente('pepino', 0.5, 'pepino.png'),
    ingrediente('queijo-ralado', 0.5, 'queijo-ralado.png'),
    ingrediente('repolho', 0.5, 'repolho.png'),
    ingrediente('repolho-roxo', 0.5, 'repolho-roxo.png'),
    ingrediente('rúcula', 0.5, 'rucula.png'),
    ingrediente('salmão', 0.5, 'salmao.png'),
    ingrediente('salsinha', 0.5, 'salsinha.png'),
    ingrediente('tilápia', 0.5, 'tilapia.png'),
    ingrediente('tomate', 0.5, 'tomate.png'),
    ingrediente('tomate-cereja', 0.5, 'tomate-cereja.png')
]

export default ingredientes; //somente o vetor