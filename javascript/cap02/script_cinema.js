const titulo = document.getElementById('inputTitulo');
const horasMinutos = document.getElementById('inputTempo');
const btnConverter = document.getElementById('btnConversor');
const resTitulo = document.getElementById('outputTitulo');
const resTempo = document.getElementById('outputTempoConvertido');
const btnLimpar = document.getElementById('limpar');

btnConverter.addEventListener('click', (e) => {
    const frmTitulo = titulo.value;
    const frmHorasMinutos = horasMinutos.value;

    if (!frmTitulo) {
        alert('Digite o título do filme!')
        titulo.focus()
        return
    } else if (!frmHorasMinutos || frmHorasMinutos <= 0 || frmHorasMinutos > 500) {
        alert('Por favor, insira uma duração válida (entre 1 e 500 minutos!)');
        horasMinutos.focus()
        return
    } else {

        const converterHora = Math.floor(parseInt(frmHorasMinutos / 60));
        const converterMinutos = Math.round(parseInt(frmHorasMinutos % 60));
    
        resTitulo.innerHTML = `Título do Filme: ${frmTitulo}`
        resTempo.innerHTML += `Tempo: ${converterHora} hora(s) e ${converterMinutos} minutos.`;
    
        titulo.value = '';
        horasMinutos.value = '';
    }


    e.preventDefault();
})

btnLimpar.addEventListener('click', (e) => {
    resTitulo.innerHTML = '';
    resTempo.innerHTML = '';
    
    e.preventDefault();
})



