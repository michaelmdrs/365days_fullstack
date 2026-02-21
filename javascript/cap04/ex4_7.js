const velPermitida = document.getElementById('velPermitida');
const velCondutor = document.getElementById('velCondutor');
const showResult = document.getElementById('showResult');
const btnVel = document.getElementById('btnResult');
const btnClear = document.getElementById('btnClear');

// Lógica para calcular infração baseada na velocidade
btnVel.addEventListener('click', () => {
    const limitePermitido = Number(velPermitida.value);
    const infracaoAplicada = Number(velCondutor.value);
    const INFRACAO_20 = infracaoAplicada * 0.8;
    const INFRACAO_40 = infracaoAplicada * INFRACAO_20;

    if(isNaN(velPermitida) || velCondutor <= 0) {
        showResult.innerHTML = `<h2 class="text-red-700">Ops, algo deu errado! Informe a velocidade permitida.</h2>`;
    }

    if(limitePermitido <= INFRACAO_20) {
        showResult.innerHTML = `<h2>Multa Leve.</h2>`
  } else if (limitePermitido >= INFRACAO_40) {
        showResult.innerHTML = `<h2>Multa Grave.</h2>`
  }
});

function limpaTela() {
    velPermitida.value = '';
    velCondutor.value = '';
    showResult.innerHTML = '';
}
