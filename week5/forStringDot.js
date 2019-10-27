    // anchor
    const tempString = 'Antekundumpo';
    const tempAnchor = tempString.anchor('Ant');
    console.log(tempAnchor);
    // 返回加上<a>標籤的與name的字串
    // result: <a name="Ant">Antekundumpo</a>

    // charAt
    const tempCharAt = tempString.charAt(5);
    console.log(tempCharAt);
    // 返回字串中指定位置的字
    // result: u

    // big
    const tempBig = tempString.big();
    console.log(tempBig);
    // 返回加上<big>標籤的字串，字體變大
    // result: <big>Antekundumpo</big>

    // blink
    const tempBlink = tempString.blink();
    console.log(tempBlink);
    // 返回加上<blink>標籤的字串，有閃爍效果
    // result: <blink>Antekundumpo</blink>
    
    const tempBold = tempString.bold();
    console.log(tempBold);
    // 返回加上<b>標籤的字串，有粗體效果
    // result: <b>Antekundumpo</b>

    const tempCharCodeAt = tempString.charCodeAt(0);
    console.log(tempString[0] + ': ' + tempCharCodeAt);
    // 返回字串位置的Unicode編碼
    // result: 
    // A: 65

    const tempChinese = '哈囉世界';
    const tempCodePointAt = tempChinese.codePointAt(0);
    console.log(tempChinese[0] + ': ' + tempCodePointAt);
    // 返回字串位置的UTF-16字碼指標
    // result: 
    // 哈: 21704

    const tempConcat = tempChinese.concat('就是Hello World!');
    console.log(tempConcat);
    // 連接不同字串的方法
    // result: 哈囉世界就是Hello World!

    const startsBoolean = tempString.startsWith('A');
    console.log(startsBoolean);
    // 回傳字串開頭是否為指定比對的字元
    // result: true

    const endsBoolean = tempString.endsWith('O');
    console.log(endsBoolean);
    // 回傳字尾是否為指定比對的字元
    // result: false

    const tempFixed = tempString.fixed();
    console.log(tempFixed);
    // 回傳加上<tt>標籤的字串，顯示效果為打字機字體
    // result: <tt>Antekundumpo</tt>

    const tempColor = tempString.fontcolor('red');
    console.log(tempColor);
    // 回傳加上css的字串，改變字體顏色
    // result:　<font color="red">Antekundumpo</font>

    const tempSize = tempString.fontsize(30);
    console.log(tempSize);
    // 回傳加上css的字串，改變字體大小
    // result: <font size="30">Antekundumpo</font>

    const tempIncludes = tempChinese.includes('世界');
    console.log(tempIncludes);
    // 回傳指定字元是否包含在字串裡
    // result: true

    const tempIndex = tempString.indexOf('n');
    console.log(tempIndex);
    // 回傳指定字元在字串中第一次出現的位置
    // result: 1

    const tempLastIndex = tempString.lastIndexOf('n');
    console.log(tempLastIndex);
    // 回傳指定字元在字串中最後一次出現的位置
    // result: 6

    const tempItalic = tempChinese.italics();
    console.log(tempItalic);
    // 回傳加上<i>標籤的字串，顯示效果為斜體
    // result: <i>哈囉世界</i>

    const tempLength = tempString.length;
    console.log(tempLength);
    // 回傳字串長度
    // result: 12

    const tempLink = tempString.link('www.google.com.tw');
    console.log(tempLink);
    // 回傳加上<a>標籤的字串，成為超連結
    // result: <a href="www.google.com.tw">Antekundumpo</a>

    const tempCompare = 'a'.localeCompare('b');
    console.log(tempCompare);
    // 回傳兩字串的比較結果，相同為0，不同為-1
    // result: -1

    const tempMatch = tempString.match('Ante');
    console.log(tempMatch);
    // 回傳字符或正規表達式匹配結果的值
    // result: [ 'Ante', index: 0, input: 'Antekundumpo', groups: undefined ]

    const tempNormalize = '\u1E9B\u0323'.normalize('NFD');
    console.log(tempNormalize);
    // 回傳當前字串經過指定Unicode標準化格式的新字串, 須為NFC, NFD, NFKC, NFKD其中之一
    // result: '\u017F\u0323\u0307'

    const tempRepeat = tempChinese.repeat(3);
    console.log(tempRepeat);
    // 回傳指定重覆次數的字串
    // result: 哈囉世界哈囉世界哈囉世界

    const tempReplace = tempChinese.replace('世界', 'World');
    console.log(tempReplace);
    // 取代指字的字串
    // result: 哈囉World

    const tempSearch = tempChinese.search('哈囉');
    console.log(tempSearch);
    // 返回是否與指定的字符串或正規表達式相匹配，符合返回0，不符合返回-1
    // result: 0

    const tempSlice = tempConcat.slice(2, 11);
    console.log(tempSlice);
    // 返回指定頭尾位置切斷後的字串
    // 原始字串：哈囉世界就是Hello World!
    // result: 世界就是Hello

    const tempSmall = tempChinese.small();
    console.log(tempSmall);
    // 返回加上<small>標籤的字串，字體縮小效果
    // result: <small>哈囉世界</small>

    const splitString = '1 3 5 7 9';
    const tempSplit = splitString.split(' ');
    console.log(tempSplit);
    // 返回經由指定字符分割後的字串陣列
    // result: [ '1', '3', '5', '7', '9' ]

    const tempStrike = tempChinese.strike();
    console.log(tempStrike);
    // 返回加上<strike>標籤的字串，加上刪除線效果
    // result: <strike>哈囉世界</strike>

    const tempSub = tempChinese.sub();
    console.log(tempSub);
    // 返回加上<sub>標籤的字串，有下標效果
    // result: <sub>哈囉世界</sub>

    const tempSubstr = tempString.substr(0, 4);
    console.log(tempSubstr);
    // 從開始結取特定的字串長度，範圍參數可以使用負數
    // result: Ante

    const tempSubstring = tempString.substring(4, tempString.length);
    console.log(tempSubstring);
    // 從開始結取至設定的結尾字符前一個位置，範圍參數不能使用負數
    // result: kundumpo

    const tempSup = tempChinese.sup();
    console.log(tempSup);
    // 返回加上<sup>標籤的字串，有上標效果
    // result: <sup>哈囉世界</sup>

    const tempToLocaleLowerCase = 'HELLO WORLD'.toLocaleLowerCase();
    console.log(tempToLocaleLowerCase);
    // 按照本地方式返回小寫字串
    // result: hello world

    const tempToLowerCase = 'HELLO WORLD'.toLowerCase();
    console.log(tempToLowerCase);
    // 返回小寫字串
    // result: hello world

    const tempToLocaleUpperCase = 'hello world'.toLocaleUpperCase();
    console.log(tempToLocaleUpperCase);
    // 按照本地方式返回大寫字串
    // result: HELLO WORLD

    const tempToUpperCase = 'hello world'.toUpperCase();
    console.log(tempToUpperCase);
    // 返回大寫字串
    // result: HELLO WORLD

    const tempToString = tempString.toString(8);
    console.log(tempToString);
    // 除了null和undefined之外，皆可透過此方法轉成字串型別
    // 可指定方法的參數，轉成不同進位制的字串
    // 二進位制：.toString(2);  八進位制：.toString(8);
    // 十進位制：.toString(10); 十六進位制：.toString(16);
    // String()可以將null和undefined轉換為字串，但是沒法轉進位制字串
    // result: Antekundumpo

    const origin = ' ' + tempChinese + ' ';
    console.log('前' + origin + '後');
    // result: 前 哈囉世界 後
    const tempTrim = origin.trim();
    console.log('前' + tempTrim + '後');
    // 用來去除字串前後的空白，此方法並不會改變原來的字串，而是傳回一個新的字串
    // result: 前哈囉世界後

    const tempValueOf = tempString.valueOf();
    console.log(tempValueOf);
    // 返回一個string物件的原始值
    // result: Antekundumpo