---
layout: post
title:  "Css 兼容代码粘贴板"
date:   2014-05-23 15:41:10
categories: code
---

css 规则
-----------------
- 类的命名尽量语义化，表达清楚
- 类名使用 `-` 连接符
- 尽量使用最小层级的 html 语言结构
- 如果单靠 css 样式无法满足效果，则添加 html 标签来弥补
将样式分为`应用`和`布局结构`的好处是，随着类的命名越来越语义化，页面的结构可以在因为功能产品需要，类名变更的情况下，而不受影响。
- 针对于具体应用，css 样式结构可以分为
  - 全局样式（global.css): 重写浏览器默认样式
  - 页面结构(structure.css)：负责处理页面整体的框架布局
  - 具体组件(components.css)：负责处理页面中细小可重用的组建，例如“表单”、“标题样式”等
- 具体标签中，定义的 css 样式类，分为
  - `应用样式`：主要用于 js dom 结构的调用，或者定义页面样式
  - `结构样式`：类似 bootstrap 的栅格系统，主要用于定义页面布局。


ie hack 基本处理
-----------------
```css
.all IE{property:value\9;}
.gte IE 8{property:value\0;}  \9\0 也同样表示 ie8+
.lte IE 7{*property:value;}

/* IE8 only */
@media \0screen {
  body { background：red; }
}

.IE 7{+property:value;}
.IE 6{_property:value;}
.not IE{property//:value;}


/* safari */
@media screen and (-webkit-min-device-pixel-ratio:0)
{
  .input { 
    line-height: 24px;
  }
}

/* Opera */
@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0)
{
head~body #opera { display: block; }
}
```

clearfix 的写法
----------------
```css
.clearfix {*zoom: 1;}
.clearfix:before, .clearfix:after {display: table;line-height: 0;content: "";}
.clearfix:after {clear: both;}
```

cross browser opactity（半透明兼容写法）
---------------------------------------
```css
.transparent_class {
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  /* IE 5-7 */
  filter: alpha(opacity=50);
  /* Netscape */
  -moz-opacity: 0.5;
  /* Safari 1.x */
  -khtml-opacity: 0.5;
  /* Good browsers */
  opacity: 0.5;
}
```

关于字体 font-family
--------------------
Mac 下的 chrome 浏览器，没有微软雅黑字体，默认要显示声明"宋体"、"黑体"。
这在其他类似情况下需要注意

```css
p
  {
  font-family:"微软雅黑", "宋体", Georgia,Serif;
  }
```


关于元素 p
------------
p 元素之间的行高设定，通常使用 line-height，使两者具有间距，而不会紧密联系在一起。


去掉 input 的默认背景
----------------------
对于纯色背景的表单，只需要在CSS里面加入类似下面的代码即可：

```css
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
```

还找到一张解决办法，就是给input添加autocomplete=‘off’也就是把他的自动完成关闭了。


关于列表排列的对齐问题
-----------------------

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
````
通常当对li元素进行margin值的设定时，会遇到想要设置靠近最左或者最右的元素0边距，
从而使整体宽度与父容器一致的问题。现在统一采用的办法如下（兼容ie7+）

```css
li {
  margin-left:20px;
}
ul {
  margin-left:-20px;
}
```


ie6/7 postion:absolute bug
---------------------------
IE6/IE7的解析是在position:absolute之后,仍然会按照普通文档流的解析来进行。
所以会被父级元素的 text-align：center 所影响到，兼容的写法是，加上 left 和 top 进行定位。
默认的设置为，left:0;top:0;


IE7 text-align:center not working
--------------------------
Its bug is IE7 : 参考 http://haslayout.net/css/Text-Align-Bug

```css
width:auto;
text-align:center;
```

声明为inline-block 之间存在间距
--------------------------------------
解决办法：使用display:table，并结合word-spacing。参见文章 [http://callblueday.com/code/2014/05/26/inline-block-margin.html](http://callblueday.com/code/2014/05/26/inline-block-margin.html)

```css
ul  {
    width: 100%;
    display:table;  /* 调教webkit*/
    word-spacing:-1em;
  }
ul li {
  word-spacing:0;
}
```


IE6/IE7/IE8下float:right的异常及其解决方法
------------------------------------------
使用float:right;的时候都遇到过向右浮动不好使的情况，比如，对于类似这段html代码：<h2>小标题<a href="#">更多&gt;&gt;</a></h2>，对a设置向右浮动，在IE下会跑到第二行显示。

1、最简单的方法就是调换顺序，将需要右浮动的元素写在前面。写成这样：<h2><a href="#">更多&gt;&gt;</a>小标题</h2> 。但是我们觉得这样排列顺序的写法有违背html文档语义化的嫌疑，因此，不建议大量使用这种写法。

2、父标签使用相对定位，子元素使用绝对定位。由于IE里元素右浮动会影响到它的兄弟元素，所以为了避开有浮动，可以采用position定位，达到同样的显示效果。代码这里从略。

3.浮动一左一右，元素块清晰区分开。<h2><span>小标题</span><a href="#">更多&gt;&gt;</a></h2> 这里对 h2 span{float:left;} 对h2 a{float:right;}。如果是新闻列表<li><a href="#">新闻标题一</a> <span>2012-05-03</span></li>则css可以定义为ul li a{float:left;}，ul li span{float:right;}。
