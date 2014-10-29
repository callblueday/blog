---
layout: post
title:  "js 使用提升"
date:   2014-10-29 10:03:40
categories: code
---

1. 公用或者需要重复使用的部分，尽量减少其中的判断逻辑，
方法是，将判断逻辑移出，使其只运行一次，而不用每次都运行。

2. 使用`预定义执行结构`方法，预先构造函数执行结构，在具体使用的时候，只需要按照规则不断增加函数实例即可

        // 函数实例
        var methods = [];
        function a(data) { console.log(data + 1)}
        function b(data) { console.log(data + 2)}
        methods.push(a);
        methods.push(b);

        (function(fns) {
            var data = 1;
            // 函数执行结构
            fns.forEach(function(fn){
                        fn(data);
                    });
        })(methods);

        // 输出结果是
        2
        3

    这样做的好处是，代码的组织安排上，不必一定要遵循`从头到尾`的线性结构，使代码的组织结构更灵活。


3. js执行过程中，函数的执行顺序影响很大，主要注意方法的同步、异步调用。

4. js的开发中，key-value 的使用效率最高（因为实际上就是赋值操作），因此需要尽可能想办法将代码的结构，组织成键值对的形式进行使用。