---
layout: post
title:  "图片占位"
date:   2014-12-04 17:08:10
categories: code
---

为什么要用图片占位技术？
--------------------
在很多情况下，当网页在加载一张图片时，图片资源会很大，网页渲染的速度就会很慢。特别是当图片很多时，这种过慢的渲染，会造成页面卡在图片的位置不会继续渲染后面的内容。使用图片占位技术的目的就是加速网页对轮廓的渲染，提升用户体验。

实现图片按需加载的过程
--------------------
基本原理：
使用一张很小的图片替代要加载的图，将图片的位置占住。待需求满足时（例如滚动到某个位置啊，目标图片下载好了...）就用js将原来的占位资源去掉, 替换成目标图片。



一、设置占位资源

要设置占位资源，有几种办法，可以用背景做为占位符，也可以设置src的值做占位符

<p>1. 使用背景做占位<br>
    image的src属性不写。当满足需求了，去掉占位的类 `.placeholder` 。(去掉背景是停止浏览器对背景的渲染，如果图片不大，不影响也可以不去掉)
</p>

    <style>
      .placeholder {
        width: 200px;
        height: 200px;
        background: url(http://placehold.it/200x200) no-repeat center;
      }
    </style>

    <a class="img-wrap">
      <img alt="" data-src="" class="placeholder" />
    </a>

<style>
  .placeholder {
    width: 200px;
    height: 200px;
    background: url(http://placehold.it/200x200) no-repeat center;
  }
</style>

<a class="img-wrap">
  <img alt="" data-src="" class="placeholder" />
</a>


<p>2. 使用src做占位 <br>
首先我们得改变这些图片的HTML结构, 把图片的 src 换成一个 "1*1" 的透明的gif图片, 然后把图片的真实路径写到图片标签中的一个占位属性, 如: data-src="图片真实路径"; 这一步能保证页面在加载的时候每个图片只加载一个很小的图, 以保证打开速度, 因为真实的路径就没有在 src 属性上, 这里切记, src 不能给空!
</p>

    <img src="http://placehold.it/200x200" alt="">

<img src="http://placehold.it/200x200" alt="">


二、执行资源替换

用js判断这个图片的位置,并给window绑定 scroll, resize 事件, 如果该图片可见则把真实占位的值替换到图片的 src 上,并删除占位的属性

    var fn = function(){
        $("#id img").each(function() {//遍历所有图片
            var othis = $(this),//当前图片对象
                top = othis.offset().top - $(window).scrollTop();//计算图片top - 滚动条top
            if (top > $(window).height()) {//如果该图片不可见
                return;//不管
            } else {
                othis.attr('src', othis.attr('data-src')).removeAttr('data-src');//可见的时候把占位值替换 并删除占位属性
            }
        });
    }
    fn();
    $window.scroll(fn).resize(fn);//绑定事件



推荐一个占位图服务的网址 <a href="http://placehold.it">http://placehold.it</a>

参考文章： [图片占位的原理](http://www.xuexb.com/html/187.html)
