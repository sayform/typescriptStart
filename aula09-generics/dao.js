"use strict";
/* usando a Interface e Generics para implementar uma classe de persistência */
var Dao = (function () {
    function Dao() {
        this.tableName = "";
    }
    /* teste para ver o método sendo chamado */
    Dao.prototype.insert = function (object) {
        console.log('Inserting...');
        return true;
    };
    Dao.prototype.update = function (object) {
        return true;
    };
    Dao.prototype.delete = function (id) {
        return null;
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map