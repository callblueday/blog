---
layout: post
title:  "dedecms 注意问题"
date:   2014-05-23 15:29:40
categories: code
---


迁移网站必须的目录
----------------------------
ads/
ask/
backupdata/
images/
imgs/
js/
style/
templets/
uploads/

所谓的cms系统，实际上就是一套路由系统：路径配置，转换系统


生成目录
---------

- yiyuangaikuang
  "/yiyuangaikuang -> "/shxqyy/yiyuangaikuang
- fuke
- nanke
- byby

- {dede:global.cfg_basehost/} -> {dede:global.cfg_cmsurl/}
- /shxqyy -> {dede:global.cfg_cmsurl/}



站点配置
--------

近日碰到一个棘手问题，DEDECMS原来的数据全是默认在要根目录下设置上传的，但更换了后却面目全非了。

但现在要把该网站更换到子目录下，最初的操作是把目录下程序及上传的图片全部转移到子目录下，运行，页面全非，缩略图及页面内的图片都无法显示。花了不少时间终于在晚睡觉前弄好，现把经验分享如下：

1、修改DedeCms系统配置参数
　　
站点根网址修改为：http://域名/子目录

网页主页链接：/子目录

核心设置

DedeCms安装目录：/子目录

2、修改模板文件
　　
模板文件内的CSS及JS文件使用了绝对路径的请修改为相对路径，即去掉路径前的“/”。

3、批量修改原数据的
　　
如果不批量修改原数据图片路径，显示是不正确的。原上传图片的路径为绝对路径的，如“/uploads/”现需要修改为,"/子目录/uploads/“，现列表需要修改DEDECMS三个数据表下的字段内容：

图集缩略图表名 dede_uploads 字段 url;

频道文章列表的图片缩略图表名 dede_archives 字段 litpic

新闻文章内部的图片表名 dede_addonarticle 字段 body

图集文章内部的图片表名 dede_addonimages 字段 imgurls

因数据多，所以需要使用批量替换的方法，知道以上表名字段后就可以灵活替换了，现介绍两种方法：

方法一：使用phpMyadmin用SQL语句替换

如：UPDATE dede_uploads SET url= REPLACE(url,'/uploads/','/子目录/')

系统 -> SQL命令行工具，然后看到一个文本框，在文本框内输入sql语句
 update dede_addonarticle set body=replace(body,'之前的域名','现在的域名')


方法二：使用DEDECMS自带的工具，登陆后台的，核心->数据库内容替换->找到要替换的表和填写上字段、被替换的内容及替换后的内容。
后台 -- 内容维护 -- -   数据库内容替换 

表 dede_addonarticle 

字段 body 

被替换内容  uploads/allimg 

替换为  news/uploads/allimg 



更新缓存，再刷新页面验证，大功告成。另，不得不说一句，把网站修改最大的问题是绝对路径与相对路径的问题，最不喜欢绝对路径了，修改起来太麻烦了。



shxqyy 网站模板中路径替换
----------------
约定：所有引号用双引号，使用相对路径
替换范围：C:\AppServ\www\shxqyy\templets,C:\AppServ\www\shxqyy\ask

资源文件地址用：{dede:global.cfg_cmsurl/}

1. uploads路径替换
  - 数据库中字段替换，如上
  - 模板中路径替换
    "/uploads -> "{dede:global.cfg_cmsurl/}/uploads/

2. plus路径批量替换
'/plus/ad_js.php -> '{dede:global.cfg_cmsurl/}/plus/ad_js.php

3. images路径批量
"/images -> "{dede:global.cfg_cmsurl/}/images

4. ads 路径替换
"/ads -> "{dede:global.cfg_cmsurl/}/ads

5. templates/xqmb/new_js/init.js 注意路径的替换
Do.add('slot', {path: '/shxqyy/templets/xqmb/new_js/ad.js', type: 'js'});
Do.global('/shxqyy/templets/xqmb/new_js/base.js');

6. new_index.html 中导航链接中根路径的替换
"/ -> "

7. 去掉 targe="_blank"
target="_blank"


dedecms广告设置
---------------
在dedecms后台 模块->广告管理->更改广告

广告投放范围：
正常显示内容：
<a href="/shxqyy/yiyuangaikuang/0829_452.html" target="_blank"><img src="/shxqyy/ads/1000_180_bbt.jpg" alt="" width="1000" height="180"></a>


html文档里调用广告标签：
<div class="hgg"><script src='{dede:global.cfg_cmsurl/}/plus/ad_js.php?aid=7' language='javascript'></script></div>
即可。


  
1-yiyuangaikuang
  <a href="/shxqyy/yiyuangaikuang/0829_452.html" target="_blank"><img src="/ads/1000_180_bbt.jpg" alt="" width="1000" height="180"></a>
2-yiyuangaikuang_2
  <a href="/shxqyy/yiyuangaikuang/0829_454.html" target="_blank"><img src="http://www.shxqyy.net/ads/1000x100fk.jpg" width="1000" height="100" alt=""></a>
3 - fuke_article
  <div class="wsts">
    <p>如果您还有什么疑问请点击<a onclick="javascript:openswt()" href="javascript:void(0);">“咨询专家”</a>进行一对一沟通，专家会免费为您详细解答！如您已经明白了，请点击<a onclick="javascript:openswt()" href="javascript:void(0);">“预约专家”</a>进行网上预约挂号，即可享受：免排队优先就诊免挂号费和专家会诊费、各种援助和优惠。
      <br>医院地址：上海市浦东新区外高桥季景路9号(近春晖路) 
    </p>
  </div>
4-yiyuangaikuang_4
  <a href="/shxqyy/yiyuangaikuang/0829_466.html" target="_blank"><img src="/shxqyy/ads/1000x100zx.jpg" width="1000" height="100" alt=""></a>
6-fuke
  <a href="/shxqyy/yiyuangaikuang/0829_452.html" target="_blank"><img src="/shxqyy/ads/1000_180_bbt.jpg" alt="" width="1000" height="180"></a>
7-byby
  <a href="/shxqyy/yiyuangaikuang/0829_467.html" target="_blank"><img src="http://www.shxqyy.net/ads/1000_180_yunyhun.jpg" width="1000" alt=""></a>
5、8-nake
  <a href="/shxqyy/yiyuangaikuang/0829_461.html" target="_blank"><img src="http://www.shxqyy.net/ads/1000-180qianliexian.jpg" alt=""></a>
9-top-right
  <a href="/shxqyy/yiyuangaikuang/0829_467.html" target="_blank"><img src="http://www.shxqyy.net/ads/yy283-73.jpg" width="280" height="68" alt=""></a>
10-yiyuangaikuang_3
  <a href="/shxqyy/yiyuangaikuang/0909_1037.html" target="_blank"><img src="http://www.shxqyy.net/ads/hgg.gif" alt="" width="1000" height="100"></a>



dedecms 5.7sp1本地打开首页很慢
---------------------------------
这是5.7版的通病，因为官方放了很多外链在代码中。把官方的注释掉就可以了。

打开根目录\include\taglib\flinktype.lib.php，搜索"dedecms->id"，将以下代码：
$dedecms->id = 999;
$dedecms->typename = '织梦链';
if($type == 'dedecms') $row[] = $dedecms;
修改为：
/*$dedecms->id = 999;
$dedecms->typename = '织梦链';
if($type == 'dedecms') $row[] = $dedecms;*/

就是将这三句代码注释掉就可以了。

