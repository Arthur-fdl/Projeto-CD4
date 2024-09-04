const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((família, posicao) => {
        novaLi = novaLi + `   
         <li class="task">
        <img src="Componentes/checked.png" class="checked">
        <p class="text">${família}</p>
        <img src="Componentes/trash.png" class="trash" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

}

function concluirTarefa (){
    
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}


button.addEventListener('click', adicionarNovaTarefa)