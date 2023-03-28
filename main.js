import modificador from "./modificador.js";
import ingredientes from  "./ingredientes.js";
//import saladas from  "./saladas.js";

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
//let ingredientesCap = modificador.ordenar(ingredientesOrdenados);
let containerIngredientes = document.querySelector('#container-ingredientes');

for (let ingrediente of ingredientesOrdenados) {
    let textoHTML = `
    <div class="ingrediente">
        <img src="img/${ingrediente.img}">     
        <p class="nome-ingrediente">${ingrediente.nome}</p>
    </div>
    `;

    containerIngredientes.innerHTML += textoHTML;       //+= pra receber TODOS os ingredientes da lista
}