/**
 * TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持
 * TypeScript 增加了代码的可读性和可维护性
类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
可以在编译阶段就发现大部分错误，这总比在运行时候出错好
增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等
TypeScript 非常包容
TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
即使不显式的定义类型，也能够自动做出类型推论
可以定义从简单到复杂的几乎一切类型
即使 TypeScript 编译报错，也可以生成 JavaScript 文件
兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取
 */

function greeter(person:string){
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

/*
原始数据类型在Typescript中的应用
*/ 

let isDone:boolean = false;

let num:number = 6;

let str:string = `我今年只有${num}岁`;

//javascript中没有空值的概念，但是在typescript中可以使用void表示没有任何返回值的函数

function alertName():void{
    alert('hh')
}

let u: undefined = undefined;
let n: null = null;

//任意值（如果是一个普通类型，在赋值过程中改变类型是不被允许的）
//如果是 any 类型，则允许被赋值为任意类型

// let myFavoriteNumber:any = 'seven';

// myFavoriteNumber = 7;

//联合类型
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// let myFavoriteNumber: string | number;

// function getLength(something:string|number):number{
//     return something.length;//length属性不是number类型的属性
// }

function getString(something: string | number): string {
    return something.toString();
}

//对象的类型 -- 接口
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
// 定义的变量比接口少了一些属性是不允许的,多一些属性也是不允许的
//赋值的时候，变量的形状必须和接口的形状保持一致。
// interface Person{
//     name: string;
//     age: number
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25
// }

//可选属性
// interface Person{
//     name: string;
//     age?:number
// }

// let tom: Person = {
//     name: 'Tom'
// }

//任意属性
//一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// interface Person{
//     name: string;
//     age?: number;
//     [propName: string]: any
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'
// };

//只读属性
//注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person{
    readonly id : number;
    name: string;
    age?: number;
    [propName: string]: any;
}

//数组的类型
// 【类型 + 方括号】表示法
// let fibonacci: number[] = [1,2,4,5];
//在该数组中不能使用除了number以外其他类型的数据

//数组泛型
// let fibonacci: Array<number> = [1, 1, 2, 3, 5];

//用接口表示数组
interface NumberArray{
    [index:number]:number;
}

let fibonacci: NumberArray = [1,2,34,4];

let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

//类数组

// 类数组（Array-like Object）不是数组类型，比如 arguments
// function sum(){
//     let args: number[] = arguments;
// }
// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.

// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
    let args: IArguments = arguments;
}
