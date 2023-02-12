# 192.168.10.124:7001 手动部署测试用

highlight=''
NC=''
ip=192.168.5.185
remote_path=/home/devs/ai-aiming/web
remote_user=devs

echo "${highlight}---------build local dist--------------------${NC}"
npm run build:prod
rm -rf dist.tar
tar -cvf dist.tar dist
echo ">>> delete all files in $remote_path"
ssh ${remote_user}@${ip} "cd ${remote_path} && rm -rf *"
echo ">>> copy dist.tar to $remote_path"
scp ./dist.tar ${remote_user}@${ip}:${remote_path}
echo ">>> copy docker files to $remote_path"
scp -r ./docker/** ${remote_user}@${ip}:${remote_path}
echo ">>> build docker image and start container"
ssh ${remote_user}@${ip} "cd ${remote_path} && sh build.sh && cd .. && docker-compose -f fe.yml up -d && docker logs -f ai-aiming_smart-web_1"

