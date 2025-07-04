// Criação da classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = ""; // variável para guardar o tipo de ataque

    // Escolhendo o ataque com base no tipo
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando um herói de cada tipo
const heroi1 = new Heroi("Arus", 30, "mago");
const heroi2 = new Heroi("Thorgar", 35, "guerreiro");
const heroi3 = new Heroi("Zen", 28, "monge");
const heroi4 = new Heroi("Hanzo", 22, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
