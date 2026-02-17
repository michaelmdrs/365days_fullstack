const ladoA = document.getElementById('ladoA');
const ladoB = document.getElementById('ladoB');
const ladoC = document.getElementById('ladoC');
const btnResult = document.getElementById('btnResult');
const showResult = document.getElementById('showResult');


btnResult.addEventListener('click', (e) => {
    e.preventDefault();

    const a = Number(ladoA.value);
    const b = Number(ladoB.value);
    const c = Number(ladoC.value);
    
    const camposValidos = [a, b, c].some(valor => isNaN(valor) || valor <= 0);

    if(camposValidos) {
        showResult.innerHTML = `<h2 class="text-red-600">Preencha todos os campos com valores positivos.</h2>`
    }

    if(a < b + c && b < a + c && c < a + b) {
        showResult.innerHTML = `Os lados pode formar um TRIÂNGULO.`;
        if(a === b && b === c) {
            showResult.innerHTML = `
            <p>Os lados pode formar um TRIÂNGULO.</p>
            <h2 class="text-yellow-600">EQUILÁTERO!</h2>`
        } else if (a != b && b != c && c != a) {
            showResult.innerHTML = `
            <p>Os lados pode formar um TRIÂNGULO:</p>
            <h2 class="text-orange-600">ESCALENO!</h2>`
        } else {
            showResult.innerHTML = `
            <p>Os lados pode formar um TRIÂNGULO:</p>
            <h2 class="text-cyan-600">ISÓSCELES!</h2>`
        }
    } else {
        showResult.innerHTML = `<h2 class="text-red-600">Os lados acima não podem formar um TRIÂNGULO.</h2>`
    }
});

function limpaTela() {
    ladoA.value = '';
    ladoB.value = '';
    ladoC.value = '';
    ladoA.focus();
    ladoB.focus();
    ladoC.focus();
    showResult.innerHTML = '';
}