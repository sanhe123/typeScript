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
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
/*
原始数据类型在Typescript中的应用
*/
var isDone = false;
var num = 6;
var str = "\u6211\u4ECA\u5E74\u53EA\u6709" + num + "\u5C81";
//javascript中没有空值的概念，但是在typescript中可以使用void表示没有任何返回值的函数
function alertName() {
    alert('hh');
}
var u = undefined;
var n = null;
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
function getString(something) {
    return something.toString();
}
var fibonacci = [1, 2, 34, 4];
var list = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
//类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments
// function sum(){
//     let args: number[] = arguments;
// }
// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
    var args = arguments;
}
