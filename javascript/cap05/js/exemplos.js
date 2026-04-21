// for básico, quando já temos um valor definido de repetição.

// 1º exemplo
/* const senhaCorreta = "1234";
let esqueceu_senha = 'Pelo visto você esqueceu a senha! Clique aqui para recuperar.';
const prompt = require("prompt-sync")();

for(let tentativas = 1; tentativas <= 3; tentativas++) {

    let senha = prompt(`Tentativa ${tentativas}/3 - Digite a senha: `);

    if(!senha || senha.length <= 3) {
        console.log('Digite uma senha válida. No mínimo 4 caracteres.');
        continue;
    }

    if(senha == senhaCorreta) {
        console.log('Login realizado com sucesso. ');
        break;
    } else {
        console.log('Senha incorreta, tente novamente.')
    }

    if(tentativas == 3) {
        console.log("Número máximo de tentativas atingido.");
        console.log(esqueceu_senha);
    }
} */

// 2º exemplo
const numeroAleatorio = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.random() * (max - min) + min
}

let numeroSorteado = numeroAleatorio(1, 10)

for(i = 1; i <= 10; i++) {

    if(numeroSorteado == 5) {
        console.log('Chegamos no número sorteado.');
        break;
    } else {
        console.log(i)
    }
}



