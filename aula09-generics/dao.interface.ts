/* Interface - aplicando Generics */
export interface DaoInterface<T> {

    tableName: string;

    /* métodos CRUD, com parâmetros e retornos  */
    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): T;
    find(id: number): T;
    findAll(): Array<T>; /* [T] */
}