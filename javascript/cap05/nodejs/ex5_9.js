const prompt = require('prompt-sync')()

console.log('Programa Copas do Mundo - Digite 0 para [SAIR]');
console.log('---------------------------------------------------');
/* do {
    const ano = Number(prompt('Ano: '));
    if(ano == 0) {
        console.log('Até à próxima!');
        break
    } else if(ano == 1942 || ano == 1946) {
        console.log(`Não houve Copa em ${ano} - Segunda Guerra Mundial.`)
    } else if(ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    } else {
        console.log(`Não... ${ano} não é ano de Copa do Mundo.`)
    }
}while(true) */

while(true) {
    const ano = Number(prompt('Ano: '));
    if(ano == 0) {
        console.log('Até à próxima! 👋')
        break
    } else if(ano == 1942 || ano == 1946) {
        console.log(`Não houve Copa do Mundo em ${ano} - Segunda Guerra Mundial. 🤓`);
    } else if(ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de Copa do Mundo! ⚽`);
    } else {
        console.log(`Não... ${ano} não é ano de Copa do Mundo! 😒`)
    }
}