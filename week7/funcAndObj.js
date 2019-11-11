// 在JavaScript裡函式是第一級公民
// 函式的typeof是function，但仍屬於物件的一種
// 函式是一種物件，值也是物件，可想像成是一種可以被呼叫的特殊物件

const myBot = createBot();
// 函式可存於變數中

const botArray = [createBot()];
// 函式可存於陣列中

const botObject = { mothod: createBot() };
// 函式可存於物件中

changeBot(myBot);
// 把函式當作參數，傳入另一個函式中

function createBot() {
    console.log('Enter createBot');
    return 'Enter createBot';
}

function changeBot(param) {
    console.log('Enter changeBot, value is ' + param);
}
// result: Enter changeBot, value is {"mothod":"Enter createBot"}

const generalFunc = function () {
    console.log('傳統函式');
}
const arrowFunc = () => { // 如果沒有參數的話，小括號不能省略
    console.log('箭頭函式');
}
const oneParamFunc = param => { // 如果只有一個參數的話，小括號則可省略
    console.log(param);
}
generalFunc();
arrowFunc();
oneParamFunc('只有一個參數時');
// ES6箭頭符號，改寫原來的function
// result: 傳統函式
// 箭頭函式
// 只有一個參數時

const concatString = function (stringA, stringB) {
    const finalString = stringA.concat(stringB);
    let argumentString = '';
    for (let i = 0; i < arguments.length; i++) {
        argumentString += arguments[i];
    }
    // 透過arguments物件取得所有傳入的參數, 箭頭函式內不可使用arguments
    console.log(argumentString);
    // result: 在車內抽菸打球玩電競

    console.log(arguments.callee === concatString);
    // arguments.callee()可以遞迴呼叫迴圈，在匿名函式中特別有用
    // 但在嚴格模式下不允許存取
    // result: true
    return finalString;
}

console.log(concatString.call(null, '在樹上', '唱歌'));
// 透過call來呼叫函式，參數用逗點分隔
// result: 在樹上唱歌

console.log(concatString.apply(null, ['在宇宙', '玩沙']));
// 透過apply來呼叫函式，參數以陣列包覆
// result: 在宇宙玩沙

console.log(concatString('在車內', '抽菸', '打球', '玩電競'));
// 可以傳超過設定的參數過去，不會報錯
// 多傳入的參數在函式內為預設值undefined

const dragonBall = (...args) => {
    let str = '';
    for (let i = 0; i < args.length; i++) {
        str += args[i];
    }
    console.log(str);
};
dragonBall('卡洛特', '就是孫悟空');
dragonBall('悟天合體', '特南克斯', ',', '就是', '悟天克斯');
// 可在箭頭函式內透過...arg將參數成為函式，寫法精簡，參數不限
// 簡稱其餘參數，彈性大
// result: 卡洛特就是孫悟空
// 悟天合體特南克斯,就是悟天克斯

const myNumber = function (numA, numB) {
    numA = (typeof numA !== 'undefined') ? numA : 59;
    numB = (typeof numB !== 'undefined') ? numB : 59;

    console.log(numA, numB);
}
myNumber(31);
// 檢查參數，沒有傳的話給預設值
// result: 31 59

const fun = function(callback) {
    const i = Math.random() + 1;

    setTimeout(function() {
        console.log('我又跳進來了');
        if (typeof callback === 'function') {
            console.log('Enter');
            callback();
        }
    }, i * 1000);
}
fun();
// 可以callback function確保執行順序

const slamDunkArray = ['櫻木', '流川', '赤木', '三井', '宮城'];
    for (let i = 0; i < slamDunkArray.length; i++) {
        (function(x) {
            setTimeout(function(){
                console.log(slamDunkArray[i]);
            }, 1000 * x);
        })(i);
    }
// 註冊timer，每秒執行一次函式
// result: 櫻木
        // 流川
        // 赤木
        // 三井
        // 宮城

console.log(void (0));
// void就是接收任意的運算式或值，然後都回傳undefined
// result: undefined

// void function wtf(msg) {
//     console.log(msg);
// }
// wtf('what the fXXk');
// 出現wtf is not defined錯誤


//*******************************************//
// *** 以promise包裝流程
const eatBreakfast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Eating Breakfast');
            resolve('Breakfast');
        }, (Math.random() + 6) * 1000);
    });
}
const eatLunch = () => {
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            console.log('Eating Lunch');
            resolve('Lunch');
        }, (Math.random() + 1) * 1000);
    });
}
const eatDinner = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Eating Dinner');
            resolve('Dinner');
        }, (Math.random() + 1) * 1000);
    });
}
eatBreakfast()
    .then(eatLunch)
    .then(eatDinner);
// 決定執行的順序


//*******************************************//
const goSingapore = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('新加坡拓展市場');
            resolve('goSingapore');
        }, (Math.random() + 10) * 1000);
    });
}
const goHuZhimin = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('胡志明市拓展市場');
            resolve('goHuZhimin');
        }, (Math.random() + 10) * 1000);
    });
}
const goSeattle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('西雅圖拓展市場');
            resolve('goSeattle');
        }, (Math.random() + 10) * 1000);
    });
}
Promise.all([goSingapore(), goHuZhimin(), goSeattle()])
        .then(() => {console.log('公司人數滿千人')});
// 所有任務皆完成才執行下一步


//*******************************************//
const ValentinesDay = () => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log('情人節到了');
            resolve('ValentinesDay');
        }, (Math.random() + 1) * 1000);
    });
}
const Single1111Day = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1111單身節到了');
            resolve('Single1111Day');
        }, (Math.random() + 1) * 1000);
    });
}
const FathersDay = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('父親節到了');
            resolve('FathersDay');
        }, (Math.random() + 1) * 1000);
    });
}
Promise.race([ValentinesDay(), Single1111Day(), FathersDay()])
        .then(() => {console.log('就是要去購物')});
// 其中一個任務完成後就執行下一步，所有任務也都會執行

const cafePlaza = () => {
    return '奶香特調好喝!';
}   
async function myCoffee() {
    console.log('咖啡廣場');
    const result = await cafePlaza();
    console.log(result);
}
// 使用async搭配await，執行同步任務
// async加在function前，await則是加在function內的呼叫函式前
myCoffee();

//*** setTimeout與setInterval ***/
setTimeout(( () => {
    console.log('我是setTimeout，我只執行一次而已');
}), 1000);
let times = 0;
const interval = setInterval(( () => {
    console.log('我是setInterval，滿10次前我會一直執行下去');
    times ++;
    if (times === 10) {
        console.log('我是setInterval，我的時間到了');
        clearInterval(interval); // 取消serInterval
    }
}), 1000);

setTimeout(function () {
    console.log('進入執行緒後，我會比較晚出現');
}, 0);
console.log('我會比執行緒中的函式先出現');
// JavaScript裡，進入事件執行緒的任務，會先執行後面的動作之後才回來執行排程，避免效率延遲問題

// setTimeout()與setInterval()根據環境不同，與實際時間會有誤差
// 如要執行動畫，建議用requestAnimationFrame來取代之