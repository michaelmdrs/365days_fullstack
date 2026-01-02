const frmValor = document.getElementById('inValor');
const frmTempo = document.getElementById('inTempo');
const btnFrm = document.getElementById('btnCalcular');
const btnLiberarTempo = document.getElementById('btnLiberar');
const resultado = document.getElementById('resultado');



function updateHora() {
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const horaFormatada = `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundo < 10 ? '0' + segundo : segundo}`;
    document.getElementById('hora').innerHTML = horaFormatada;
    
}

setInterval(updateHora, 1000);

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
    <div class="text-2xl text-center m-auto glass-effect w-full max-w-4xl p-8 shadow-2xl text-1xl gap-4 bg-blue-200">
        <h3 class="font-bold text-cyan-800">Valor a Pagar ${formataMoeda(valor)}</h3>
    </div>
    
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
