BACK_IMAGE_NAME = todo/backend
FRONT_IMAGE_NAME = todo/frontend
DOCKER_COMPOSE_FILE = docker-compose.yml

build-frontend:
	cd react-todo && npm install --force && npm run build
	docker build -t $(FRONT_IMAGE_NAME) react-todo

build-backend:
	cd api-todo && chmod +x ./gradlew && ./gradlew build -x test
	docker build -t $(BACK_IMAGE_NAME) api-todo

run-docker: build-frontend build-backend
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

stop-docker:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

clean-frontend:
	rm -rf react-todo/node_modules
	rm -rf react-todo/build

clean-backend:
	cd api-todo && ./gradlew clean

clean: clean-frontend clean-backend

all: run-docker

.PHONY: build-frontend build-backend run-docker stop-docker clean-frontend clean-backend clean all
