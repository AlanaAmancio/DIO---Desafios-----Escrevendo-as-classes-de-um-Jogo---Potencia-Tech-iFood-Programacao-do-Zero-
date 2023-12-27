   
   class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let resultado = this.calcularPartidas(213, 103);
  
      if (resultado <= 10) {
        console.log(`O herói tem de saldo ${resultado} e está no nível ferro.`);
      } else if (resultado >= 11 && resultado <= 20) {
        console.log(`O herói tem de saldo ${resultado} e está no nível bronze.`);
      } else if (resultado >= 21 && resultado <= 50) {
        console.log(`O herói tem de saldo ${resultado} e está no nível prata.`);
      } else if (resultado >= 51 && resultado <= 80) {
        console.log(`O herói tem de saldo ${resultado} e está no nível ouro.`);
      } else if (resultado >= 81 && resultado <= 90) {
        console.log(`O herói tem de saldo ${resultado} e está no nível diamante.`);
      } else if (resultado >= 91 && resultado <= 100) {
        console.log(`O herói tem de saldo ${resultado} e está no nível lendário.`);
      } else if (resultado >= 101) {
        console.log(`O herói tem de saldo ${resultado} e está no nível imortal.`);
      } else {
        console.log(`Ranking inexistente.`);
      }
    }
  
    calcularPartidas(vitorias, derrotas) {
      let saldo = vitorias - derrotas;
      return saldo;
    }
    
  }
  let heroi = new Heroi("Frida", 28, "Guerreiro");
heroi.atacar();
