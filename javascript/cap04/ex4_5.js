const cash = document.getElementById('valueCash');
const btnResult = document.getElementById('btnResult');
const btnClean = document.getElementById('btnClean');
const showCash = document.getElementById('showResult');
let timerLimpeza = null;

function calcularNotas(frmCash) {
    let restante = frmCash;

    const notas100 = Math.floor(restante / 100);
    restante %= 100;

    const notas50 = Math.floor(restante / 50);
    restante %= 50;

    const notas10 = Math.floor(restante / 10);

    return { notas100, notas50, notas10 }
}

btnResult.addEventListener('click', (e) => {
    e.preventDefault();
    const frmCash = parseFloat(cash.value);

    if (frmCash < 0 || isNaN(frmCash)) {
        alert('Saldo indisponível para saque');
        limpaTela()
        return;
    }

    if (frmCash % 10 !== 0) {
        alert("Valor inválido. Use múltiplos de 10.");
        return;
    } 

    const { notas100, notas50, notas10 } = calcularNotas(frmCash)
        
    showCash.innerHTML = 
    `
    Saque de R$: ${frmCash}
    <p class="text-blue-600">${notas100} nota(s) de 100</p>
    <p class="text-blue-600">${notas50} nota(s) de 50</p>
    <p class="text-blue-600">${notas10} nota(s) de 10</p>
    `

    novaTransicao();
})

function limpaTela() {
    cash.value = '';
    showCash.innerHTML = '';
}

function novaTransicao() {
    if (timerLimpeza) {
        clearTimeout(timerLimpeza);
    }

    timerLimpeza = setTimeout(limpaTela, 5000);
}
