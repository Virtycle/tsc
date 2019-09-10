"use strict";
// 函数需要指定参数的类型和返回值的类型，没有返回值指定:void类型
function buildName(firstName, lastName) {
    // return firstName + " " + lastName;
    return 1;
}
function buildName1(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
//可选参数用？，不能多于可选参数的数量,可选参数要放最后
function buildName2(firstName, secondName, lastName) {
    if (secondName === void 0) { secondName = "smith"; }
    if (lastName)
        return firstName + " " + secondName;
    else
        return firstName;
}
// console.log(buildName2('ly','tyc'))
//剩余运算符
function sum() {
    var all = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        all[_i] = arguments[_i];
    }
    var sumnum = 0;
    all.forEach(function (item) { return sumnum += item; });
    return sumnum;
}
console.log(sum(1, 2, 3, 4, 5));
function sum1(num) {
    var all = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        all[_i - 1] = arguments[_i];
    }
    var sumnum = 0;
    all.forEach(function (item) { return sumnum += item; });
    return sumnum;
}
console.log(sum1(1, 2, 3, 4, 5));
