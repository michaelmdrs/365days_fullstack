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

    if(isNaN(velPermitida) || velCondutor <= 0) {
        showResult.innerHTML = `<h2 class="text-red-700">Ops, algo deu errado! Informe a velocidade permitida.</h2>`;
    }

    if(limitePermitido <= infracaoAplicada) {
        showResult.innerHTML = `<h2 class="text-green-700">Sem Multa.</h2>`;
        console.log(infracaoAplicada + INFRACAO_20)
        return
    }
});

function limpaTela() {
    velPermitida.value = '';
    velCondutor.value = '';
    showResult.innerHTML = '';
}