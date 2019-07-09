"use strict";
var age = 18;
var nickname = "bob";
var isDone = false;
// 数组
var list2 = [1, 2, 3];
var list1 = [1, 2, 3]; /*数组泛型，Array<元素类型> */
// 元祖 ---已知元素数量和类型的数组，各元素的类型不必相同
var x;
x = ['hello', 10];
console.log(x);
// 注意： ts只会在编译前报错，单不会阻止编译
//枚举
//  enum 枚举名 {
//     标识符[=整型常数],
//     标识符[=整型常数],
// } z括弧里可以不写 默认从 0开始
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// 取下标
var c = Color.Green;
// 取标识符
var colorName = Color[2];
//Any 任意类型 放弃了类型校验
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var list = [1, true, "free"];
//null和undefined是所有类型的子类型
// 把 null和undefined赋值给number类型的变量 -当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// let num: number;
// console.log(num);
var num;
console.log(num);
// void 
function warnUser() {
    console.log("This is my warning message");
}
//never 
//Object
//类型断言 --- TypeScript会假设你，程序员，已经进行了必须的检查
var llllxxx = "this is a string";
var xxxxLength = llllxxx.length;
// 另一个为as语法：
var someValue = "this is a string";
var strLength = someValue.length;
