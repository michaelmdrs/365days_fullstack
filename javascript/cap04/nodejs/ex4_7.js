const prompt = require("prompt-sync")();
const totalCompras = Number(prompt('Valor total R$: '));
// const qtdParcelas = Number(prompt('Nº de parcelas: '));
const condParcela = Math.floor(totalCompras / 20);
const parcelas = condParcela == 0 ? 1 : condParcela > 6 ? 6 : condParcela;
 let pagar = (totalCompras / parcelas);
console.log(
        `
        ========== RESUMO DA COMPRA ==========
        Valor Total R$: ${totalCompras.toFixed(2)};
        Parcelado em ${parcelas}x (sem juros);
        Valor Parcelado R$: ${pagar.toFixed(2)};
        ======================================
                OBRIGADO E VOLTE SEMPRE!
        `
    )

/*  if () {
    console.log(
        `
        ========== RESUMO DA COMPRA ==========
        Valor Total R$: ${totalCompras.toFixed(2)};
        Parcelado em ${qtdParcelas};
        Valor Parcelado R$: ${pagar.toFixed(2)};
        ======================================
                OBRIGADO E VOLTE SEMPRE!
        `
    )
 } else {
    console.log('Produto não elegível para parcelamento.');
 }
 */