const inProduto = document.getElementById('inProduto');
const inPreco = document.getElementById('inPreco');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpar = document.getElementById('btnLimpar');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', (e) => {
    const produto = inProduto.value;
    const preco = Number(inPreco.value);

    const promocao = preco * 3;
    const produtoPromocao = preco * 0.5;
    const precoComDesconto = promocao - produtoPromocao;

    if (!produto || !preco) {
        alert('Preencha os campos corretamente.');
        return
    } else if (preco < 0) {
        resultado.innerHTML = `<h3 class="text-3xl text-red-800">Preço inexistente!</h3>`
        return
    }

    resultado.innerHTML = `
    <p class="text-2xl text-red-700">${produto} - Promoção Leve 3 por ${formataMoeda(precoComDesconto)}</p>
    <p class="text-2xl text-blue-700">O 3º produto custa apenas ${formataMoeda(preco * 0.5)}</p>
    `
    inProduto.focus();
    inProduto.value = '';
    inPreco.value = '';

    e.preventDefault();
})

const formataMoeda = (valor) => 
    valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

btnLimpar.addEventListener('click', (e) => {
    inProduto.value = '';
    inPreco.value = '';
    resultado.innerHTML = '';
})