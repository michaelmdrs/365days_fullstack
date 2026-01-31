const numero = document.getElementById('numero');
const result = document.getElementById('btnResult');
const clear = document.getElementById('btnClean');
const showResult = document.getElementById('showResult');

result.addEventListener('click', (e) => {
    const numeroRaiz = parseFloat(numero.value);
    const raiz = Math.sqrt(numeroRaiz)

    if(!numeroRaiz) {
        alert('Digite um número!');
        return;
    } else if (numeroRaiz < 0 || isNaN(numeroRaiz)) {
        alert('Digite um número válido!');
        return
    } else if (Number.isInteger(raiz)) {
        showResult.innerHTML = `<p class="text-sky-600">A raiz de ${numeroRaiz} é ${raiz}</p>`;
    } else {
        showResult.innerHTML = `<p class="text-red-700">Não a raiz exata para ${numeroRaiz}</p>`
    }

    e.preventDefault();
})


clear.addEventListener('click', () => {
    numero.value = '';
    showResult.innerHTML = '';
})
