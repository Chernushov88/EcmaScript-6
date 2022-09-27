document.title = "12-sistem-modules";
import {name, age} from './extra'
import * as extra  from './extra'
import {name as n, age as a} from './extra'
import {func} from './extra';
import Module from './extra';

console.log(age, name);
console.log('extra ', extra);
console.log(a,n );
func();

import {Car} from './extra'
let car = new Car();

console.log(Module.COLOR)
console.log(Module.compute(7,8))
Module.log()
console.log(Module)