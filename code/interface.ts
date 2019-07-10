//接口  接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
//在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型，接口起到限制和规范的作用；

//定义 ---关键字是interface

//属性（对象）接口 ---对传入对象的约束（属性的约束） 可以用于约束函数传参

//写的分号
interface FullName {
    firstName: string;
    secondName?: string;
}

function printName(name:FullName):void {
    console.log(name.firstName + name.secondName)
}
printName({
    firstName: 'Li',
    // secondName: 'Lei',
    age: 12
});

//函数接口  用于约束函数参数和返回值

interface Encrypt {
    (key: string, value: string): string;
}

let md5: Encrypt = function (a: string, b: string): string {
    return a + b; //假设就是md5算法
}

let sha1: Encrypt = function (a: string, b: string): string {
    return a + b; //假设就是sha1算法
}


//类接口  实现接口

interface Animal {
    name: string;
    move(distanceInMeters: number):void;
}

class Fox implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters = 5) {
        console.log(this.name +"moved..." + distanceInMeters);
    }
}

//接口的继承
interface Person extends Animal {
    work(): void;
}

class Engineer implements Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters = 5) {
        console.log(this.name +"moved..." + distanceInMeters);
    }
    work() {
        console.log(this.name +"put out some codes...");
    }
}

class Human implements Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters:number) {
        console.log(this.name +"moved..." + distanceInMeters);
    }
    work() {
        console.log(this.name +"put out some codes...");
    }
}

class Engineers extends Human implements Person {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number) {
        console.log('balabala~')
        super.move(distanceInMeters);
    }
    work() {
        console.log('cachacacha~')
        super.work();
    }
}

interface Food {
    eat():void;
}
interface Gold {
    buy():void;
}
class Shopping implements Food, Gold {
    eat() {
        console.log('女人就是吃吃吃')
    }
    buy() {
        console.log('女人还会买买买')
    }
}
let bigPigFoot: Food = new Shopping();
let erPigFoot: Gold = new Shopping();

bigPigFoot.eat();
bigPigFoot.buy();
erPigFoot.eat();
erPigFoot.buy();
//可索引接口  用于约束对象和数组
interface StringArray {
    [index: number]: string;
}
  
let myArray: StringArray;

myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];