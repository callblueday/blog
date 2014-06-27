---
layout: post
title:  "jquery template 的使用"
date:   2014-06-27 17:35:40
categories: code
---

基本使用
------------
1. 引入基本库

```
  <script src="http://code.jquery.com/jquery.min.js" type="text/javascript"></script>
  <script src="js/jquery.tmpl.js" type="text/javascript"></script>  
```

1. 定义数据结构

```
var clientData = [
     { name: "Rey Bango", age: 42, id: 1, phone: [ "954-600-1234", "954-355-5555" ] },
     { name: "Mark Goldberg", age: 51, id: 2, phone: ["954-600-1234", "954-355-5555"] },
     { name: "Jen Statford", age: "25", id: 3, phone: ["954-600-1234", "954-355-5555"] }
];
```

1. 定义模板和变量

```
  <script id="clientTemplate" type="text/html">
      <p><a href="clients/${id}">${name} - Age: ${age}</a></p>
  </script>
```


1. 进行数据渲染并加载到dom中

```
  $("#clientTemplate").tmpl(clientData).appendTo("div");
```


细节使用
---------
1. 使用if/else中
1. 使用循环for each
1. 模板中变量的调用


模板嵌套
---------


```
<script id="phoneTemplate" type="text/html">
    <ul>{{each phone}}<li>${$value}</li>{{/each}}</ul>
</script>

<script id="clientTemplate" type="text/html">
    <p><a href="clients/${id}">${name} - Age: ${age}</a></p>
    {{tmpl($data) "#phoneTemplate"}}
</script>
```


获取本地数据
------------
使用jquery的getJson方法可以做到

``` 
$.getJSON('data/data.json', function(data, textStatus) {
  // data
}
```


获取远程数据
-------------
存在跨域，则使用jsonp格式请求

```
$.ajax({
    url : 'url',
    type : 'GET',
    data : {pagelink:''},
    cache : false,
    async : true,
    dataType : 'jsonp',
    error : function (e) {
      console.log(e);
    },
    success : function (data) {
      // data
    }
}); 

服务器端返回
localHandler({"result":"我是远程js带来的数据"});

// php中对应的处理
请求的路径应该将json数据包含在一个`callback`变量中，返回的数据格式如下：
callback([
    { name: "Rey Bango", age: 42, id: 1, phone: [ "954-600-1234", "954-355-5555" ] },
    { name: "Mark Goldberg", age: 51, id: 2, phone: ["954-600-1234", "954-355-5555"] },
    { name: "Jen Statford", age: "25", id: 3, phone: ["954-600-1234", "954-355-5555"] }
]);
```


简单demo
----------

```
  <!DOCTYPE html>
  <html lang="en">
  <head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
    <meta name="robots" content="noindex" /> 
    <title>Template Test</title> 
    <script src="http://code.jquery.com/jquery.min.js" type="text/javascript"></script>
    <script src="jquery.tmpl.js" type="text/javascript"></script>  
    <script type="text/javascript">
      $(document).ready(function() {

        var clientData = [
        { name: "Rey Bango", age: 42, id: 1, phone: [ "954-600-1234", "954-355-5555" ] },
        { name: "Mark Goldberg", age: 51, id: 2, phone: ["617-777-1234", "617-222-3333"] },
        { name: "Jen Statford", age: "25", id: 3, phone: ["608-555-5647", "608-645-8855"] }
        ];

        $("#clientTemplate").tmpl(clientData).appendTo("div");

      });
    </script>

    <script id="clientTemplate" type="text/html">
      <p><a href="clients/${id}">${name} - Age: ${age}</a></p>
      {{tmpl($data) "#phoneTemplate"}}
    </script>

    <script id="phoneTemplate" type="text/html">
      <ul>{{each phone}}<li>${$value}</li>{{/each}}</ul>
    </script>

  </head> 
  
  <body> 

    <div></div>

  </body> 
  </html> 
```


补充一下jsonp的说明
--------------------
1、一个众所周知的问题，Ajax直接请求普通文件存在跨域无权限访问的问题，甭管你是静态页面、动态网页、web服务、WCF，只要是跨域请求，一律不准；

2、不过我们又发现，Web页面上调用js文件时则不受是否跨域的影响（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）；

3、于是可以判断，当前阶段如果想通过纯web端（ActiveX控件、服务端代理、属于未来的HTML5之Websocket等方式不算）跨域访问数据就只有一种可能，那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理；

4、恰巧我们已经知道有一种叫做JSON的纯字符数据格式可以简洁的描述复杂数据，更妙的是JSON还被js原生支持，所以在客户端几乎可以随心所欲的处理这种格式的数据；

5、这样子解决方案就呼之欲出了，web客户端通过与调用脚本一模一样的方式，来调用跨域服务器上动态生成的js格式文件（一般以JSON为后缀），显而易见，服务器之所以要动态生成JSON文件，目的就在于把客户端需要的数据装入进去。

6、客户端在对JSON文件调用成功之后，也就获得了自己所需的数据，剩下的就是按照自己需求进行处理和展现了，这种获取远程数据的方式看起来非常像AJAX，但其实并不一样。

7、为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。



参考链接
---------
- [jQuery JavaScript Templates Tutorial: Nesting Templates](http://blog.reybango.com/2010/07/12/jquery-javascript-templates-tutorial-nesting-templates/)
- [jquery-tmpl](https://github.com/BorisMoore/jquery-tmpl)
- [说说JSON和JSONP，也许你会豁然开朗，含jQuery用例](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)