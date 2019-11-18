// 切分變數有效範圍的最小單位是function
// 範圍鏈 (Scope Chain): 函式外層存取不到內層宣告的變數。
// 若是在自己層級找不到就會一層一層往外找，直到global為止。

function scope1() {
    const a = 1;
    const b = 5;
    c = a + b;
}
scope1();
console.log(c);
// result: 6

// 計數器
// 沒使用閉包時…
let count = 0;

function counter() {
    return ++count;
}

console.log('count = ' + counter()); // result: count = 1
console.log('count = ' + counter()); // result: count = 2

// 使用閉包
function closureCounter() {
    let count = 0;

    function innerCounter() {
        return ++count;
    }
    return innerCounter;
}
const countFunc = closureCounter();
console.log('閉包count = ' + countFunc()); // result: 閉包count = 1
console.log('閉包count = ' + countFunc()); // result: 閉包count = 2

// 閉包加上箭頭寫法
const arrowClosure = () => {
    let count = 0;
    return () => ++count;
}
const arrowCountFunc = arrowClosure();
console.log('閉包箭頭寫法：count = ' + arrowCountFunc()); // result: 閉包箭頭寫法：count = 1
console.log('閉包箭頭寫法：count = ' + arrowCountFunc()); // result: 閉包箭頭寫法：count = 2

// 閉包誤區1
function playGame() {
    let count = 0;

    return function () {
        return ++count;
    }
}
console.log(playGame());
// 直接呼叫function的話，回傳的是函式內容
// result: [Function]

const getPlayer = function () {
    return this.name;
}
const player1 = {
    name: 'Jordan',
    getPlayer: getPlayer
}
const player2 = {
    name: 'Chi-Chieh',
    getPlayer: getPlayer
}
console.log(player1.getPlayer()); // result: Jordan
console.log(player2.getPlayer()); // result: Chi-Chieh
// this會因執行的環境與宿主物件的不同，而有不同的結果。

const fool = function () {
    this.count++;
}
fool.count = 0;

for (let i = 0; i < 5; i++) {
    fool();
}
console.log(fool.count);
// result: 0
// fool是全域變數，因此fool函式的物件是代表全域物件的屬性，也就是window的屬性
// 因此，this就是指window，this.count是undefined

const yogurt = function () {
    console.log(this.y); // result: undefined
}

const green = function () {
    let y = 123;
    yogurt();
}
green();
// yogurt的this.y則是指向window.y，因此為undefined

const obj = {

    func1: function () {
        console.log(this === obj); // result: true
        // 因為func1是透過obj來呼叫的，因此this為obj

        const func2 = function () {
            console.log(this === obj); // result: false
            // 當沒有特定指明this的情況，像是透過call()、apply()、或是bind()來指定this的話，
            // 預設綁定this為全域物件，也就是window
        }
        func2();
    }
}
obj.func1();

//***/ 將this存於其他變數裡，這裡叫做that
// el.addEventListener('click', function(event) {

//     const that = this;
//     console.log(this.textContent);

//     $ajax('[URL]'), function(res) {
//         console.log(that.textContent, res);
//         // 這裡的this.textContent是undefined
//         // 所以用that.textContent
//     }
// }, false);

//***/ 以event.currentTarget改寫 
// el.addEventListener('click', function(event) {

// 直接以event.currentTarget替代
//     console.log(event.currentTarget.textContent);

//     $ajax('[URL]'), function(res) {
//         console.log(event.currentTarget.textContent, res);
//     }
// }, false);

//***/ 以bind改寫
// el.addEventListener('click', function(event) {

//     console.log(this.textContent);

// 透過.bind(this)來強制指定該scope的this
//     $ajax('[URL]'), function(res) {
//         console.log(this.textContent, res);
//     }.bind(this));
//
// }, false);

// 在function後面加上.bind(this)
// 就可以強制將()內的物件帶入至callback function內
const square = {
    width: 123
};

const squareFunc = function () {
    console.log(this.width);
};

squareFunc();
// result: undefined
squareFunc.bind(square)();
// result: 123
// bind()讓這個function在呼叫前先綁定某個物件，使它不管怎麼被呼叫都能有固定的this

//***/ 以箭頭函式改寫
// el.addEventListener('click', function(event) {

//     console.log(this.textContent);

// 箭頭函式隱含「強制指定this」至callback function中
//     $ajax('[URL]', res => {
//         console.log(this.textContent, res);
//     });
//
// }, false);
// 箭頭函式方便歸方便，要小心使用，以防指定錯對象

//***/ .call()與.apply()
// 依照呼叫時的需要帶入不同的物件作為該function的this
function myAccount(numA, numB) {
    const number = numA * numB;
    return number;
}
console.log(myAccount.call(myAccount.context, 40, 30)); // 1200
// .call()以逗點,隔開參數
console.log(myAccount.apply(myAccount.context, [83, 12])); // 996
// .apply()則是以陣列作為參數