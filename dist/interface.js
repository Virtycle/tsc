"use strict";
//接口  接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
//在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型，接口起到限制和规范的作用；
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fox = /** @class */ (function () {
    function Fox(name) {
        this.name = name;
    }
    Fox.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log(this.name + "moved..." + distanceInMeters);
    };
    return Fox;
}());
var Engineer = /** @class */ (function () {
    function Engineer(name) {
        this.name = name;
    }
    Engineer.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log(this.name + "moved..." + distanceInMeters);
    };
    Engineer.prototype.work = function () {
        console.log(this.name + "put out some codes...");
    };
    return Engineer;
}());
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.move = function (distanceInMeters) {
        console.log(this.name + "moved..." + distanceInMeters);
    };
    Human.prototype.work = function () {
        console.log(this.name + "put out some codes...");
    };
    return Human;
}());
var Engineers = /** @class */ (function (_super) {
    __extends(Engineers, _super);
    function Engineers(name) {
        return _super.call(this, name) || this;
    }
    Engineers.prototype.move = function (distanceInMeters) {
        console.log('balabala~');
        _super.prototype.move.call(this, distanceInMeters);
    };
    Engineers.prototype.work = function () {
        console.log('cachacacha~');
        _super.prototype.work.call(this);
    };
    return Engineers;
}(Human));
var Shopping = /** @class */ (function () {
    function Shopping() {
    }
    Shopping.prototype.eat = function () {
        console.log('女人就是吃吃吃');
    };
    Shopping.prototype.buy = function () {
        console.log('女人还会买买买');
    };
    return Shopping;
}());
var bigPigFoot = new Shopping();
var erPigFoot = new Shopping();
bigPigFoot.eat();
bigPigFoot.buy();
erPigFoot.eat();
erPigFoot.buy();
var Manage = /** @class */ (function () {
    function Manage() {
    }
    return Manage;
}());
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
