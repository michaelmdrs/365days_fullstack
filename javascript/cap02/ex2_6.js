const frmValor = document.getElementById('inValor');
const frmTempo = document.getElementById('inTempo');
const btnFrm = document.getElementById('btnCalcular');
const btnLiberarTempo = document.getElementById('btnLiberar');
const resultado = document.getElementById('resultado');

btnFrm.addEventListener('click', (e) => {
    const valorPorMin = Number(frmValor.value);
    const tempoUsado = Number(frmTempo.value);
    let valorPadrao = 3;
    let tempoPadrao = 15;
    const valor = (Math.ceil(tempoUsado / tempoPadrao)) * valorPadrao;

    if (!valorPorMin || tempoUsado == '') {
        alert('Preencha os campos para continuar.');
        valorPorMin.focus()
        return
    } else if (valorPorMin < 0) {
        resultado.innerHTML = `
         <h3>O tempo padrão é de 15min, portanto o sistema não será liberado.</h3>
         `
         return
    }

    resultado.innerHTML = `
    <h3>Valor a Pagar ${formataMoeda(valor)}</h3>
    `
    frmValor.focus();
    frmValor.value = '';
    frmTempo.value = '';


    e.preventDefault();
})

const formataMoeda = (valor) => 
    valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

btnLiberarTempo.addEventListener('click', (e) => {
    frmValor.value = '';
    frmTempo.value = '';
    resultado.innerHTML = '';
})