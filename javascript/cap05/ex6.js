const descricao = document.getElementById('inDescricao');
const valor = document.getElementById('inValor');
const gravarConta = document.getElementById('inGravarConta');
const btnLimpar = document.getElementById('btnLimpar');
const btnExibir = document.getElementById('btnExibir');
const resp1 = document.getElementById('outResp1');
const resp2 = document.getElementById('outResp2');
const resp3 = document.getElementById('outResp3');

// lógica
let resposta = '';
let lista = [];
let valor_despesas = 0;
let total_despesas = 0;

gravarConta.addEventListener('click', (e) => {
    e.preventDefault();

    const descricaoConta = descricao.value;
    const despesas = Number(valor.value);
    lista.push({ descricao: descricaoConta, valor: despesas });

    if(!despesas || isNaN(despesas)) {
        resp3.innerHTML = '<h2 style="color: red;">Informe o valor corretamente!</h2>'
        return;
    }


    valor_despesas += despesas;
    total_despesas++
    resposta = `${descricaoConta} - ${converteMoedas(despesas)}`;
    resp1.innerHTML = `${resposta}`;
    resp2.innerHTML = `${total_despesas} Contas | Total: ${converteMoedas(valor_despesas)}`;

    limpar();
})

function exibirLista() {
    let html = '<h3>Todas as contas</h3>';
    lista.forEach((conta, i) => {
        html += `${i + 1}. ${conta.descricao} - ${converteMoedas(conta.valor)}\n`
    });
    resp1.innerHTML = html;
}

btnExibir.addEventListener('click', exibirLista);

btnLimpar.addEventListener('click', () => {
    descricao.value = '';
    valor.value = '';
    resp1.innerHTML = '';
    resp2.innerHTML = '';
    resp3.innerHTML = '';
})

function limpar() {
    descricao.value = '';
    valor.value = '';
    resp3.innerHTML = '';
}

const converteMoedas = (value) => 
    value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });