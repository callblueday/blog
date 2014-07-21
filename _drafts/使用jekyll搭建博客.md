### 安装 jekyll
$ gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
// => Now browse to http://localhost:4000

如果出现依赖包`/usr/bin/ruby1.9.1 extconf.rb`的错误，执行
    sudo apt-get install ruby1.9.1-dev


### 将博客放在二级域名下
主要的问题是更改根目录的位置。在`_config.yml`中设置：

  baseurl: /blog/
然后利用`{{site.baseurl}}` 变量将文中出现的位置设置做调整。
```
<!-- _layouts/default.html -->
<link rel="stylesheet" href="{{site.baseurl}}/css/syntax.css">
<link rel="stylesheet" href="{{site.baseurl}}/css/main.css">

<!-- index.html -->
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl}}{{post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

```
经过以上修改后，直接访问 `http://somesite.com/blog/` 即可到目标页面

### 给 blog 添加 `category`
- [插件-为 Jekyll 博客添加 category 分类](http://pizn.github.io/2012/02/23/use-category-plugin-for-jekyll-blog.html)
- [](http://stackoverflow.com/questions/20872861/jekyll-display-posts-by-category)
- [文章分类索引](http://blog.segmentfault.com/skyinlayer/1190000000406017)

### 给 blog 绑定域名
如果你不想用http://username.github.com/jekyll_demo/这个域名，可以换成自己的域名。
具体方法是在repo的根目录下面，新建一个名为CNAME的文本文件，里面写入你要绑定的域名，比如example.com或者xxx.example.com。
如果绑定的是顶级域名，则DNS要新建一条A记录（本博客是在https://www.dnspod.cn/中进行指定的），指向204.232.175.78。如果绑定的是二级域名，则DNS要新建一条CNAME记录，指向username.github.com（请将username换成你的用户名）。此外，别忘了将_config.yml文件中的baseurl改成根目录"/"。（经测试baseurl地址为空，资源地址正常。）


https://www.dnspod.cn/Domain#callblueday.com
中的每一行就是添加的一条记录：

@ | cname |默认 |callblueday.github.io| - |600
（设置无效时，删除记录，重新添加一个）

_config.yml 中 baseurl 中的baseurl内容

```
baseurl: 
```
经测试，当在CNAME文件里写入了`callblueday.com`后，此文件中的baseurl地址为空，资源地址才是正常。


### 添加disqus
https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions


### 相关资源
- [jekyll](http://jekyllrb.com/)
- [jekyll 模板变量](http://jekyllrb.com/docs/variables/)
- [用 github、markdown和jekyll搭建博客](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)
- [Running Your Jekyll Blog from a Subdirectory](http://joshbranchaud.com/blog/2013/03/02/Running-Your-Jekyll-Blog-from-a-Subdirectory.html)
- [参考博客](http://arademaker.github.io/)