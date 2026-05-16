const numero = document.getElementById('inNumero');
const outRsp = document.getElementById('outEspacos');
const btnRsp = document.getElementById('btnResultado');
const btnLimpar = document.getElementById('btnLimpar');

btnRsp.addEventListener('click', (e) => {
    e.preventDefault();

    const num = Number(numero.value);
    let asteriscos = '';
    for(let i = 1; i <= num; i++) {
        if(i % 2 == 1) {
            asteriscos = asteriscos + '*';
        } else {
            asteriscos = asteriscos + '-'
        }
    }
    outRsp.innerHTML = asteriscos;

})

btnLimpar.addEventListener('click', () => {
    outRsp.innerHTML = '';
    numero.value = '';
})