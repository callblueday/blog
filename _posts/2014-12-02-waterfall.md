---
layout: post
title:  "简单思路实现瀑布流"
date:   2014-12-02 15:41:10
categories: code
---

在开发过程中，有时候会遇到需要使用瀑布流的情形，但是又不希望用太复杂的逻辑。网上找到的一些框架中像，实现的都很完美，却总感觉有点太庞大。其实我只是需要一个像瀑布流一样展示效果的逻辑就可以，不需要冗余的东西。

有一个简单的实现办法是，基于css3的column属性。比如说我想实现两列瀑布流

<!--   <style>
  ul {
      column-count: 2;
      column-gap: 40px;
      column-rule: 4px outset #ff0000;
  }
  li {
      background: #0CF;
      border: #069 1px solid;
      display: inline-block;
      width: 150px;
      height: 30px;
      margin: 5px 0;
  }
  </style>

  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul> -->
    //代码待整理

在与[poutbo](https://github.com/poutbo)讨论的过程中，他提出了一个基于多列，数据选择排放的实现想法，我觉得很赞，在这里记录一下。



主要思路：



一、设立架子
----------
    <style>
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
    </style>

    <div class="fl pic-list">
       <div class="fl column-l">
       </div>
       <div class="fl column-r">
       </div>
    </div>


二、渲染数据
----------

遍历图片，基数放左，偶数放右

    function renderPicList(imgArray) {
        imgArray.forEach(function(item, i) {
            var itemHtml = '<div class="pic-item img-wrap" onclick="clickPicItem()" data-num="' + i + '">' +
                '<img src="' + item.src + '">' +
                '</div>';
            if ((i % 2) == 0) {
                $('.column-l').append($('' + itemHtml));
            } else {
                $('.column-r').append($('' + itemHtml))
            }
        });
    }