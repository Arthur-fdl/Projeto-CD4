const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((família) => {
        novaLi = novaLi + `   
         <li class="task">
        <img src="Componentes/checked.png" class="checked">
        <p class="text">${família}</p>
        <img src="Componentes/trash.png" class="trash">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

}


button.addEventListener('click', adicionarNovaTarefa)