/**
 * 基础类型
 */
// 布尔值
var isDone = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var str = '12323';
var sentence = "Hello, my name is " + str + ".";
//数组
// :number[]表示有此类型元素组成的一个数组
var list = ['1', 2, 3];
//第二种方式是使用数组泛型，Array<元素类型>：
// let list:Array<string> = ['1','2','3'];
// console.log(list)
//Any:任何类型
var lest = [1, '3'];
//viod:表示不是任何类型
function warnUser() {
    console.log("This is my warning message");
}
//Never类型表示的是那些永不存在的值的类型。例如，
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或
// 箭头函数表达式的返回值类型；变量也可能是 never类型，
// 当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// error('gfg')
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// fail()
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// Object
// 声明一个类declare
function create(o) {
    Object.create(o);
}
;
create({ prop: 0 }); // OK
create(null); // OK
//类型断言:相当于类型转换
//类型断言有两种形式。其一是‘尖括号’语法
var someValue = 'this is a string';
var strLength = someValue.length;
//as语法
var strLength = someValue.length;
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10, label: 'Size 10 Object'
};
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
p1.x = 5; // error!
console.log(p1.x);
//--------------------------------------------------------??
// 函数类型
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
// 它就像是一个只有参数列表和返回值类型的函数定义。
// 参数列表里的每个参数都需要名字和类型。
//-----------------------------接口-------------------------
