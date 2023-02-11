docker_name=smart-admin-web
tag=v1

tar -xvf dist.tar

rm -rf dist.tar

docker rmi ${docker_name}:${tag}
docker build -t ${docker_name}:${tag} .