//函数的类型
// 函数定义方式有两种---函数声明以及函数表达式
//函数声明
// function sum(){
//     return x + y;
// }
// function sum(x:number,y:numvber):number{
//     return x + y;
// }
//函数表达式
// let mySum = function(x,y){
//     return x + y;
// }
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };
//用接口定义函数的形状
// interface Searchfunc{
//     (source: string,subString: string):boolean;
// }
// let mySearch: Searchfunc;
// mySearch = function(source:string,subString:string):boolean{
//     return source.search(subString) !== -1;
// }
// console.log(mySearch('abc','f'))
//可选参数
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了s
// function buildName(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
//参数默认值
// function buildName(firstName: string, lastName: string = 'Cat') {
//     return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
//剩余参数
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }
// let a = [];
// push(a, 1, 2, 3);
// 事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
// function push(array: any[], ...items: any[]) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }
// let a = [];
// push(a, 1, 2, 3);
//重载
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// 我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
//类型断言：可以用来手动指定一个值的类型
//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
// function getLength(something: string | number): number {
//     if ((<string>something).length) {
//         return (<string>something).length;
//     } else {
//         return something.toString().length;
//     }
// }
// 声明文件
// 什么是声明文件：通常我们会把声明语句放到一个单独的文件中（jquery.d.ts）
//加入我们想使用第三方库jQuery，一种常见的方式是在html 中通过script 标签引入jquery ，然后就可以使用全局变量$l .
//但是在ts中，编译器不知道$是什么鬼
//这时需要我们使用 declare var 来定义它的类型
// declare var jquery:(selector:string)=> any;
// jquery('#foo');
