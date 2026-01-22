const nota1 = document.getElementById('inNota1')
const nota2 = document.getElementById('inNota2')
const btnExibirNota = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado')

btnExibirNota.addEventListener('click', (e) => {
    const inNota1 = parseFloat(nota1.value);
    const inNota2 = parseFloat(nota2.value);
    const mediaAluno = (inNota1 + inNota2) / 2;

    if (mediaAluno >= 7 && mediaAluno <= 10) {
        resultado.innerHTML = `
        <h2 class="text-green-600 text-2xl">Parabéns, Você foi APROVADO!</h2>
        <p class="font-bold">Sua média foi de ${mediaAluno.toFixed(2)}</p>
        `
        
    } else if (mediaAluno >= 5 && mediaAluno < 7) {
        resultado.innerHTML = `
        <h2 class="text-orange-600 text-2xl">Ops... Você foi REPROVADO!</h2>
        <p class="font-bold">Sua média foi de ${mediaAluno.toFixed(2)}</p>
        `
        
    } else {
        resultado.innerHTML = `
        <h2 class="text-red-600 text-2xl">Shiii... Você ficou RETIDO!</h2>
        <p class="font-bold">Sua média foi de ${mediaAluno.toFixed(2)}</p>
        `
    }

    e.preventDefault();
})
