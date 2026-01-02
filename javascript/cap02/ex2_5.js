const medicamento = document.getElementById('inMedicamento');
const preco = document.getElementById('inPreco');
const exibirPromocao = document.getElementById('btnExibirPromocao');
const limparCampos = document.getElementById('btnLimpar');
const resultado = document.getElementById('resultado');

exibirPromocao.addEventListener('click', (e) => {
    const inMedicamento = medicamento.value;
    const inPreco = Number(preco.value);
    const promocao = (inPreco * 2);

    if (!inMedicamento || inPreco == '') {
        alert('Preencha os campos corretamente.');
        return
    }

    resultado.innerHTML = `
    <div class="text-2xl text-center m-auto glass-effect w-full max-w-4xl p-8 shadow-2xl text-1xl gap-4 bg-sky-100">
        <h3 class="font-bold text-red-700">Promoção de ${inMedicamento}</h3>
        <p class="font-bold">Leve 2 por apenas ${formataMoeda(Math.floor(promocao))}</p>
    </div>
    `

    medicamento.focus();
    medicamento.value = '';
    preco.value = '';

    e.preventDefault();
})

const formataMoeda = (valor) => 
    valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

limparCampos.addEventListener('click', (e) => {
    medicamento.value = '';
    preco.value = '';
    resultado.innerHTML = '';
})