   
   class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque indefinido';
          break;
      }
  
      console.log(`O ${this.tipo} ${this.nome} de ${this.idade} de idade, atacou usando ${ataque}.`);
    }
  }



  const meuHeroi = new Heroi('Frida', 215, 'mago');

  meuHeroi.atacar();