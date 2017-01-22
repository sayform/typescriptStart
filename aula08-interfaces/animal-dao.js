"use strict";
var animal_1 = require("./../aula07-classes/animal");
/* usando a Interface para implementar uma classe de persistência */
var AnimalDao = (function () {
    function AnimalDao() {
        this.tableName = "";
    }
    /* teste para ver o método sendo chamado */
    AnimalDao.prototype.insert = function (object) {
        console.log('Inserting...');
        object.mover(56);
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map