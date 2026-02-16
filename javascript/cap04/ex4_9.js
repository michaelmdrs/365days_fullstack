const valueTime = document.getElementById('valueTime');
const btnResult = document.getElementById('btnResult');
const showResult = document.getElementById('showResult');

const PRECO_30 = 1.00;
const PRECO_60 = 1.75;
const PRECO_120 = 3.00;

const moedaFormatada = (value) => 
    value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

btnResult.addEventListener('click', (e) => {
    e.preventDefault();

    const valorPago = parseFloat(valueTime.value);

    if(isNaN(valorPago) || valorPago < PRECO_30) {
        showResult.innerHTML = `<h2 class="text-red-500">Valor insuficiente. Mínimo: ${moedaFormatada(PRECO_30)}</h2>`;
        return;
    }

    let tempo = '';
    let troco = 0;

    if(valorPago >= PRECO_120) {
        tempo = '120min';
        troco = valorPago - PRECO_120;
    } else if(valorPago >= PRECO_60) {
        tempo = '60min';
        troco = valorPago - PRECO_60;
    } else {
        tempo = '30min';
        troco = valorPago - PRECO_30;
    }

    let mensagem = `<h2 class="text-cyan-500 font-bold">Tempo: ${tempo}</h2>`;

    if(troco > 0) {
        mensagem += `<p class="text-gray-600">Troco: ${moedaFormatada(troco)}</p>`;
    }

    showResult.innerHTML = mensagem
});

function limpaTela() {
    valueTime.value = '';
    valueTime.focus();
    showResult.innerHTML = '';
}