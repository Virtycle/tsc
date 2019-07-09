背景：   Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，
        使用 Go 语言代替 C++ 重新编写跨平台底层内核驱动，上层仍然使用 V8 引擎，最终提供一个安全的 TypeScript 运行。
        typescript对angular和react有着优良的支持，在使用react编写代码的过程中，同时尤雨溪也在用typescript对Vue3.0进行重写。
        之前尤雨溪也在知乎上说压flow压错了宝，typescript真香https://www.zhihu.com/question/310485097/answer/591869966。

介绍：  它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程
 
 

安装
        1 装包 npm install -g typescript
        2 tsc --init 生成tsconfig文件

基本数据类型：
        Number:数值类型;  支持十进制和十六进制字面量，ES6中引入的二进制和八进制字面量
        string : 字符串类型; 支持反引号
        Boolean: 布尔类型；
        enum：枚举类型；
        any :  任意类型；
        Array : 数组类型;
        Tuple : 元祖类型；
        Null Undefined：空类型;
        void：类型；没有类型，函数没有返回值
        never 类型