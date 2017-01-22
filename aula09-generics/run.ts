import { Dao } from './dao';
import { Animal } from './../aula07-classes/animal'
import { Cavalo } from './../aula07-classes/cavalo'


let dao: Dao<Animal> = new Dao<Animal>(); 
let animal: Animal = new Animal("Rex");

dao.insert(animal);

let cavalo: Cavalo = new Cavalo("Titão");
dao.insert(cavalo); 