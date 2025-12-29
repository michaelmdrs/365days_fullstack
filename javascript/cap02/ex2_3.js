const veiculo = document.getElementById('inputVeiculo');
const anoVeiculo = document.getElementById('inputAnoVeiculo');
const precoVeiculo = document.getElementById('inputPreco');
const btnPromocao = document.getElementById('btnPromocao');
const btnLimpar = document.getElementById('btnLimpar');
const res = document.getElementById('resultado');

btnPromocao.addEventListener('click', (e) => {
    const nomeVeiculo = veiculo.value;
    const ano = anoVeiculo.value;
    const valorDeEntrada = Number(precoVeiculo.value);

    const desconto = valorDeEntrada * 0.5;
    const parcelamento = desconto / 12;

    res.innerHTML = `
    <div class="flex flex-col gap-2 m-auto glass-effect w-full max-w-10xl p-8 shadow-2xl text-2xl">
        <p class="text-black font-md">Promoção: ${nomeVeiculo}</p>
        <p class="text-black">Ano: ${ano}</p>
        <p class="text-red-800">Entrada: ${formatarMoeda(desconto)}</p>
        <p class="text-black"> <span class="text-red-800 font-bold">+</span> 12 x de ${formatarMoeda(parcelamento)}</p>
    </div>
    `

    e.preventDefault();
})

const formatarMoeda = (valor) => 
    valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

btnLimpar.addEventListener('click', (e) => {
    res.innerHTML = '';

    e.preventDefault();
})
