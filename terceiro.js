class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataques = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken',
      };
  
      const ataque = ataques[this.tipo] || 'um ataque indefinido';
      console.log(`O ${this.tipo} ${this.nome} de ${this.idade} de idade, atacou usando ${ataque}`);
    }
  }
  
  const meuHeroi = new Heroi('Frida', 93, 'mago');
  meuHeroi.atacar();
  