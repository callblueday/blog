---
layout: post
title:  "自定义 checkbox"
date:   2014-05-13 11:28:40
categories: code
---

通常我们如果想自定义 checkbox 的背景，需要用到一些图片来和标签来替换掉原有的 `input`，本文提供一个简单的办法来处理该种情形。代码已经做了兼容处理，支持 ie6+，chrome，firefox，opera。

html基本代码如下

```html
  <input type="checkbox" id="c1" name="cc" />
  <label for="c1"><span></span>我是一个checkbox</label>
```

兼容的样式文件如下

```css
  /* chrome, firefox, safari, opera and ie9+ 显示一致 */
  input[type="checkbox"] {
      display:none;
      *display: inline; /* hack for ie7- */
  }

  input[type="checkbox"] + label span {
      display:inline-block;
      width:19px;
      height:19px;
      margin:-1px 4px 0 0;
      vertical-align:middle;
      background: blue;
      cursor:pointer;
      *display: none; /* hack for ie7- */
  }

  input[type="checkbox"]:checked + label span {
      background: yellow;
  }

   /* IE8 only */
  @media \0screen {
    input[type="checkbox"] {
      display: inline;
    }
    input[type="checkbox"] + label span {
      display: none;
    }
  }
```
参考
http://blog.rx836.tw/blog/css3-checkboxes-radiobuttons/