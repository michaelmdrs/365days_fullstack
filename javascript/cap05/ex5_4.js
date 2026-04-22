const numero = document.getElementById('numero');
const btnResultado = document.getElementById('btnResultado');
const resultado = document.getElementById('exibirResultado');

btnResultado.addEventListener('click', (e) => {
    e.preventDefault();

    let numeros = Number(numero.value);

    if (numeros === 0 || isNaN(numeros)) {
        alert('Digite um número válido!');
        return;
    }

    let pares = `Pares entre 1 e ${numeros}: `;
    let i = 2;

    while (i <= numeros) {
        pares += `${i} `;
        i += 2;
    }

    resultado.innerHTML = pares;
});

// alert(pares)
