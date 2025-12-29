const inputName = document.getElementById('name');
const btnMostrar = document.getElementById('exibir');
const exibirResultado = document.getElementById('exibirNome');
const limparCampos = document.getElementById('limpar');

btnMostrar.addEventListener('click', (e) => {
    const nome = inputName.value;
    exibirResultado.innerHTML += `Olá, ${nome}!`;
    inputName.value = '';

    if (!nome) {
        exibirResultado.innerHTML = `Preencha o campo!`;
    };
    e.preventDefault()
    
})

limparCampos.addEventListener('click', (e) => {
    exibirResultado.innerHTML = ''
    e.preventDefault()
})
