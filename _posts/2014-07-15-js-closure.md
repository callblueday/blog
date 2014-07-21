---
layout: post
title:  "js 闭包小示例"
date:   2014-07-15 15:30:40
comments: true
categories: code
---

<style>
  li {list-style: none;}
</style>
  


<button class="clickme" onclick="showInfo()">点我</button>
<p id="demo">这里显示结果</p>

<script type="text/javascript">
  var setup = function() { // level1
    var count = 0; // 一级函数的变量
    return function() { // level2
      return (count += 1);
    }
  }
  var next = setup();

  function showInfo() {
    document.getElementById("demo").innerHTML = next();
  }
</script>


闭包示例代码如下
----------------

```js
  var setup = function() { // level1
    var count = 0; // 一级函数的变量
    return function() { // level2
      return (count += 1);
    }
  }
  var next = setup();

  function showInfo() {
    document.getElementById("demo").innerHTML = next();
  }
```

关于闭包的几点感受
------------------

1. 要想获得值，必须用 return 返回
2. 函数被返回是不会被执行的
3. `()` 是用来执行函数的符号
4. 通过一级函数的入口，得到二级函数，再访问到一级函数的变量，这样，该变量只保留在该一级函数的内部，而不需要放在全局中。
5. 懂得匿名函数，即是没有名字的函数，如：

```js
  function() { // level2
    return (count += 1);
  }
```

这些知识点组合起来，就形成了闭包技巧。


闭包的用处
----------

1. 一个是前面提到的可以读取函数内部的变量
2. 另一个就是让这些变量的值始终保持在内存中，示例如下

```js
  function f1(){
    var n=999;
    nAdd=function(){n+=1}
    return function f2(){
      alert(n);
    }
  }
  var result = f1();
  result(); // 999
  nAdd();
  result(); // 1000
```

  f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。
  "nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。
  

  缺点:
  内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

</body>
</html>