# 启动或重启服务
lsof -i:8008 &>/dev/null

if [[ $? != 0 ]]; then
    source ~/.bashrc && nginx -p $PWD -c nginx.conf
else
    nginx -p $PWD -c nginx.conf -s reload # 更新时不会重新读取环境变量
fi

# 测试一下
sleep 1
curl localhost:8008
