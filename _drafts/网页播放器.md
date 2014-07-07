网页插件代码
-----------
vcastr3


三、土豆网的视屏
---------------
<P align=center><EMBED style="MARGIN: 5px" height=550 type=application/x-shockwave-flash pluginspage=http://www.macromedia.com/go/getflashplayer width=700 src=http://www.tudou.com/v/ITAzfCuIgYw/&amp;resourceId=0_04_05_99自动播放代码/v.swf ALLOWNETWORKING="internal" QUALITY="high" INVOKEURLS="false" WMODE="transparent" ></EMBED></P>
说明：
       1、在src=的后面粘贴你所要播放的视频地址，替换http://www.tudou.com/v/ITAzfCuIgYw/&amp;resourceId=0_04_05_99自动播放代码/v.swf （Flash格式的swf）；
2、将代码&amp;resourceId更换为&amp;resourceId； 将自动播放代码更换为&amp;autoPlay=true，就变成自动播放器了；
3、将播放器的宽度（width）和高度（height）值都改为“0”，就成为隐形播放器了；
4、<p align=center>这一代码决定播放器的位置在中间。

一、优酷的
1.可播放视频、动画、Flash音乐
<p align=center><EMBED align=middle src=优酷视频地址  width=700 height=550 type=application/x-shockwave-flash wmode="opaque"
flashvars ="isAutoPlay=true" quality="high"></EMBED>
说明：
       a、在优酷视频地址处粘贴你所要播放的视频地址（Flash格式的swf）；
b、将自动播放代码true去掉，就变成可控播放器了；
c、将播放器的宽度（width）和高度（height）值都改为“0”，就成为隐形播放器了；
 d、<p align=center>这一代码决定播放器的位置在中间。

2.优酷视频去广告代码
<embed src=" http://static.youku.com/v1.0.0149/v/swf/qplayer_rtmp.swf?VideoIDS=你的视频ID&winType=adshow&isAutoPlay=true" quality="high" width="宽度" height="高度" align="middle" type="application/x-shockwave-flash"></embed>
视频调整是否自动播放：
a.isAutoPlay=false（不自动）
b.isAutoPlay=true（自动播放）
"你的视频ID"指的是：URL链接中视频的ID位置
比如：http://v.youku.com/v_show/id_XMzIyOTc3NDMy.html 链接中的 XMzIyOTc3NDMy ，把 XMzIyOTc3NDMy 直接替换上面代码中的“你的视频ID”位置


土豆网视屏下载软件：硕鼠


default: http://www.tudou.com/v/7TQ8L5pIHeE/&resourceId=0_04_05_99/v.swf
a: http://www.tudou.com/v/1ayaYNjSl60/&resourceId=0_04_05_99/v.swf
b: http://www.tudou.com/v/LtJToILZOOE/&resourceId=0_04_05_99/v.swf
c: http://www.tudou.com/v/WYadZ1lVqgs/&resourceId=0_04_05_99/v.swf
xd: http://www.tudou.com/v/lxitDU20fVY/&resourceId=0_04_05_99/v.swf
xe: http://player.youku.com/player.php/sid/XNjg3OTg3NTQ4/v.swf
   http://www.tudou.com/v/dDIpdcC-zik/&resourceId=0_04_05_99/v.swf
   http://www.tudou.com/programs/view/dDIpdcC-zik/
F: http://www.tudou.com/v/P7SRJcPQ2zo/&resourceId=0_04_05_99/v.swf
G: http://www.tudou.com/v/Y2A3Mdx4wO4/&resourceId=0_04_05_99/v.swf
h: http://www.tudou.com/v/f8xU3UjhuXI/&resourceId=0_04_05_99/v.swf


1. 韦博英语 http://www.webi.com.cn/
2. 英孚教育 http://www.ef.com.cn/
3. 新东方 http://www.koolearn.com/
4. 沪江网 http://www.hujiang.com/
5. 灵格英语 http://www.ilingo.cn/
6. 自力教育 http://www.zili.cn/
7. 昂立教育 http://www.onlyedu.com/
8. 学大教育 http://shanghai.xueda.com/



http://www.kuaikanw.com/images/loader.swf?vid=这里填写VID&from=youku&v=1231211

demo
------
0 http://v.youku.com/v_show/id_XMzM1MjQ0MzA4.html
a 

http://www.kuaikanw.com/images/loader.swf?vid=XMzM1MjQ0MzA4&from=youku&v=1231211
你直接插入这个地址就好了啊




* done
- v2 
  - 添加top
  - 更改链接地址属性

* todo
- 视屏自动播放
- 添加百度监测和分析代码 



vcstar
------
[使用flv播放器 Vcastr 网页视频播放器代码中的参数说明](http://blog.csdn.net/willonboy/article/details/4425366)

<script type="text/javascript">
var swf_width=240
var swf_height=240
var texts=’幸福的脚丫预告片’
var files=’http://www.ruochi.com/product/vcastr/flv/happy_feet.flv’
document.write(’<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="’+ swf_width +’" height="’+ swf_height +’">’);
document.write(’<param name="movie" value="http://www.ruochi.com/product/vcastr2/vcastr22.swf"><param name="quality" value="high">’);
document.write(’<param name="menu" value="false"><param name="allowFullScreen" value="true" />’);
document.write(’<param name="FlashVars" value="vcastr_file=’+files+’&vcastr_title=’+texts+’">’);
document.write(’<embed src="http://www.ruochi.com/product/vcastr2/vcastr22.swf" allowFullScreen="true" FlashVars="vcastr_file=’+files+’&vcastr_title=’+texts+’" menu="false" quality="high" width="’+ swf_width +’" height="’+ swf_height +’" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />’); document.write(’</object>’);
</script>




<!-- videoObject -->
  <script id="videoObject" type="x-jquery-tmpl">
    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="864" height="526" id="video-ob" dataid="${videoId}" align="middle">
    <param name="allowScriptAccess" value="sameDomain" />
    <param name="movie" value="http://www.tudou.com/v/${videoId}/&resourceId=0_04_05_99/v.swf" />
    <param name="quality" value="high" />
    <param name="bgcolor" value="#ffffff" />
    <param name="wmode" value="transparent" />
    <embed id="video-src" src="http://www.tudou.com/v/${videoId}/&amp;resourceId=0_04_05_99&amp;autoPlay=true/v.swf" mce_src="http://www.tudou.com/v/${videoId}/&amp;resourceId=0_04_05_99&amp;autoPlay=true/v.swf" quality="high" bgcolor="#ffffff" width="864" height="526" name="mymovie" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent"/>
    </object>
  </script>