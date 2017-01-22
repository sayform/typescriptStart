import { Animal } from './animal'

/* Classe extendendo uma classe pai, usando o conceito de herança */
export class Cavalo extends Animal {

    /* Construtor com referência ao parâmetro da classe pai - SUPER */
    constructor (nome: string) {
        super(nome);
    }

    public mover(distanciaEmMetro: number): void {
        console.log("teste")
        /* Usando o método da classe pai - SUPER */
        super.mover(distanciaEmMetro);
    }
}