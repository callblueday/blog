---
layout: post
title:  "requestAnimationFrame"
date:   2014-12-18 16:43:10
categories: code
---

<div id="test" style="width:1px;height:20px;background:#0f0;line-height:20px;">0%</div>
<input type="button" value="Run" id="run"/>

<script>
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var start = null;
    var ele = document.getElementById("test");
    var progress = 0;

    function step(timestamp) {
        progress += 1;
        ele.style.width = progress + "%";
        ele.innerHTML=progress + "%";
        if (progress < 100) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
    document.getElementById("run").addEventListener("click", function() {
        ele.style.width = "1px";
        progress = 0;
        requestAnimationFrame(step);
    }, false);
</script>


```html
<div id="test" style="width:1px;height:20px;background:#0f0;line-height:20px;">0%</div>
<input type="button" value="Run" id="run"/>
```

```js
<script>
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var start = null;
    var ele = document.getElementById("test");
    var progress = 0;

    function step(timestamp) {
        progress += 1;
        ele.style.width = progress + "%";
        ele.innerHTML=progress + "%";
        if (progress < 100) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
    document.getElementById("run").addEventListener("click", function() {
        ele.style.width = "1px";
        progress = 0;
        requestAnimationFrame(step);
    }, false);
</script>
```

参考：http://www.cnblogs.com/Wayou/p/requestAnimationFrame.html