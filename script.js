// Função para adicionar os interesses a lista
function adicionar() {
  console.log ("funcionou o adicionar");
  const input = document.getElementById("inputInteresse");
  const novaTarefa = input.value.trim();

  if (novaTarefa) {
    const lista = document.getElementById("resultado");
    const item = document.createElement("li");
    item.innerText = novaTarefa;
    lista.appendChild(item);

    const meusInteresses = JSON.parse(localStorage.getItem("meusInteresses")) || [];
    meusInteresses.push(novaTarefa);
    localStorage.setItem("meusInteresses", JSON.stringify(meusInteresses));

    input.value = "";

} else {

    alert("Por favor, digite uma tarefa!");

  }
}

//Evento para adicionar o interesse a lista, através do enter do teclado
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('inputInteresse');
  const button = document.getElementById('adicionarTarefa');

  input.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault();  // Impede o comportamento padrão do Enter
          button.click();          // Aciona a função adicionar
      }
  });
});




// Função para carregar tarefas do localStorage
function carregarTarefas() {
    const atualizado = document.getElementById("resultado");
    atualizado.innerHTML = ""; // Limpar lista
  const meusInteresses = JSON.parse(localStorage.getItem("meusInteresses")) || [];
  const lista = document.getElementById("resultado");
  meusInteresses.forEach((tarefa) => {
    const item = document.createElement("li");
    item.innerText = tarefa;
    lista.appendChild(item);
  });
}


// Carregar as tarefas quando a página for carregada
window.onload = carregarTarefas;


//Intervalo de atualização
setInterval(carregarTarefas, 1000);


//Função para limpar a lista e do local Storage
function limpar() {
  console.log("funcionou o limpar");
  localStorage.removeItem('meusInteresses');
  const lista = document.getElementById('resultado');
  lista.innerHTML = "";
}


//Função para buscar o título das notícias na API no IBGE
async function buscarNoticiaIBGE() {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?destaque=0');
        const dados = await response.json();
        if (dados.items && dados.items.length > 0) {
            const noticia = dados.items[0];
            document.getElementById('noticia').innerText = `Notícia: ${noticia.titulo}`;
        } else {
            document.getElementById('noticia').innerText = 'Nenhuma notícia encontrada.';
        }
    } catch (error) {
        console.error('Erro ao buscar notícia do IBGE:', error);
        document.getElementById('noticia').innerText = 'Erro ao buscar notícia.';
    }
}



// Buscar notícia ao carregar a página
buscarNoticiaIBGE()