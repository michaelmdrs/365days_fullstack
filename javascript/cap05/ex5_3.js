const ladoA = document.getElementById('ladoA');
const ladoB = document.getElementById('ladoB');
const ladoC = document.getElementById('ladoC');
const btn = document.getElementById('btnResult');
const showResult = document.getElementById('showResult');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const tA = Number(ladoA.value);
    const tB = Number(ladoB.value);
    const tC = Number(ladoC.value);

    if (tA + tB > tC && tA + tC > tB && tB + tC > tA) {
        let tipo = "Os lados formam um triângulo.";

        if (tA ** 2 === tB ** 2 + tC ** 2 || tB ** 2 === tA ** 2 + tC ** 2 || tC ** 2 === tA ** 2 + tB ** 2) {
            tipo += "do tipo Retângulo";
        } else {
            tipo += 'comum (NÃO RETÂNGULO)';
        }

        const cosA = (tB**2 + tC**2 - tA**2) / (2 * tB * tC);
        const anguloA = Math.acos(cosA) * (180 / Math.PI);

        showResult.innerHTML = `
            <p class="text-orange-500">${tipo}</p>
            <p class="text-gray-600">O ângulo oposto ao lado A é: ${anguloA.toFixed(2)}°</p>
        `
        
    } else {
        showResult.innerHTML = `<p class="text-red-500">Os lados informados NÃO podem formar um triângulo.</p>`;
    }


})

function limpaTela() {
    ladoA.value = '';
    ladoB.value = '';
    ladoC.value = '';
    showResult.innerHTML = '';
    focus()
}