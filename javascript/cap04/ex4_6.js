const btnCount = document.getElementById('btnResult');
const result = document.getElementById('showResult');
const number = document.getElementById('parImpar');

btnCount.addEventListener('click', (e) => {
    const showNumber = Number(number.value);
    e.preventDefault();

    if(!showNumber || isNaN(showNumber)) {
        alert('Digite um número válido.');
        limpaTela();
        return
    }

    const parImpar = showNumber % 2 == 0 ? 'Par' : 'Ímpar';

    result.innerHTML = `<p class="text-orange-600 text-2xl">O Nº ${showNumber} é ${parImpar}</p>`
})

function limpaTela() {
    number.value = '';
    result.innerHTML = '';
}

