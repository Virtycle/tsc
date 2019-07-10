
// 1+1 =2我们已经学会了， 掌握了基本原理，让我们看一个应用实例

//把一个对象身上各个字段的Promise<T>去掉Promise
type Depromisify<T> = Promise<{ [K in keyof T] : T[K] extends Promise<infer R> ? R : T[K]}>
declare function promiseProps<T>(t: T): Depromisify<T>
async function test() { 
    var test = await promiseProps({
    foo: 123,
    bar: Promise.resolve('promise')
    })
    test.bar // string
    test.foo // number
}
//这里用了mapping type, infer和conditional type。用TS里conditional 
//type的性质(covariant/contravariant inference + distributive law) , 来把 union type 转成 intersection type.
type UnionToIntersection<U> = 
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) 
    ? I : never
type Weird = UnionToIntersection<string | number | boolean>
// equivalent to  type Weird = string & number & true & false

//用在mixin上
type Ctor<T> = { new(...args: any[]): T}
declare function mixin<T extends Ctor<any>[]>(...traits: T):
    Ctor<UnionToIntersection<InstanceType<T[number]>>>

class Flyable { 
    fly() { }
}
class Walkable {
    walk() {}
}

class Mixed extends mixin(Flyable, Walkable) {
    test() {
        this.fly() // ok
        this.walk() // ok
    }
}