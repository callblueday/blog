---
layout: post
title:  "简单思路实现瀑布流"
date:   2014-12-02 15:41:10
categories: code
---

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
      .clearfix {
        clear: both;
      }
    </style>

    <div class="fl pic-list">
       <div class="fl column-l">
       </div>
       <div class="fl column-r">
       </div>
       <div class="clearfix"></div>
    </div>


二、渲染数据
----------

遍历图片，基数放左，偶数放右

    function renderPicList(data) {
        var images = data.image;
        images.forEach(function(item, i) {
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