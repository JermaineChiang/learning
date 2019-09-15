// 變數練習
// var 、 const 、 let 

function abc() {
    console.log('區域內xVar: ' + x);
    var x = 3;
    // var宣告俱有提升hoisting效果，後來再宣告也可正常執行 (試用於ES5環境)
    var x = 0; // var的變數可以重覆宣告，進行覆蓋 (試用於ES5環境)

    let y; // let宣告時可以不賦予值
    //const bad; // const如無宣告預設值會出錯
    const z = 6; // const宣告時須有預設值
    console.log('yLet: ' + y);
    console.log('zConst: ' + z);
}

console.log('xVar: ' + x);  // var宣告可以在scope外執行 (試用於ES5環境)

abc();