# 192.168.10.124:7001 手动部署测试用

highlight=''
NC=''
ip=192.168.5.185
remote_path=/home/devs/ai-aiming/web
user=devs

echo "${highlight}---------build local dist--------------------${NC}"
npm run build:prod
rm -rf dist.tar
tar -cvf dist.tar dist
echo "${highlight}---------send to server--------------------${NC}"
ssh ${user}@${ip} "cd ${remote_path} && rm -rf *"
scp ./dist.tar ${user}@${ip}:${remote_path}
scp -r ./docker/** ${user}@${ip}:${remote_path}
ssh ${user}@${ip} "cd ${remote_path} && sh build.sh && cd .. && docker-compose -f fe.yml up -d && docker logs -f ai-aiming_smart-web_1"

