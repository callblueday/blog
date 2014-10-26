### js 跨域问题
http://www.cnblogs.com/rainman/archive/2011/02/20/1959325.html
http://www.cnblogs.com/stariit/p/3532996.html [x]
http://www.blogjava.net/pengo/archive/2013/01/11/394103.html  [x]

http://blog.csdn.net/chosen0ne/article/details/7333626 [√]

http://segmentfault.com/q/1010000000344066 [√]


JSONP 的理解


同源策略
------------
js跨域访问，通常都是请求其他资源出现的，例如php文件。由于安全的原因，javacript同源策略的限制，浏览器不允许Javascript请求跨域的资源。

1. 同源策略
    所有的浏览器都遵守同源策略，这个策略能够保证一个源的动态脚本不能读取或操作其他源的http响应和cookie，这就使浏览器隔离了来自不同源的内容，防止它们互相操作。所谓同源是指协议、域名和端口都一致的情况。举例来说，首先在Nginx上配置两个虚拟主机，一个监听80端口，另一个监听81端口：

2. 打破同源策略的限制
        浏览器会阻止ajax请求非同源的内容，但没有限制<script>标签来访问非同源的内容，也没有限制使用动态添加<script>标签，所以可以采用这种方式打破这种限制。先测试下<script>访问非同源的内容，修改show_person.php，如下：
3. 



XMLHttpRequest cannot load http://localhost/inc/addsite.php. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://www.cnblogs.com' is therefore not allowed access. The response had HTTP status code 502. 



--------------------------------------
js 跨域获取、存储信息。   


需求：
点击插件
获取目标页面的标题和网址
将获取到的信息存入到数据库（用的是php）

遇到的问题：
js跨域，无法执行写php的操纵

--------------------------------------

**js php 跨域**
- js 请求php文件
- php 中设置跨域头
    - header('Access-Control-Allow-Origin:*');
    - 返回数据


JS不能使用POST和GET请求的，这是浏览器安全规则，不过可以使用其它办法来获得类似结果。



### 502 Bad Gateway
js 访问php文件，老是报`502 bad gateway`
这个跟nginx对php的设置有关系，是不是 php-cgi 没有被启动？
        
        php-fpm -y /usr/local/etc/php/5.4/php-fpm.conf -c /usr/local/etc/php/5.4/php.ini


相关资源
---------
<script src="http://cdn.bootcss.com/jquery/1.11.0/jquery.js"></script>
