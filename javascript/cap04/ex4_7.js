const velPermitida = document.getElementById('velPermitida');
const velCondutor = document.getElementById('velCondutor');
const showResult = document.getElementById('showResult');
const btnResult = document.getElementById('btnResult');
const btnClear = document.getElementById('btnClear');

// Lógica para calcular infração baseada na velocidade
btnResult.addEventListener('click', () => {
    const limitePermitido = Number(velPermitida.value);
    const limiteCondutor = Number(velCondutor.value);

    if(isNaN(limitePermitido) || isNaN(limiteCondutor) || limitePermitido <= 0) {
        showResult.innerHTML = `<h2>Verifique as informações.</h2>`;
        return;
    }

    const LIMITE_MULTA_LEVE = limitePermitido * 1.2;

    if(limiteCondutor <= limitePermitido) {
        showResult.innerHTML = `<h2 class="text-green-600">SEM MULTA.</h2>`;
    } else if(limiteCondutor <= LIMITE_MULTA_LEVE) {
        showResult.innerHTML = `<h2 class="text-orange-600">MULTA LEVE.</h2>`;
    } else {
        showResult.innerHTML = `<h2 class="text-red-600">MULTA GRAVE.</h2>`;
    }
});

function limpaTela() {
    velPermitida.value = '';
    velCondutor.value = '';
    showResult.innerHTML = '';
}
