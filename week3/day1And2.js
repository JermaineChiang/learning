const challenge = undefined;
console.log(typeof(challenge)); // 若值為undefined時，該型別為'undefined'
// result: undefined

const iteral = 
'Hello World!!\
 Hello Kitty!!';
console.log(iteral); // \可以讓字串換行不間斷
// result: Hello World!! Hello Kitty!!

console.log(typeof(NaN)); // NaN的型別是number
// result: number

const a = 0.3;
const b = 0.5;
let c;
if ( a + b === 0.3 + 0.5) {
   c = true;
} else {
   c = false;
}
console.log(c);

const nameArray = ['Hank', 'Andy', 'John'];
nameArray.length = 2;
console.log(nameArray[0], nameArray[1], nameArray[2]); // 陣列長度修小之後，後面的值成為undefined
// result: Hank Andy undefined

console.log(typeof(null)); // null的型別為object，是javascript的bug
// result: object

const height = 1.98;
const weight = 98;
const JordanBMI = new Function('height', 'weight', 'return ( weight / (height * height))');
console.log('Jordan BMI = ' + Math.round(JordanBMI(height, weight)));
// result: 25
// new Function每次執行時都會解析字串，在實務上較少用

const car = {wheel: 4, light: 6};
const motor = car;
motor.wheel = 2;
motor.light = 2;
console.log('car' + JSON.stringify(car));
// result: { wheel: 2, logo: 3 }
// pass by reference。
// 傳址，motor與car指向同一個記憶體，改變其中一個值，另一個一起改變

function Toyota(obj) {
    obj = {'wheel': 4, 'light': 4, 'name': 'Toyota'};
    console.log('Toyota: ' + JSON.stringify(obj));
    // result: {"wheel":4,"light":4,"name":"Toyota"}
}
Toyota(car);
console.log('car: ' + JSON.stringify(car));
// result: {"wheel":2,"light":2}
// pass by sharing 
// 當物件被當作參數傳遞時，當物件重新賦值的時候，原有物件的值不會跟著一起改變

function Honda(obj) {
    obj.wheel = 4;
    obj.light = 6;
    obj.name = 'Honda';
}
Honda(car);
console.log('car: ' + JSON.stringify(car));
// result: {"wheel":4,"light":6,"name":"Honda"}
// 如果不是重新賦值，原有物件的值還是會跟著被改變