[M2S05] Ex 1 - Mini projeto - Meus interesses
O projeto:
Neste mini projeto, iremos criar uma página que possamos adicionar nossos interesses e hobbies, sendo possível armazenar os dados para ter acesso a qualquer momento. Ele consistirá em escrever e adicionar o interesse. Nesse projeto, teremos uma seção de notícias de destaque do dia, parecido como um “card” de anúncio patrocinado.

Como queremos reforçar o que aprendemos até agora, vou disponibilizar o HTML e CSS com a estrutura montada. No entanto, sinta-se à vontade para criar o seu próprio (sinta-se desafiado 😁). O seu desafio será implementar toda a rotina necessária para que este projeto fique funcional.

1º Exercício
Para este primeiro exercício, crie uma função que recupere todos os interesses adicionados no localStorage e os inclua na lista de interesses (<ul>), utilizando o elemento <li>, considere o nome chave do localstorage como meus-interesses.

Dica: Para limpar dentro de um elemento, utilize o innerHTML igual um texto vazio ““.

Link do protótipo: M1S09 - Protótipo

Passo a passo
Crie uma função para acoplar esta lógica
Certifique que a lista esteja limpa para adicionar os itens (Verifique a dica em caso de dúvida)
Recupere os dados do localstorage
Verifique se existe informação inicial no localstorage e converta o JSON obtido
Inclua cada item dentro da <ul> utilizando o <li>

[M2S05] Ex 2 - Mini projeto - Adicionando interesse a lista
Adicione um evento de clique ao botão "Adicionar" e recupere o valor digitado no input. Em seguida, recupere a lista existente e adicione o novo valor a ela. Lembre-se de persistir os dados atualizados no localStorage.
Passo a passo
Adicione um evento de clique ao botão
Recupere o valor digitado no input
Recupere a lista do localstorage e adicione esse novo item a ela.
[BONUS] - Ao finalizar a adição limpe os dados do input

[M2S05] Ex 3 - Mini projeto - Atualização da lista a cada segundo.
Nesta tarefa, vamos garantir que nossos dados estejam sempre atualizados. Para isso, utilize o setInterval para recuperar a lista e atualizá-la a cada 1 segundo. Basta usar a função do primeiro exercício.

Certifique-se de que a função criada está "limpando" os dados. Caso contrário, antes de adicionar os interesses, inclua um código para limpar as informações. Você pode fazer isso pegando o elemento da lista e definindo o innerHTML como vazio, ou seja, elemento.innerHTML = "" .‌

Observação: Lembre-se de que o segundo parâmetro do setInterval, o atraso, é definido em milissegundos.

[M2S05] Ex 4 - Mini projeto - Limpar lista de interesses

Implemente a função que limpa toda a lista de interesses quando o botão "Limpar Lista" for clicado. Utilize a função localstorage.removeItem([nome-da-chave]) e não se esqueça de atualizar a lista no DOM para refletir essa mudança.

[M2S05] Ex 5 - Mini projeto - Buscando notícias para seção de notícias do dia
Faça uma requisição para a API do IBGE de notícias, utilizando o método fetch(). Após recuperar os dados, converta o resultado para JSON e obtenha o primeiro item da lista na propriedade items. A URL que você deve utilizar é: servicodados.ibge.gov.br/api/v3/noticias/?tipo=release.

Estrutura esperada pela API:

image.png

Não se preocupe com as demais informações. Acesse apenas os itens e obtenha a primeira informação contida no array. A informação relevante é o título dessa notícia.

Checklist
Faça uma requisição utilizando o fetch()
Utilize a função de callback para converter o json
Ao receber a resposta da requisição, pegue o **primeiro elemento** da propriedade "items".

[M2S05] Ex 6 - Mini projeto - Insira a notícia de destaque em sua seção
Após recuperar a primeira notícia do dia da lista, adicione o título da notícia na sua seção. Verifique a classe do elemento, recupere e insira a informação dentro do mesmo. Exemplo de acesso à informação: reposta.items[0].titulo

Caso você tenha optado por utilizar o template, a classe do elemento se chama .title-news-today