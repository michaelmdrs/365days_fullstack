const quilo = document.getElementById('inQuilo');
const consumo = document.getElementById('inConsumo');
const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btnCalcular');
const novoCalculo = document.getElementById('btnNovoCalculo');

btnCalcular.addEventListener('click', (e) => {
    const kg = Number(quilo.value);
    const gramas = Number(consumo.value);
    const valorQuilo = (kg / 1000 )* gramas;

    if (!kg || gramas == '') {
        alert('Preencha os campos corretamente!')
        return
    } else if (kg < 0 || gramas < 0) {
        resultado.innerHTML = `<h2 class="text-red-800 text-2xl">Valores negativos não são permitidos!</h2>`
        return
    }

    resultado.innerHTML = `
        <h3 class="text-2xl text-black">Valor Total: ${formatarMoeda(valorQuilo)}<h3>
    `
    quilo.value = '';
    consumo.value = '';

    e.preventDefault();
});

const formatarMoeda = (valor) => 
    valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

novoCalculo.addEventListener('click', (e) => {
    resultado.innerHTML = '';
    quilo.value = '';
    consumo.value = '';

    e.preventDefault();
})

