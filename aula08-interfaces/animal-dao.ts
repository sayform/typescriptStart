import { DaoInterface } from './dao.interface'
import { Animal } from './../aula07-classes/animal'

/* usando a Interface para implementar uma classe de persistência */
export class AnimalDao implements DaoInterface {

    tableName: string= "";

    /* teste para ver o método sendo chamado */
    insert(object: Animal): boolean {
        console.log('Inserting...');
        object.mover(56);
        return true;
    }

    update(object: Animal): boolean {
        return true;
    }

    delete(id: number): Animal {
        return null;
    }

    find(id: number): Animal {
        return null;
    }
    findAll(): [Animal] {
        return [new Animal('')]; 
    }
}