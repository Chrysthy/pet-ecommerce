/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar os itens baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar os itens
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada item, verificar se ela deve ser mostrada ou escondida 
*/

const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {

    const categoriaSelecionada = document.querySelector('#categoria').value;

    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const itens = document.querySelectorAll('.item');

    itens.forEach(function (item) {

        const categoriaItem = item.dataset.categoria;
        const precoItem = item.dataset.preco;

        let mostrarItem = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const itemNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaItem.toLowerCase();

        if (temFiltroDeCategoria && itemNaoBateComFiltroDeCategoria) {
            mostrarItem = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const itemNaoBateComFiltroDePrecoMaximo = parseFloat(precoItem) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && itemNaoBateComFiltroDePrecoMaximo) {
            mostrarItem = false;
        };

        if (mostrarItem) {
            item.classList.add('mostrar');
            item.classList.remove('esconder');

        } else {
            item.classList.remove('mostrar');
            item.classList.add('esconder');
        }

    });
});