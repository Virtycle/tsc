
// 函数需要指定参数的类型和返回值的类型，没有返回值指定:void类型
function buildName(firstName: string, lastName: string):string {
    return firstName + " " + lastName;
    // return 1;
}
function buildName1(firstName: string, lastName: string):void {
    console.log(firstName + " " + lastName) ;
}
//可选参数用？，不能多于可选参数的数量,可选参数要放最后

function buildName2(firstName: string, secondName = "smith", lastName?: string) {
    if (lastName)
        return firstName + " " + secondName;
    else
        return firstName;
}
// console.log(buildName2('ly','tyc'))

//剩余运算符
function sum(...all:number[]):number {
    let sumnum:number = 0;
    all.forEach(item => sumnum+=item);
    return sumnum;
}
console.log(sum(1,2,3,4,5));

function sum1(num:number,...all:number[]):number {
    let sumnum:number = 0;
    all.forEach(item => sumnum+=item);
    return sumnum;
}
console.log(sum1(1,2,3,4,5));