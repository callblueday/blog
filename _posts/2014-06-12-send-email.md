---
layout: post
title:  "php发送邮件"
date:   2014-06-12 19:11:40
categories: code
---
（只写直观可操作的步骤，）

php.ini 在linux上的位置
-----------------------
php.ini文件缺省放在/usr/local/lib上面，因为缺省的存放路径是<install-path> /lib，但是可以在编译的时候使用--with-config-file-path参数来修改php.ini的存放位置，例如你可以使用--with- config-file-path=/etc把它存放到/etc下面，然后可以从源码包中拷贝php.ini-dist到/etc/php.ini并修改。


SMTP类，发送邮件思路
---------------------------
找一个SMTP类 用QQ邮箱发吧


邮件发送就两种方式。一种就是本地的mail服务去发，linux自带这个服务，但这种邮件因为邮件服务器没有认证，信用低，会被大多邮箱丢到垃圾邮件。

另一种就是通过smtp服务，通过第三方的邮件服务器去发送。你自己注册的gmail,qq，都可以配置为发送。在这些邮件服务提供商的设置页可以看到smtp的地址，用户名和密码就是你邮箱的用户名和密码。


范例如下
http://blog.php60.com/?p=285


php-ajax
--------
$("input:radio[name ='managerelradio']:checked").val();



php.ini 里显示所有错误
-------------------------
你可以先把error_reporting设置成E_ALL
打开display_errors



　$ find . -name 'my*'
搜索当前目录（含子目录，以下同）中，所有文件名以my开头的文件。


500
--------------------------
初看这个500错误容易误认为nginx出错，可以适当调整为其它响应码
只要在php.ini中设置 fastcgi.error_header 选项即可，如返回503：
fastcgi.error_header = "HTTP/1.1 503 PHP Parse Error"
这样就可以显示出错误的根本原因，可以在部署LNMP时加上

没加这个选项时，可以通过下面方法调试：
将访问出错的页面拷贝一个，成测试文件，防止影响线上业务和安全问题
如：cp index.php index.test.php
打开 display_errors 选项,在文件开头加入如下内容：
ini_set('display_errors','1');
error_reporting(E_ALL);
这样就可以将错误暴露出来，完毕！



chrome 浏览器，查看network中的response报错



php 建立
------------------

