function NBAPLayer(name, number, value) {
    this.name = name;
    this.number = number;
    this.value = value;

    this.intro = function () {
        console.log('The MVP is ' + this.name + '.');
    };
}

const Kobe = new NBAPLayer('Kobe', 24, 99);
Kobe.intro(); // result: The MVP is Kobe.

const LBJ = new NBAPLayer('LBJ', 23, 98);
LBJ.intro(); // result: The MVP is LBJ.
// 借用函式作為建構式物件，類似class概念
// new一個物件時，透過new NBAPlayer這個動作，傳回的物件會有name, number和value屬性
// 接著JavaScript在背景執行NBAPLayer.call(Kobe, 'Kobe', 24, 99);
// 將Kobe作為this的參考物件，接著把屬性新增Kobe物件中

const ONeal = NBAPLayer("O'Neal", 34, 98);
// ONeal.intro();
// 如果沒有new物件時，只當作一般函式呼叫，並未回傳任何東西，為undefined
// 且this指向window，new物件時才指向該物件

// 也可透過object.create()建立物件
const Player = {
    name: 'Default Name',
    number: 0,
    value: 0,
    intro: function () {
        return 'The MVP is ' + this.name + '.';
    }
};
const Harden = Object.create(Player);
console.log(Harden.name); // result: Default Name
// prototype的繼承，會將原本存在Player內的原形物件特性通通繼承下來

Harden.name = 'James Harden';
console.log(Harden.name); // result: James Harden
// 可自由修改屬性，不會影響到原型物件

// 可以在Object.create()建立一個新物件時就給它預設值
const Curry = Object.create(Player, {
        name: {
            writable: true,
            configurable: true,
            value: 'Stephen Curry'
        },
        number: {
            writable: true,
            configurable: true,
            value: '30'
        },
        value: {
            writable: true,
            configurable: true,
            value: 95
        },
    });
console.log(Curry.name); // result: Stephen Curry

// 屬性描述器，共分為6種
// *value: 屬性的值，一定得設定
// *writable: 定義屬性是否可以改變，如果是false那就是唯讀屬性，可不設定，預設值true
// *enumerable: 定義物件內的屬性是否可以透過for-in語法或是Object.keys()來迭代列舉，可不設定，預設值true
// *configurable: 定義屬性是否可以被刪除、或修改屬性內的writable、enumerable及configurable設定，可不設定，預設值true
// *get: 物件屬性的getter function，可不設定，預設值undefined
// *set: 物件屬性的setter function，可不設定，預設值undefined

// ES5開始可以用Object.defineProperty()來修改屬性描述器，可設定一組或多組屬性
Object.defineProperty(Curry, 'name', {
    value: 'S.Curry'
});
console.log(Curry.name); // result: S.Curry

// Object.getOwnPropertyDescriptor可檢查物件屬性描述器的狀態
const curryName = Object.getOwnPropertyDescriptor(Curry, 'name');
console.log(curryName);
// result: { value: 'S.Curry',
          // writable: true,
          // enumerable: false,
          // configurable: true }

const Westbrook = {};
Object.defineProperty(Westbrook, 'name', {
    get: function () {                                                                                                                                                                                                                                                                         
        console.log('get ' + this._name);
        return this._name;
    },
    set: function (name) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        console.log('set ' + this._name);
        this._name = name;
    }
}); 
// 如果定義了get與set方法，表示要自行控制屬性的存取，
// 因此就不能再去定義value或writable的屬性描述 

//***// 透過Object.create(null)與{}建立物件的差別
const Melo = {
    name: 'Melo'
}
console.log(Melo.hasOwnProperty('name'));
// result: true
console.log(Melo.toString());
// result: [object Object]
// 以此種方法建立物件時，物件會繼承Object的方法

const Camelo = Object.create(null, {
    name: {
        writable: true,
        configurable: true,
        value: 'Camelo'
    }
});
// 此方法只會有預設指定的name屬性，不會有原生Object所提供的其他屬性與方法

const Simmons = new String('Simmons');
// new出字串型別的包裏物件
console.log(typeof Simmons); // result: object
console.log(Simmons instanceof String); // result: true
// instanceof可用來確認基本型別
console.log(Simmons.valueOf()); // result: Simmons
// 取得值

// 物件裡有其它屬性，但處理運算時的效率遠低於一般基本型別

// 可透過基本型別包裏器把資料做型別轉換
console.log(Number('NBA')); // result: NaN
console.log(Boolean('')); // result: false
console.log(String(null)); // result: 'null'

// Math()物件並非建構式，無法由new來產生新物件，且所有屬性都是唯讀的，因此屬性皆以大寫表示
console.log(Math.PI); // result: 3.141592653589793
console.log(Math.SQRT2); // result: 1.4142135623730951

// Date()日期時間建構器函式，只能由new Date()作為建構器來產生
const newDate = new Date('2019-11-21');
console.log(newDate); // result: 2019-11-21T00:00:00.000Z
// 傳入一個日期格式的字串，有格林威治時間與本地時間的差距問題，相差8小時
const myDate = new Date(2019, 10, 21, 14, 43, 35, null);
console.log(myDate); // result: 2019-11-21T06:43:35.000Z
// 遵循規格用法new出日期物件比較安全

// JavaScript的Date物件有個特殊特性
console.log(new Date(2019, 12, 31)); // 日期從0開始，應此月份傳入12實際上是2019年的第13個月
// result: 2020-01-30T16:00:00.000Z
// 要是在不正確日期範圍內的數字，會自動轉換成對應的時間

// 經由這個特殊特性，可以用來判斷是否為閨月
function isLeapYear(year) {
    return new Date(year, 2, 0).getDate() === 29;
    // 傳入3月的第0天，會自動轉換為2月最後一天
    // 由此判斷是否為閨月
}
const year2020 = isLeapYear(2020);
console.log(year2020); // result: true
const year2019 = isLeapYear(2019);
console.log(year2019); // result: false

// 原型鏈繼承
const Jordan = { fadeAway: true }; // 後仰跳投是喬丹的絕招
console.log('FadeAway in MJ? ' + ('fadeAway' in Jordan)); 
// result: FadeAway in MJ? true
const Ginobili = { euroStep: true }; // 歐洲步是吉諾布里的拿手絕活
console.log('EuroStep in Ginobili? ' + ('euroStep' in Ginobili));
// result: EuroStep in Ginobili? true
const Beginer = {  }; // 籃球素人
Object.setPrototypeOf(Beginer, Jordan); // 繼承喬丹的原型
console.log('FadeAway in Beginer? ' + ('fadeAway' in Beginer));
// result: FadeAway in Beginer? true
Object.setPrototypeOf(Beginer, Ginobili); // 繼承吉諾布里的原型
console.log('EuroStep in Beginer? ' + ( 'euroStep' in Beginer));
// result: EuroStep in Beginer? true
console.log('FadeAway in Beginer? ' + ('fadeAway' in Beginer));
// result: FadeAway in Beginer? false
// 但是喬丹的後仰跳投絕活就失去了，因為同一個物件無法指定兩種原型物件

// 原型鏈可以解決這個問題，只要Ginobili與Jordan互相繼承就可以了
Object.setPrototypeOf(Ginobili, Jordan);
console.log('FadeAway and EuroStep both in Beginer? ' + ('euroStep' in Beginer && 'fadeAway' in Beginer));
// result: FadeAway and EuroStep both in Beginer? true

// prototype - 最頂層的原型物件
// 當JavaScript找不到某物件的屬性是，會藉由Object.prototype原型物件往上尋找
let Miller = function () {};
Miller.prototype.skill = function () {
    return 'trash talk';
}
const RayGun = Miller();
console.log(RayGun); // result: undefined
// 直接呼叫函式，沒有回傳東西
const Green = new Miller();
console.log(Green.skill()); // result: trash talk
// 透過new關鍵字建立物件，可透過原型呼叫skill()

// 如果在建構式中建立一個同名的實例方法
Miller = function () {
    this.skill = function () {
        return 'just shoot';
    }
}
const shooter = new Miller();
console.log(shooter.skill()); // result: just shoot
// 當物件實體與原型同時擁有同樣的屬性或方法時，會優先存取自己的
// 物件本身或更上層的原型物件如writable屬性為false，則物件會多出一個唯讀的屬性
// 物件本身或更上層的原型物件如果為設值器setter，那麼呼叫的永遠是設值器，屬性也無法重新定義

// hasOwnProperty()可以檢查是否為物件本身所有
console.log(Jordan.hasOwnProperty('fadeAway')); // result: true
console.log(Beginer.hasOwnProperty('euroStep')); // result: false
console.log(Beginer.hasOwnProperty('fadeAway')); // result: false

// 大多數瀏覽器都有提供__proto__屬性，方便取得原型物件
const Reggie = function (name) {
    this.name = name;
}
const Mike = new Reggie('Miller');
console.log(Mike.__proto__); // result: Reggie {}
console.log(Reggie.prototype); // result: Reggie {}

// 每個函式被建立後，都會自動產生一個隱藏的prototype屬性，「指向」這個函式的原型物件

// Object.create()的實作原理
Object.create = function (proto) {
    function F() { }
    F.prototype = proto;
    return new F();
}
// JavaScript的內建物件實際上是繼承自Object.prototype而來
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// result: true
console.log(Function.prototype.__proto__ === Object.prototype);
// result: true
// 可以看出在原型鏈內下層物件的__proto__屬性或是透過Object.getPrototypeOf()取得的物件
// 實際上會指向上層物件的prototype屬性，可以看出它們之間的繼承關係


//***/ ES5時代的偽class
function President(name) {
    this.name = name;
}
President.prototype.intro = function () {
    return '明年520進駐凱達格蘭大道豪宅的是' + this.name;
}
const boldMan = new President('韓國瑜');
console.log(boldMan.intro());
// result: 明年520進駐凱達格蘭大道豪宅的是韓國瑜

//***/ ES6的class
class Leader {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        return '明年520進駐凱達格蘭大道豪宅的是' + this.name;
    }
}
Leader.prototype.getAge = function () { // 可以透過prototype方式擴充新方法
    return this.age;
}
const KSMayor = new Leader('韓國瑜', 62);
console.log(KSMayor.intro());
// result: 明年520進駐凱達格蘭大道豪宅的是韓國瑜
console.log(KSMayor.getAge());
// result: 62

console.log(typeof Leader);
// result: function
const isEqual = 
Leader === Leader.prototype.constructor;
console.log(isEqual); // result: true

// Leader原型物件不是function，不能被呼叫
// Leader();
// TypeError: Class constructor Leader cannot be invoked without 'new'

/***/ 
// 函式有hoisting，而class不能
// 直接呼叫class，不是透過new關鍵字呼叫
// class預設為嚴格模式
// ES6的class內定義的所有方法，預設無法被列舉
// 每個class皆內建有constructor方法

// 雖然constructor預設會回傳this物件實體，不過仍可以指定另一個新的物件回傳
class Lego {
    constructor(name) {
        this.name = name;

        // 回傳另一個新物件
        return Object.create(null);
    }
}

// ES6的class相當於ES5的prototype
// 加上靜態方法，該方法則不會被繼承
class RepublicOfChina {
    constructor(name) {
        this.name = name;
    }

    static Taiwan() {
        return 'unique';
    }
}

const PeopleOfChina = new RepublicOfChina('PeopleOfChina');
console.log(RepublicOfChina.Taiwan());
// result: unique

// console.log(RepublicOfChina.Taiwan());
// result: TypeError: RepublicOfChina.Taiwan is not a function

// 用extends來繼承則可以繼承靜態方法
class ChineseTaipei extends RepublicOfChina {
}
console.log(ChineseTaipei.Taiwan());
// result: unique

// 改寫class
class Taiwan {
    static about() {
        return this.name;
    }
}

class GhostIsland extends Taiwan {}

console.log(Taiwan.about());
// result: Taiwan
console.log(GhostIsland.about());
// result: GhostIsland
// this關鍵字指的是class本身而非實體
// 判斷this的依據是看呼叫的當下而非宣告的時機

// 如果在繼承者的class裡新增一個靜態方法，而該方法去呼叫super.about()
class TaiwanGhost extends Taiwan {
    static about2() {
        return super.about();
    }
}

console.log(TaiwanGhost.about2());
// result: TaiwanGhost
// this要看執行當下的物件是誰，而不是由哪個物件所宣告

/** 改寫getter與setter */
// ES5
const person = {};

Object.defineProperty(person, 'name', {
    get: function () {
        console.log('get');
        return this._name_;
    },
    set: function (name) {
        console.log('set');
        this._name_ = name;
    }
});

// ES6
class Person {
    constructor(name) {
        this.name = name;
        this._address = 'Taipei';
    }

    get address() {
        console.log('get');
        return this._address;
    }

    set address(value) {
        console.log('set');
        this._address = value;
    }
}