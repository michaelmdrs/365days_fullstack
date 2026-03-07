const decrementarNumero = document.getElementById('numero');
const btnResult = document.getElementById('btnResult');
const btnClean = document.getElementById('btnClean');
const showResult = document.getElementById('showResult');


btnResult.addEventListener('click', () => {
    const numero = Number(decrementarNumero.value);
    let resposta = `<h2 class="text-red-500">Entre o número ${numero} e 1: </h2>`;

    for(i = numero; i > 0; i--) {
        if(i === 1) {
            resposta += `<p class="text-blue-700">${i}.</p>`;
        } else {
            resposta += `<p class="text-blue-700">${i},</p>`;
        }
    }

    showResult.innerHTML = `${resposta}`;
});


function limpaTela() {
    decrementarNumero.value = '';
    showResult.innerHTML = '';
    focus()
}
