import modificador from "./modificador.js";
import saladas from  "./saladas.js";

//impressão dos valores dos argumentos 

//exibir saladas
let saladasCap = modificador.capitalizarNovo(saladas, 'ingredientes');

let containerSaladas = document.getElementById('container-saladas');
for (let salada of saladasCap) {
    let saladaHTML = `
    <div class="salada">
        <img src="/css/img/${salada.img}">
        <p class="ingrediente-salada">${salada.ingredientes}</p>
    </div>
    `;
    containerSaladas.innerHTML += saladaHTML;
}