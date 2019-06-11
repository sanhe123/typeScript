/**
 * 基础类型
 */

// 布尔值
let isDone:boolean = false;

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let str:string = '12323';
let sentence:string = `Hello, my name is ${str}.`

//数组
// :number[]表示有此类型元素组成的一个数组
let list:number[] = ['1',2,3];
//第二种方式是使用数组泛型，Array<元素类型>：
// let list:Array<string> = ['1','2','3'];
// console.log(list)

//Any:任何类型
let lest:ant[] = [1,'3'];

//viod:表示不是任何类型
function warnUser():void{
	console.log("This is my warning message")
}

//Never类型表示的是那些永不存在的值的类型。例如，
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或
// 箭头函数表达式的返回值类型；变量也可能是 never类型，
// 当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// error('gfg')
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// fail()
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
// 声明一个类declare
 function create(o: object | null): void{
	Object.create(o)
};
create({ prop: 0 }); // OK
create(null); // OK

//类型断言:相当于类型转换
//类型断言有两种形式。其一是‘尖括号’语法
let someValue:any = 'this is a string';
let strLength:number = (<string>someValue).length
//as语法
let strLength: number = (someValue as string).length;
// console.log(strLength)

/**
 *    接口
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
 * 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
 * 在TypeScript里，接口的作用就是为这些类型命名和为
 * 你的代码或第三方代码定义契约。
 */

// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }
// 
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

interface LabelledValue{
	label:string;
}

function printLabel(labelledObj:LabelledValue){
	console.log(labelledObj.label);
}

let myObj = {
	size:10,label:'Size 10 Object'
};

// printLabel(myObj)

// 可选属性

interface SquareConfig {
	color?:string,
	width?:number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});

// 只读属性----------------------------------------------??

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
console.log(p1.x)
//--------------------------------------------------------??

// 函数类型
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
// 它就像是一个只有参数列表和返回值类型的函数定义。
// 参数列表里的每个参数都需要名字和类型。

//-----------------------------接口-------------------------



