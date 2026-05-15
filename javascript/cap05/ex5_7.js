const numero = document.getElementById('inNumero');
const btnResultado = document.getElementById('inResultado');
const rsp1 = document.getElementById('outResp1');
const rsp2 = document.getElementById('outResp2');
const rsp3 = document.getElementById('outResp3');
const btnLimpar = document.getElementById('btnLimpar');

btnResultado.addEventListener('click', (e) => {
    e.preventDefault();

    const num = Number(numero.value);
    let numDivisor = 0;

    for(let i = 2; i <= num / 2; i++) {
        if(num % i == 0) {
            numDivisor += 1;
            break
        }
    }
    if(num > 1 && !numDivisor) {
        rsp1.innerHTML = `<h2 style="color: green;" >${num} É PRIMO.</h2>`
    } else {
        rsp2.innerHTML = `<h2 style="color: red">${num} NÃO É PRIMO.</h2>`
    }
})

btnLimpar.addEventListener('click', () => {
    rsp1.innerHTML = '';
    rsp2.innerHTML = '';
    numero.value = '';
})