/* Uma classe em Typescript */
/* "export" transforma a classe em um módulo. Assim podemos usá-la em outro arquivo.
    Funciona como o modificador public no Java. */

export class Animal {

    private nome: string;

    /* Construtor */
    constructor (nome: string) {
        this.nome = nome;
    }

    /* Método com parøametro e sem retorno (void) */
    public mover(distanciaEmMetros: number): void {
        /* Sifrão para pegar a variável */
        /* Usar apostrofe na passagem do parâmetro */
        console.log(`${this.nome} moveu ${distanciaEmMetros}`);
    }
}