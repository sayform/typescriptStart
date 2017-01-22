/* Importação de classe, passando a classe a ser importada
    e o caminho onde ela se encontra  */
import { Animal } from './animal'; 
import { Cavalo } from './cavalo'; 

let a = new Animal ("Rex");
a.mover(50);

let c = new Cavalo ("Titã");
c.mover(100);