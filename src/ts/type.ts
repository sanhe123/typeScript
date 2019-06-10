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
console.log(list)

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
console.log(strLength)



