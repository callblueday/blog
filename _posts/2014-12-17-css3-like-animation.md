---
layout: post
title:  "css3 点赞小动画"
date:   2014-12-17 15:35:10
categories: code
---

<style>
    .like {
        margin: 50px auto;
        position:relative;
        width: 30px;
        height: 29px;
        background:url(/assets/css3-like/like-icon.png) no-repeat center;
    }
    .ani {
        width:30px;
        height:29px;
        position:absolute;
        right:0;
        bottom:0px;
        background-size:100%; 
    }
    .ani-active {
        background:url(/assets/css3-like/ani-active.png) no-repeat center;
        opacity:0;
        -webkit-transform: translate(0, -50px);
        -ms-transform: translate(0, -50px);
        -o-transform: translate(0, -50px);
        transform: translate(0, -50px);

        -webkit-transition: 1.5s;
        -ms-transition: 1.5s;
        -o-transition: 1.5s;
        transition: 1.5s;
    }
</style>

<div onclick="like()" class="like">
    <i class="ani"></i>
</div>

<script>
    function like() {
        var ani =  event.currentTarget.children[0]; // event.currentTarget指事件实际绑定的元素，和event.target有区别，event.target是事件发生时点击的点所属于的元素。

        ani.setAttribute('class', 'ani ani-active');
        setTimeout(function() {
            ani.style.display = "none";
        }, 800);

        setTimeout(function() {
            ani.setAttribute('class', 'ani');
            ani.style.display = "block";
        }, 800);
    }
</script>


点赞小动画，主要使用的是css3的transform:translate属性来处理，实现很简单有趣。



html：

```html
<div onclick="like()" class="like">
    <i class="ani"></i>
</div>
```

css：

```css
.like {
    margin: 50px auto;
    position:relative;
    width: 30px;
    height: 29px;
    background:url(/assets/css3-like/like-icon.png) no-repeat center;
}
.ani {
    width:30px;
    height:29px;
    position:absolute;
    right:0;
    bottom:0px;
    background-size:100%; 
}
.ani-active {
    background:url(/assets/css3-like/ani-active.png) no-repeat center;
    opacity:0;
    -webkit-transform: translate(0, -50px);
    -ms-transform: translate(0, -50px);
    -o-transform: translate(0, -50px);
    transform: translate(0, -50px);

    -webkit-transition: 1.5s;
    -ms-transition: 1.5s;
    -o-transition: 1.5s;
    transition: 1.5s;
}
```

js：

```js
function like() {
    var ani =  event.currentTarget.children[0]; // event.currentTarget指事件实际绑定的元素，和event.target有区别，event.target是事件发生时点击的点所属于的元素。

    ani.setAttribute('class', 'ani ani-active');
    setTimeout(function() {
        ani.style.display = "none";
    }, 800);

    setTimeout(function() {
        ani.setAttribute('class', 'ani');
        ani.style.display = "block";
    }, 800);
}

```