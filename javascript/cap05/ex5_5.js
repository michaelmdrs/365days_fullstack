const numero = document.getElementById('numero');
const btnResultado = document.getElementById('btnResultado');
const resultado = document.getElementById('exibirResultado');

// alert('Digite 0 para sair');

btnResultado.addEventListener('click', () => {
   const num = Number(numero.value)
   if(num === 0 || isNaN(num)) {
    return alert('Digite um número válido.')
   } else {
    if(num % 2 === 0) {
        resultado.innerHTML = `O dobro de ${num} é: ${num * 2}`
    } else {
        resultado.innerHTML = `O triplo de ${num} é: ${num * 3}`
    }
   }
})