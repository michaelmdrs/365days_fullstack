const btnCount = document.getElementById('btnResult');
const result = document.getElementById('showResult');
const number = document.getElementById('parImpar');
const parImpar = (number) => (number % 2 == 0 ? 'Par' : 'Ímpar');

btnCount.addEventListener('click', (e) => {
    e.preventDefault();

    const valueRaw = number.value.trim();
    const showNumber = Number(valueRaw);

    if(valueRaw === '' || isNaN(showNumber)) {
        result.innerHTML = `<h2 class="text-red-500">Por favor, insira um número válido.</h2>`
        limpaTela();
        return
    }

    const tipo = parImpar(number)

    result.innerHTML = `<p class="text-orange-600 text-2xl">O Nº ${showNumber} é ${tipo}</p>`
})

function limpaTela() {
    number.value = '';
    result.innerHTML = '';
    number.focus();
}

