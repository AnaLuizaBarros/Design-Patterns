import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as MyDatabaseModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 22 });
myDatabaseClassic.add({ name: 'Caio', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === MyDatabaseModuleA);
