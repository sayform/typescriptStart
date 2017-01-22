import { AnimalDao } from './animal-dao'
import { Animal } from './../aula07-classes/animal'

let dao: AnimalDao = new AnimalDao();
let animal: Animal = new Animal('');

dao.insert(animal);