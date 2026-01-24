const nome = document.getElementById('inNome');
const altura = document.getElementById('inAltura');
const masculino = document.getElementById('inMasculino');
const feminino = document.getElementById('inFeminino');
const resultado = document.getElementById('resultado');

addEventListener('submit', (e) => {
    const inNome = nome.value;
    const inAltura = parseFloat(altura.value);

    const pesoHomem = 22 * Math.pow(inAltura, 2);
    const pesoMulher = 21 * Math.pow(inAltura, 2);

    if(masculino) {
        resultado.classList.remove('hidden');
        resultado.innerHTML = `<p class="text-2xl text-purple-900 font-bold">
        ${inNome}: Seu peso ideal é ${pesoHomem.toFixed(2)}kg
        </p>`
        
    } else if (feminino) {
        resultado.innerHTML = `<p class="text-2xl text-purple-900 font-bold">
        ${inNome}: Seu peso ideal é ${pesoMulher.toFixed(2)}kg
        </p>`
        
    } else {
        resultado.innerHTML = `<h2 class="text-2xl text-red-700">Ops! Não entendemos, preencha os campos novamente.</h2>`
    }

    e.preventDefault();
})

addEventListener('reset', (e) => {
    nome.value = '';
    altura.value = '';
    resultado.innerHTML = '';
    e.preventDefault()
})