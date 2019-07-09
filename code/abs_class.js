// 这里我们用 '_Abs' 前缀来表明“抽象类”，但是并没有语法上的意义
class _AbsShape {
	
    constructor() {
        if (new.target === _AbsShape) {
            throw new Error("_AbsShape cannot be used to instantiate directly.");
        }
    }
    
    getArea() {}
}

// 类 Circle 继承自 _AbsShape 并且不是一个“抽象类”
class Circle extends _AbsShape {

    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    get Pi() {
        return 3.1415926;
    }
    
    getArea() {
        return Math.pow(this.radius, 2) * this.Pi;
    }
}

let circle5 = new Circle(5);
console.log(circle5.getArea());	// 78.539815

let shape1 = new _AbsShape();	// TypeError: _AbsShape cannot be used to instantiated directly.