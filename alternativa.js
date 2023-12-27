   
    let resultado = calcularPartidas(233, 103)
    function calcularPartidas(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}
    let ferro = (resultado <= 10)
    let bronze = (resultado >= 11 && resultado <= 20)
    let prata = (resultado >= 21 && resultado <= 50)
    let ouro = (resultado >= 51 && resultado <= 80)
    let diamante = (resultado >= 81 && resultado <= 90)
    let lendario = (resultado >= 91 && resultado <= 100)
    let imortal = (resultado >= 101)
 
    switch (calcularPartidas = ferro || bronze || prata || ouro || diamante || lendario || imortal) {
       case(calcularPartidas = ferro) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível ferro.`)
            break;
        
       case (calcularPartidas = bronze) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível bronze.`)
            break;
        
        case (calcularPartidas = prata) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível prata.`)
            break;

        case (calcularPartidas = ouro) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível ouro.`)
            break;

        case (calcularPartidas = diamante) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível diamante.`)
            break;

        case(calcularPartidas = lendario) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível lendário.`)
            break;

        case(calcularPartidas = imortal) :
            console.log(`O herói tem de saldo de ${resultado} e está no nível imortal.`)
            break;
        
            default:
            console.log(`ranking inexistente`)
        
    }
