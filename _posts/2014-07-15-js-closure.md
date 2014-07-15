---
layout: post
title:  "js 闭包小示例"
date:   2014-06-27 17:35:40
categories: code
---

<style>
  li {list-style: none;}
</style>


  <button class="clickme" onclick="showInfo()">点我</button>
  <p id="demo">这里显示结果</p>

  ```

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
  
  <p>
    关于闭包的几点感受：
    <p>1. 要想获得值，必须用 return 返回</p>
    <p>2. 函数被返回是不会被执行的</p>
    <p>3. `()` 是用来执行函数的符号</p>
    <p>4. 通过一级函数的入口，得到二级函数，再访问到一级函数的变量，这样，该变量只保留在该一级函数的内部，而不需要放在全局中。</p>

    这些知识点组合起来，就形成了闭包技巧。
  </p>


    <script>
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

</body>
</html>