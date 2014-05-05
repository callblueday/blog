
- Cygwin
  windows 下模拟 linux 命令行的工具
  http://www.cygwin.com/


- 如何安装软件
[apt-cyg](http://www.cnblogs.com/EasonWu/archive/2012/11/27/git-windows-setup-by-cygwin.html)
- [参考教程](http://www.2cto.com/os/201212/176551.html)


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