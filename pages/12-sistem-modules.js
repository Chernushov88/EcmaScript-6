document.title = "12-sistem-modules";
import {name, age} from './extra'
import * as extra  from './extra'
import {name as n, age as a} from './extra'
import func from './extra';

console.log(age, name);
console.log('extra ', extra);
console.log(a,n );
func();

import {Car} from './extra'
let car = new Car();