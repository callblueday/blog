参考：http://daneden.github.io/animate.css/


-webkit-animation-fill-mode:both; 这个样式是为了动画完成后保留动画完成时的状态，如果不加这个样式的话动画完成后又会弹回原来状态了。

css动画对应的类被重新加载的时候，动画效果会重新渲染触发。利用该特性，可以用来制作滑屏重新加载动画 。

CSS3 动画属性
================
下面的表格列出了 @keyframes 规则和所有动画属性：
属性  描述  CSS
@keyframes  规定动画。   3
animation   所有动画属性的简写属性，除了 animation-play-state 属性。 3
animation-name  规定 @keyframes 动画的名称。    3
animation-duration  规定动画完成一个周期所花费的秒或毫秒。默认是 0。   3
animation-timing-function   规定动画的速度曲线。默认是 "ease"。   3
animation-delay 规定动画何时开始。默认是 0。 3
animation-iteration-count   规定动画被播放的次数。默认是 1。   3
animation-direction 规定动画是否在下一周期逆向地播放。默认是 "normal"。  3
animation-play-state    规定动画是否正在运行或暂停。默认是 "running"。    3
animation-fill-mode 规定对象动画时间之外的状态。  3



css动画在网页中的组织方法有两种
================================
方法1. 定义基础的css动画类：
    执行时间
    延迟
    动画方式
然后对html中对应的元素组合类名即可。

例如：
```html
<div class="animated delay0d6s fadeInUp">
    <img src="images/co-list.png" alt="">
</div>
```

方法2. 针对每个元素，定义其css动画




缩放
旋转
位移

3d