let resultado = calcularPartidas(193, 93)
class heroi (vitorias, derrotas){
    let saldo = vitorias - derrotas
    if (saldo <= 10 ){
console.log(`O herói tem de saldo de ${saldo} e está no nível ferro.`)
    } else if (saldo >= 11 && saldo <= 20){
        console.log(`O herói tem de saldo de ${saldo} e está no nível bronze.`)
    } else if (saldo >= 21 && saldo <= 50){
        console.log(`O herói tem de saldo de ${saldo} e está no nível prata.`)
    } else if (saldo >= 51 && saldo <= 80){
        console.log(`O herói tem de saldo de ${saldo} e está no nível ouro.`)
    } else if (saldo >= 81 && saldo <= 90){
        console.log(`O herói tem de saldo de ${saldo} e está no nível diamante.`)
    } else if (saldo >= 91 && saldo <= 100){
        console.log(`O herói tem de saldo de ${saldo} e está no nível lendário.`)
    } else if (saldo >= 101){
        console.log(`O herói tem de saldo de ${saldo} e está no nível imortal.`)

    }

    return saldo
}