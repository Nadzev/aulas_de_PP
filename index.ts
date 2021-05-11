class Itens{
    nome: String;
    descricao: String;
    constructor(nome: String, descricao:String){
        this.descricao = descricao
        this.nome = nome

    }

}
class Mochila{
    itens: itens[] = [];
    capacidadeMaxima: Number;

    constructor(capacidadeMax: Number){
        this.capacidadeMaxima = capacidadeMax
    }
}

class Personagem{
    nickname: String;
    level: Number;
    forca: Number;
    agilidade: Number;
    stamina: Number;
    mochila!: Mochila;
    constructor(nick: String, forca:Number, agilidade: Number, stamina: Number){
        this.nickname = nick
        this.agilidade = agilidade
        this.forca = forca
        this.stamina = stamina

 
    }
    aumentarlevel(){
        this.agilidade++;
        this.stamina++;
        this.forca++;

    }
}
let nadila: Personagem = new Personagem('Aladin', 50, 100,70);
console.log(nadila);
nadila.mochila = new Mochila(3)
nadila.mochila.itens.push(new Itens('parte do escudo','elmo'))
let variavel:string;
console.log(nadila)
console.log(nadila.mochila.itens)
nadila.aumentarlevel();
console.log(nadila)
console.log('Teste');

console.log('ta ok');
