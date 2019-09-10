"use strict";
//泛型 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型
//先看下没有泛型 返回值和参数可能不是同一类型
function identity(arg) {
    return arg;
}
//支持了 未来的类型，保证返回值和参数是同一类型
function identity1(arg) {
    return arg;
}
