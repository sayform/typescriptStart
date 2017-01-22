/* Interface - mesmo conceito das linguagens OO. Classe contrato */
export interface DaoInterface {

    tableName: string;

    /* métodos CRUD, com parâmetros e retornos  */
    insert(object: any): boolean;
    update(object: any): boolean;
    delete(id: number): any;
    find(id: number): any;
    findAll(): [any]
}