const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((família, posicao) => {
        novaLi = novaLi + `   
         <li class="task ${família.concluida && "done"}">
        <img src="Componentes/checked.png" class="checked" onclick="concluirTarefa(${posicao})">
        <p class="text">${família.tarefa}</p>
        <img src="Componentes/trash.png" class="trash" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

}


function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}


button.addEventListener('click', adicionarNovaTarefa)