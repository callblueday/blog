---
layout: post
title:  "js原生方法获取滚动条到页面顶部的高度"
date:   2014-12-09 22:43:10
categories: code
---

在开发的过程中，总会碰到要获取滚动条滚动的距离情形，网上的很多方法虽然能实现，却无法兼容各浏览器。找到了一个各浏览器中都表现一致的方法：
    
```js
    var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
```

示例代码如下：
    
css:

```css
    #text {
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #000;
        color: #fff;
        position: fixed;
        left: 0;
        top: 0;
    }
```
html:

```html
    <div id="text"></div>
```

js:

```js
    (function() {
        function getScrollTop(){  
            var scrollTop = 0;  
            var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

            return scrollTop;  
        }

        if(window.addEventListener) {
            window.addEventListener("scroll", function() {
                document.getElementById("text").innerHTML = getScrollTop();
            });
        } else {
             window.attachEvent ("onscroll", function() {
                document.getElementById("text").innerHTML = getScrollTop();
                console.log(getScrollTop())
            });
        }
    })();
```

<style>
    #text {
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #000;
        color: #fff;
        position: fixed;
        left: 0;
        top: 0;
    }
    p.demo {
        width:500px;
        margin: 0 auto;
    }
</style>
</head>

<div id="text"></div>

<script>
(function() {
    function getScrollTop(){  
        var scrollTop = 0;  
        var doc = document.documentElement;
        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        return scrollTop;  
    }

    if(window.addEventListener) {
        window.addEventListener("scroll", function() {
            document.getElementById("text").innerHTML = getScrollTop();
        });
    } else {
         window.attachEvent ("onscroll", function() {
            document.getElementById("text").innerHTML = getScrollTop();
            console.log(getScrollTop())
        });
    }
})();
</script>






参考：<a href="http://help.dottoro.com/ljnvjiow.php">http://help.dottoro.com/ljnvjiow.php</a>
