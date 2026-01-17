// Calcular o quadrienio dos funcionarios
const formataMoeda = (valor) => valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const prompt = require('prompt-sync')();

const salarioBase = parseFloat(prompt('Salário R$: '));
const dataInicioStr = prompt('Data de admissão (AA/MM/DD): ');

const resultadoPeriodo = calculoDeQuadrienio(dataInicioStr);
const valorAdicional = calcularSalarioAdicional(salarioBase, resultadoPeriodo.totalQuadrienios);

function calcularSalarioAdicional(salario, totalQuadrienios) {
    let adicionalPorQuadrienio = salario * 0.01;
    return adicionalPorQuadrienio * totalQuadrienios
}

function calculoDeQuadrienio(dataInicioStr) {
    const dataInicio = new Date(dataInicioStr);
    const data_atual = new Date();

    let anosCompletos = data_atual.getFullYear() - dataInicio.getFullYear();

    const mesAtual = data_atual.getMonth();
    const diaAtual = data_atual.getDate();
    const mesInicio = dataInicio.getMonth();
    const diaInicio = dataInicio.getDate();

    if (mesAtual <= mesInicio || (mesAtual === mesInicio && diaAtual < diaInicio)) {
        anosCompletos--;
    }

    const totalQuadrienios = Math.floor(anosCompletos / 4);

    return {
        anosCompletos,
        totalQuadrienios
    };
}

console.log(`--- Resultado Salário Base ---`);
console.log(`Anos completos: ${resultadoPeriodo.anosCompletos}`);
console.log(`Quantidade de Quadriênios: ${resultadoPeriodo.totalQuadrienios}`);
console.log(`Valor do Adicional: ${formataMoeda(valorAdicional)}`);
console.log(`Salário Total: ${formataMoeda(salarioBase + valorAdicional)}`);