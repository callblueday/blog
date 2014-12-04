---
layout: default
title: callblueday 的博客
---

<div id="home">
    <p>该栏目下的文章主要是解决问题：为什么要做？怎么做？</p>
  <h1>文章列表</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl}}{{post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>