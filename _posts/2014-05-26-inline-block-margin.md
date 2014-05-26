---
layout: post
title:  "inline-block 的间距解决方案"
date:   2014-05-26 17:03:10
categories: code
---

  <p>真正意义上的inline-block水平呈现的元素间，换行显示或空格分隔的情况下会有间距，很简单的个例子：</p>
  <input/><input type="submit"/>
  <p>我们使用CSS更改非inline-block水平元素为inline-block水平，也会有该问题。可以用来解决的方法如下： 
  </p>

  <h3>display:table<span>(兼容ie7+, chrome, safari, firefox)</span></h3>
  <pre>
    ul  {
      width: 100%;
      display:table;  /* 调教webkit*/
      word-spacing:-1em;
    }
    ul li {
      word-spacing:0;
    }
  </pre>
  <ul class="code4">
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
  </ul>
  
  <h3>letter-spacing<span>(safari下需要做兼容处理，其他浏览器没有问题)</span></h3>
  <pre>
    .code2  {
       letter-spacing: -8px; 
    }
    @media screen and (-webkit-min-device-pixel-ratio:0)
    {
      ::i-block-chrome, .code2 {
        letter-spacing: -4px; /* hack for safari */
      }
    }
    .code2 li {
       letter-spacing: 0;
    }
  </pre>
  <ul class="code2">
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
  </ul>

  <h3>font-size<span>(safari下无效，其他有效)</span></h3>
  <pre>
    .code  {
      font-size: 0; /* safari 无效，其他有效 */
    }
    .code li {
      font-size: 12px;
    }
  </pre>
  <ul class="code">
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
  </ul>

  
  <h3>word-spacing<span>(safari下无效，其他浏览器没有问题)</span></h3>
  <pre>
    .code3  {
       word-spacing: -8px; 
    }
    @media screen and (-webkit-min-device-pixel-ratio:0)
    {
      ::i-block-chrome, .code3 {
        word-spacing: -20px; /* hack for safari */
      }
    }
    .code3 li {
       word-spacing: 0;
    }
  </pre>
  <ul class="code3">
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
    <li>我是一个小淘气</li>
  </ul>