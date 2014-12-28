---
layout: post
title:  "mac 下原生词典扩充方法"
date:   2014-12-09 22:43:10
categories: code
---


词典使用
-------
mac下的原生的词典很是方便，对目标单词三指轻触，即可出现解释，或者按住组合键 ctrl+command+D来调出。

在Spotlight中查询字典。打开Spotlight，然后输入单词，你就可以在搜索结果中看到定义这一项。将鼠标悬停其上将显示简要解释，点击或按回车键就会打开字典程序来显示详细解释。


扩充方法
--------
1. 下载图形化的词典转换工具DictUnifier；

    <a href="https://code.google.com/p/mac-dictionary-kit/downloads/list" target="_blank">https://code.google.com/p/mac-dictionary-kit/downloads/list</a>

2. 然后，下载需要的StarDict词典，（我下的朗道英汉和计算机词汇）

    <a href="http://abloz.com/huzheng/stardict-dic/zh_CN/" target="_blank">http://abloz.com/huzheng/stardict-dic/zh_CN/</a>


3. 打开DictUnifier，选择Choose，打开下载好的词典文件（后缀是.tar.bz2），点击 Convert，转换完成之后便自动拷贝到系统自带的系统里了(有的时间可能会很长，请耐心等待）


4. 如还想安装其它字典，先关闭字典，再安装。

5. 卸载方法：如不想要自己安装的字典，可把 Users : Libraries ：Dictionaries 目录下相应的字典删掉就好了。

6. 如果想重新给你的字典排序或改变使用与否。可在spotlight中搜索字典，打开后，点击主菜单 Dictionaries －》Preferences 给相应字典打上对号 （运行）。鼠标托动词典名就可移动其位置。