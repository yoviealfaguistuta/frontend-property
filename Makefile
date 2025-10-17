VITE_APP_SERVICE_API_URL=http://127.0.0.1:8000/api

BUILD_DIR = $(PWD)/app

go:
	export VITE_APP_SERVICE_API_URL=$(VITE_APP_SERVICE_API_URL);\
	npm run dev

docker_build_image:
	docker build  -t sipd/frontend:latest  \
	--build-arg VITE_APP_SERVICE_API_URL=$(VITE_APP_SERVICE_API_URL) \
	.
	docker image tag sipd/frontend:latest

docker_app: docker_build_image
	docker run -p 3121:80 -d \
	            --restart unless-stopped \
                --name sipd_frontend_container \
                sipd/frontend:latest

docker_run: docker_app

docker_stop:
	docker container stop sipd_frontend_container
	docker container rm sipd_frontend_container
	docker rmi sipd_frontend:latest