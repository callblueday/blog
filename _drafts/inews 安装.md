The json extension is missing. Install it or recompile php without --disable-json

php 安装json扩展  
===============
sudo apt-get install php5-json

教程：
http://fatesinger.com/20?replytocom=47

配置php.ini。首先打开php.ini文件：


sudo subl /etc/php5/cli/php.ini


#vim /etc/php.ini
注：这里我的php.ini是在/etc目录下，如果你的php.ini不在这里，请修改路径为你的php.ini所在的路径。

直接在最后一行加上下面这段话：

extension=json.so
然后输入:wq保存退出。

重启Apache服务：
#/etc/init.d/httpd restart
成功重启之后，可以利用phpinfo()去查看是否有json的信息。我试着打开之前报错的页面，已经完全能正常打开了，一切OK。

/etc/php5/mods-available/json.ini and uncomment priority=20 (remove the semicolon)



安装composer
=============
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

composer install


安装数据库 mysql
==============
https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-on-ubuntu-12-04

sudo apt-get update
sudo apt-get install mysql-server php5-mysql
sudo mysql_install_db
sudo /usr/bin/mysql_secure_installation

sudo service nginx start


**命令行登陆数据库**
mysql -u root -p


安装phpmyadmin
===============
sudo apt-get install phpmyadmin
sudo ln -s /usr/share/phpmyadmin/ /usr/share/nginx/www
sudo service nginx restart
地址访问：
http://localhost/phpmyadmin/



安装 php-mcrypt
===========
安装 Mcrypt 包, 顺便安装 php 开发环境

$ sudo apt-get install php5-mcrypt php5-dev
将配置文件链接给 PHP

$ sudo ln -s /etc/php5/conf.d/mcrypt.ini /etc/php5/mods-available
开启 Mcrypt 模块

$ sudo php5enmod mcrypt
重启 Nginx, PHP-FPM

$ sudo /etc/init.d/nginx restart
$ sudo service php5-fpm restart


./bin/task db:init

./bin/task db:migrate


配置
server
  {
    listen 80;
    #listen [::]:80;
    server_name group.fatesinger.com;
    index index.html index.htm index.php default.html default.htm default.php;
    root  /home/wwwroot/inews;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
      }
    location ~ [^/]\.php(/|$)
      {
        # comment try_files $uri =404; to enable pathinfo
        try_files $uri =404;
        fastcgi_pass  unix:/tmp/php-cgi.sock;
        fastcgi_index index.php;
        include fastcgi.conf;
        #include pathinfo.conf;
      }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
      {
        expires      30d;
      }

    location ~ .*\.(js|css)?$
      {
        expires      12h;
      }

    access_log off;
  }
同时FPM配置添加环境变量

env[PAGON_ENV] = production

然后重启
sudo service php5-fpm restart


phpmyadmin
============

You are missing at least one of the phpMyAdmin configuration storage tables, or the configured table name does not match the actual table name.

See http://docs.phpmyadmin.net/en/latest/setup.html#phpmyadmin-configuration-storage.

A quick resume of what to do can be:

On the shell: locate create_tables.sql.
import /usr/share/doc/phpmyadmin/examples/create_tables.sql.gz using phpMyAdmin.
open /etc/phpmyadmin/config.inc.php and edit lines 81-92: change pma_bookmark to pma__bookmark and so on.


`/etc/phpmyadmin/config.inc.php`
 /* Optional: Advanced phpMyAdmin features */
    $cfg['Servers'][$i]['pmadb'] = $dbname;
    $cfg['Servers'][$i]['bookmarktable'] = 'pma__bookmark';
    $cfg['Servers'][$i]['relation'] = 'pma_relation';
    $cfg['Servers'][$i]['table_info'] = 'pma_table_info';
    $cfg['Servers'][$i]['table_coords'] = 'pma_table_coords';
    $cfg['Servers'][$i]['pdf_pages'] = 'pma_pdf_pages';
    $cfg['Servers'][$i]['column_info'] = 'pma_column_info';
    $cfg['Servers'][$i]['history'] = 'pma_history';
    // $cfg['Servers'][$i]['table_uiprefs'] = 'pma_table_uiprefs';
    $cfg['Servers'][$i]['pma__table_uiprefs'] = 'pma__table_uiprefs';
    $cfg['Servers'][$i]['designer_coords'] = 'pma_designer_coords';
    $cfg['Servers'][$i]['tracking'] = 'pma_tracking';
    $cfg['Servers'][$i]['userconfig'] = 'pma_userconfig';
    $cfg['Servers'][$i]['recent'] = 'pma__recent';


domain
=============
11、上面步骤都成功后，整个安装过程也就完成了。

这时直接访问目录是不行的，如：shentar.me/news/public，需要建一个子域指向该目录才行。我的子域是：http://news.shentar.me/  -> http://shentar.me/news/public/ ，这样就可以访问inews了。


config nginx
```
server
    {
        listen 80;
        #listen [::]:80;
        server_name a.localhost;
        index index.html index.htm index.php default.html default.htm default.php;
        root /home/hujinhong/www/inews2;

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php5-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }

        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
            {
                expires      30d;
            }

        location ~ .*\.(js|css)?$
            {
                expires      12h;
            }

        access_log on;
    }
```

怎样作为管理员管理内容？
===================

inews 中用户拥有的权限很简单，没有专门的后台文章编辑
普通用户
    - 可以：添加，删除，编辑内容，搜索
    - 评论他人文章
    - 修改个人资料
超级用户，需要注册，注册名与配置文件（default.php或则production.php）中一致，则拥有管理员权限，
可以操作所有文章内容。



怎么批量爬数据，注入到网站中。
========================
把inews当做一个前端容器。


1. 获取inews的相关接口



怎样在服务器上部署


