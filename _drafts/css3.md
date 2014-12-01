js 判断是否支持css3
================
var supports = (function() {
   var div = document.createElement('div'),
      vendors = 'Khtml Ms O Moz Webkit'.split(' '),
      len = vendors.length;
 
   return function(prop) {
      if ( prop in div.style ) return true;
 
      prop = prop.replace(/^[a-z]/, function(val) {
         return val.toUpperCase();
      });
 
      while(len--) {
         if ( vendors[len] + prop in div.style ) {
            // browser supports box-shadow. Do what you need.
            // Or use a bang (!) to test if the browser doesn't.
            return true;
         } 
      }
      return false;
   };
})();
 
if ( supports('textShadow') ) {
   document.documentElement.className += ' textShadow';
}

### css3 动画
- 背景
  - background-size
    - 您能够以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。
  - background-origin 
    - background-origin 属性规定背景图片的定位区域。背景图片可以放置于 content-box、padding-box 或 border-box 区域。
  - CSS3 多重背景图片
    - background-image:url(bg_flower.gif),url(bg_flower_2.gif);

- 边框
  border-image

- 文本
  - text-shadow
    - text-shadow: 5px 5px 5px #FF0000;
  - word-wrap(换行)
    - p {word-wrap:break-word;}
    - 强制不换行：white-space:nowrap;
    - 自动换行
      div{ 
        word-wrap: break-word; 
        word-break: normal; 
      }
    - 强制断行
      div{
        word-break:break-all;
      }
    - 所有主流浏览器都支持 word-wrap 属性。

- 字体
  - @font-face 规则
    @font-face
    {
        font-family: myFirstFont;
        src: url('Sansation_Light.ttf'),
             url('Sansation_Light.eot'); /* IE9+ */
    }
  - Internet Explorer 8 以及更早的版本不支持新的 @font-face 规则。

- 阴影
  box-shadow

- 渐变
  - gradient

- 圆角
  border-radius

- 过渡 (Internet Explorer 9 以及更早的版本，不支持 transition 属性)
  - 当元素从一种样式变换为另一种样式时为元素添加效果。
    - 规定您希望把效果添加到哪个 CSS 属性上
    - 规定效果的时长.如果时长未规定，则不会有过渡效果，因为默认值是 0
  - transition
    - transition: width 2s;

  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 2s;

  transition: width 1s linear 2s;


- 转换（2d）
  - transform
    - translate()：平移
    - rotate()：元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。
    - scale()：元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数
    - skew()：通过 skew() 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数：
      - transform: skew(30deg,20deg);
    - matrix()
      - matrix() 方法把所有 2D 转换方法组合在一起。matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。
      - transform:matrix(0.866,0.5,-0.5,0.866,0,0);
    {
        transform: rotate(30deg);
        -ms-transform: rotate(30deg);   /* IE 9 */
        -webkit-transform: rotate(30deg); /* Safari and Chrome */
        -o-transform: rotate(30deg);    /* Opera */
        -moz-transform: rotate(30deg);    /* Firefox */
    }

- 3d转换
  - rotateX()
  - rotateY()

- 动画
  - @keyframes 规则
    @keyframes myfirst {
      from {background: red;}
      to {background: yellow;}
    }

  - 通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：
    - 规定动画的名称
    - 规定动画的时长
  
  - div{
      animation: myfirst 5s;
      -moz-animation: myfirst 5s; /* Firefox */
      -webkit-animation: myfirst 5s;  /* Safari 和 Chrome */
      -o-animation: myfirst 5s; /* Opera */
    }

  - 百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
0% 是动画的开始，100% 是动画的完成。

- 多列
  - column-count
    - 规定列的数目，当设定了多列时，内容会先填充第一列，填充完了，继续第二列
  - column-gap
    - 列与列之间的间距
  - column-rule（规定列之间的宽度、样式和颜色规则）
    - {
      -moz-column-rule:3px outset #ff0000;  /* Firefox */
      -webkit-column-rule:3px outset #ff0000; /* Safari and Chrome */
      column-rule:3px outset #ff0000;
    }

- 渐变
  - background:-webkit-gradient(linear, 0 0, 0 100%, from(＃2074af), to(＃2c91d2));

  第一种写法：
    background:-webkit-gradient(linear ,10% 10%，100% 100%，
                                                      color-stop(0.14,rgb(255,0,0)),
                                                      color-stop(0.5,rgb(255,255,0)),
                                                      color-stop(1,rgb(0,0,255)) );
     第一个参数：表示的是渐变的类型，linear线性渐变
     第二个参数：分别对应x，y方向渐变的起始位置
     第三个参数：分别对应x，y方向渐变的终止位置
     第四/五/N个参数：设置渐变的位置及颜色


box-flex 布局
=============

