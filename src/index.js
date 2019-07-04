import './assets/styles/style.scss'
import {Math} from './math'
import buttonRenderFn from './components/button.component'
import big from './assets/images/big.jpg';
import small from './assets/images/small.jpg';
console.log('big: ',big);
console.log('small: ',small);

//const modules  = require('./math');
const no = new Math().sub(1,2);
//const no = new modules.Math().sub(1,2);
console.log(no);

const smallImg = document.createElement('img');
smallImg.src = small;
const bigImg = document.createElement('img');
bigImg.src = big;

document.body.append(bigImg,smallImg);

// class Employee{
//     public id?:number;
//     private name:string;

//     public setName(name:string = ''): void{
//         this.name = name;
//     }

//     public getName(): string{
//         return this.name;
//     }

// }

// const emp = new Employee();
// emp.setName('Hassona');
// console.log(emp.getName());

buttonRenderFn();