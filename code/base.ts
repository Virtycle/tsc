let age: number = 18
let nickname: string = "bob";
let isDone: boolean = false;
// 数组
let list2: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3]; /*数组泛型，Array<元素类型> */
// 元祖 ---已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number];
x = ['hello', 12];
console.log(x)


// 注意： ts只会在编译前报错，单不会阻止编译

//枚举

//  enum 枚举名 {
//     标识符[=整型常数],
//     标识符[=整型常数],
// } z括弧里可以不写 默认从 0开始
enum Color {Red=2, Green=5, Blue=7}
// 取下标
let c: Color = Color.Green;
console.log(c)
// 取标识符
let colorName: string = Color[2];
console.log(colorName)


//Any 任意类型 放弃了类型校验
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
let list: any[] = [1, true, "free"];

//null和undefined是所有类型的子类型
// 把 null和undefined赋值给number类型的变量 -当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// let num: number;
// console.log(num);
let num: number | undefined;
console.log(num);

// void 
function warnUser(): void {
    console.log("This is my warning message");
}

//never 
//Object
//类型断言 --- TypeScript会假设你，程序员，已经进行了必须的检查

let llllxxx: any = "this is a string";

let xxxxLength: number = (<string>llllxxx).length;
// 另一个为as语法：

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

