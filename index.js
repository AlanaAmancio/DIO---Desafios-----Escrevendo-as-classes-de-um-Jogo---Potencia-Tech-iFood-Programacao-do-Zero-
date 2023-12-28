
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      if (this.tipo === 'mago') {
        ataque = 'magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      } else {
        ataque = 'um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} ${this.nome} de ${this.idade} de idade, atacou usando ${ataque}.`);
    }
  }
  
  
  const meuHeroi = new Heroi('Frida', 65, 'ninja');
  
 
  meuHeroi.atacar();
  
