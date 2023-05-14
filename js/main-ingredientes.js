import modificador from "./modificador.js";
import ingredientes from  "./ingredientes.js";
//import saladas from  "./saladas.js";

//impressão dos valores dos argumentos 

//exibir ingredientes
let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCap = modificador.capitalizarNovo(ingredientes, 'nome');

let containerIngredientes = document.querySelector('#container-ingredientes');
for (let ingrediente of ingredientesCap) {
    let textoHTML = `
    <div class="ingrediente">
        <img src="/css/img/${ingrediente.img}">     
        <p class="nome-ingrediente">${ingrediente.nome}</p>
    </div>
    `;
    containerIngredientes.innerHTML += textoHTML;       //+= pra receber TODOS os ingredientes da lista
}

//exibir saladas
/*
let saladasCap = modificador.caixaAlta(saladas, 'ingredientes');

let containerSaladas = document.getElementById('container-saladas');
for (let salada of saladasCap) {
    let saladaHTML = `
    <div class="salada">
        <img src="img/${salada.img}">
        <p class="ingrediente-salada">${salada.ingredientes}</p>
    </div>
    `;
    containerSaladas.innerHTML += saladaHTML;
}
*/