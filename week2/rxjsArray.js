const numArray = [1, 2, 3, 4, 5, 43, 23, 55, 67, 32, 7, 59];

// filter()
const filterNum = numArray.filter(num => num < 10);
console.log(filterNum); // filter: 返回符合條件元素的陣列 output: [ 1, 2, 3, 4, 5, 7 ]

// find()
const findNum = numArray.find(num => num < 5);
console.log(findNum); // find: 返回第1個符合條件的值 output: 1

const politicArray = [
    {name: '郭台銘', age: 69},
    {name: '柯文哲', age: 60}, 
    {name: '王金平', age: 78}, 
    {name: '韓國瑜', age: 62}];

// forEach()
politicArray.forEach(p => {
    console.log(p.name + '今年年齡為' + p.age + '歲'); // forEach: 遍歷array中的所有元素
    // output: 郭台銘今年年齡為69歲
            // 柯文哲今年年齡為60歲
            // 王金平今年年齡為78歲
            // 韓國瑜今年年齡為62歲
});

// map
const mapArray = politicArray.map(m => {
    return m.name + '是' + m.age + '歲'
});
console.log(mapArray); // map: 遍歷array中元素並回傳新組合的陣列，須return值
// output :[ '郭台銘是69歲', '柯文哲是60歲', '王金平是78歲', '韓國瑜是62歲' ]

const arrLength = [{name: '加藤鷹', length: 15},
                    {name: '波特王', length: 30},
                    {name: '館長', length: 3}];
// every
const length10 = arrLength.every(l => l.length >= 10);
console.log(length10); // 是否皆符合條件 (長度10以上) output: false
const length3 = arrLength.every(l => l.length >= 3);
console.log(length3); // 是否皆符合條件 (長度3以上) output: true

// some
const length20 = arrLength.some(s => s.length >= 20);
console.log(length20); // 是否有其中一個符合條件 (長度20以上) output: true
const length30 = arrLength.some(s => s.length > 30);
console.log(length30); // 是否有其中一個符合條件 (長度超過30) output: false

// reduce
const scoreArray = [59, 60, 61, 60];
const lengthReducer = (a, b) => a + b;
const average = scoreArray.reduce(lengthReducer) / scoreArray.length;
console.log('平均分數為' + average + '分');
// output: 平均分數為60分