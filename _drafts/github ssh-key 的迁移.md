经常在迁移 ssh-key 的时候，会碰到 ssh-key 无法连接到远程服务器的事。就我所遇到的问题是，我有一对已经生成好的
公私钥，这一对公私钥会对应我的 github，以及在实际工作中的其他项目。如何使这些不同的项目共用我的秘钥呢？


$ cd ~/.ssh
$ ls
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub


// 我的
config  id_rsa  id_rsa_github  id_rsa_github.pub  known_hosts


github 常用命令
git remote add origin https://github.com/username/jekyll_demo.git



### 参考资料
- [progit-sshkey](http://git-scm.com/book/zh/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)