
- Cygwin
  windows 下模拟 linux 命令行的工具
  http://www.cygwin.com/


- 如何安装软件
[apt-cyg](http://www.cnblogs.com/EasonWu/archive/2012/11/27/git-windows-setup-by-cygwin.html)
- [参考教程](http://www.2cto.com/os/201212/176551.html)


选择软件源
http://mirrors.163.com/cygwin/


Cygwin下也有类似Linux下包管理工具apt-cyg，可以方便的通过网络安装各种软件。
1.下载安装：http://cygwin.com/setup.exe
2.选择安装源及软件，如需安装apt-cyg需安装以下软件包：
 
wget
tar
gawk
bzip2
 
3.Cygwin安装完成后打开Cygwin Terminal安装apt-cyg包管理器：
 
wget http://apt-cyg.googlecode.com/svn/trunk/apt-cyg -P /bin
chmod.exe +x /bin/apt-cyg
  
apt-cyg安装源为 ftp://mirror.mcs.anl.gov，设置为网易镜像源。
 
apt-cyg -m http://mirrors.163.com/cygwin/
 
使用apt-cyg安装软件：
 
apt-cyg update
#更新源
apt-cyg install ping -u


3.Cygwin安装完成后打开Cygwin Terminal安装apt-cyg包管理器：
 
wget http://apt-cyg.googlecode.com/svn/trunk/apt-cyg -P /bin
chmod.exe +x /bin/apt-cyg


- apt-cyg 安装 zsh
oh-my-zsh会自动安装好，在Linux下通过：
chsh -s /bin/zsh
可以让Z-Shell成为默认Shell，但cygwin下没有这条命令。但你可以更改/etc/passwd文件来达到更改用户shell的效果。
vim /etc/passwd

将你的用户名所在行中的/bin/bash改为/bin/zsh即可。oh-my-zsh中的内置主题列表可以参看这个页面，我比较喜欢ys主题，直接将~/.zshrc中的ZSH_THEME值设置为ys即可。还是可以给cygwin terminal设置下背景色，字体等，terminal中间右击选择options设置相应参数即可。我在Windows上装了Monaco字体，选择10-point大小，背景色设置成R=35, G=58, B=64，透明度选择Med.。对了，我在用ys主题时，提示符中本应该显示我hostname的地方却显示不出来，但cygwin terminal的标题栏上却正常显示hostname信息，weird.


### cygwin 如何使用 windows 上程序


- cygwin 多窗口
使用 Poderosa 来进行登录

- cygwin 安装 ssh
运行 setup.exe (cygwin的安装程序)
选择 openssh 进行安装


- cygwin 博客
  http://book.51cto.com/art/201107/278830.htm




### cygwin 中文乱码以及语法高亮
Cygwin中文乱码 vim语法高亮 ls颜色显示
2008-11-28 22:05
打开cygwin作如下配置
1 在任何位置执行 vi ~/.bashrc 并在行尾添加如下内容并保存关闭

export LESSCHARSET=latin1
alias less='/bin/less -r'
alias ls='/bin/ls -F --color=tty --show-control-chars'
export LC_ALL=zh_CN.GBK
export LC_CTYPE=zh_CN.GBK
export LANG=zh_CN.GBK
export OUTPUT_CHARSET="GBK"
2 在任何位置执行 vi ~/.inputrc 并在行尾添加如下内容并保存关闭
set meta-flag on
set input-meta on
set convert-meta off
set output-meta on
set completion-ignore-case on

或找到相应配置把前边的注释去掉

3 在任何位置执行 vi ~/.vimrc 添加如下内容并保存关闭（.vimrc文件可能不存在）此配置开启vim语法高亮
syntax enable

syntax on


### cygwin 上安装  npm
在windows上安装npm首先需要安装cygwin和nodejs，安装方法自己网上搜索一下。 

1. 安装完nodejs和cygwin后，先去github上下载npm：https://github.com/isaacs/npm 
2. 打开cygwin，进入到npm目录，使用下面命令进行安装： 
安装命令代码  收藏代码
Administrator@WIN-23C1Q4GKQ4G /isaacs-npm-bfcd368  
$ make install  


### cygwin 配色
背景色 #002240(rgb：0,34,64)
