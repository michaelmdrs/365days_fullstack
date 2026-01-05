function calcular() {
    const pesoKg = parseFloat(document.getElementById('pesoTotal').value);
    const consumoG = parseFloat(document.getElementById('consumoDiario').value);

    if (!pesoKg || !consumoG) return alert('Preencha os campos!');

    const pesoEmGramas = pesoKg * 1000;
    const dias = Math.floor(pesoEmGramas / consumoG);
    const sobra = pesoEmGramas % consumoG;

    document.getElementById('resDias').innerText = `${dias} dias`;
    document.getElementById('resSobra').innerText = `${sobra}g`;
    document.getElementById('resultado').classList.remove('hidden');

    salvarDados(pesoKg, consumoG);

}

function limpar() {
    document.getElementById('pesoTotal').value = '';
    document.getElementById('consumoDiario').value = '';
    document.getElementById('resultado').classList.add('hidden')

}

function salvarDados(peso, consumo) {
    const dadosPet = {
        pesoRacao: peso,
        consumoDiario: consumo
    };

    localStorage.setItem('petControlData', JSON.stringify(dadosPet));
}

function carregarDados() {
    const dadosSalvos = localStorage.getItem('petControlData');

    if(dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        document.getElementById('pesoTotal').value = dados.pesoRacao;
        document.getElementById('consumoDiario').value = dados.consumoDiario;

        calcular();
    }
}

window.onload = carregarDados;