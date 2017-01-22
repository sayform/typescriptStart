/* Uma classe em Typescript */
/* "export" transforma a classe em um módulo. Assim podemos usá-la em outro arquivo.
    Funciona como o modificador public no Java. */
"use strict";
var Animal = (function () {
    /* Construtor */
    function Animal(nome) {
        this.nome = nome;
    }
    /* Método com parøametro e sem retorno (void) */
    Animal.prototype.mover = function (distanciaEmMetros) {
        /* Sifrão para pegar a variável */
        /* Usar apostrofe na passagem do parâmetro */
        console.log(this.nome + " moveu " + distanciaEmMetros);
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map