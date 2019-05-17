# njs-demo

nginscript demo. 在nginx中运行javascript脚本.

## 参考

```
文档：
http://nginx.org/en/docs/njs/
案例：
https://github.com/xeioex/njs-examples
```

## 安装

```bash
wget http://nginx.org/download/nginx-1.15.12.tar.gz
tar zxf nginx-1.15.12.tar.gz
cd nginx-1.15.12
wget http://hg.nginx.org/njs/archive/tip.tar.gz  (0.3.1上面那个版本）
tar zxf tip.tar.gz
./configure --add-module=njs-*************/nginx
make && sudo make install
ln -s /usr/local/nginx/sbin/nginx  /usr/local/bin/nginx
```

## 开始

```bash
git clone https://github.com/freemember007/njs-demo
sh deploy.sh
```
