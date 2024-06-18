const inputInteresses = document.querySelector('input')
const buttonAdicionar = document.querySelector('button')
const listaInteresses = document.querySelector('.list')


const interesses = []

function adicionar(){
    //console.log('funcionou o adicionar')
    const valorInput = inputInteresses.value
    console.log(valorInput)
    if (valorInput) {
        const itemLista = document.createElement('li')
        itemLista.innerText = valorInput
        listaInteresses.appendChild(itemLista)

        const checkElemento = document.createElement('input')
        checkElemento.type = "checkbox"
        itemLista.prepend(checkElemento)
            
        interesses.push(valorInput) 

        interesses.push({
        id: Date.now(),       
        name: valorInput})

        inputInteresses.value = ""

        } else {
        alert('Informe um valor')
        }
}


function limpar(){
    console.log('funcionou o limpar')
}