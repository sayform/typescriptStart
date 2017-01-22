"use strict";
/* Importação de classe, passando a classe a ser importada
    e o caminho onde ela se encontra  */
var animal_1 = require("./animal");
var cavalo_1 = require("./cavalo");
var a = new animal_1.Animal("Rex");
a.mover(50);
var c = new cavalo_1.Cavalo("Titã");
c.mover(100);
//# sourceMappingURL=run.js.map