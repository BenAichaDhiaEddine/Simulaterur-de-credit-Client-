.PHONY: build up down apps ps 
.DEFAULT_GOAL = help

help:
	echo "welcome to Baladiaty Super Admin apps  "
build:
	docker-compose build
up:
	docker-compose up -d
	docker-compose ps
down:
	docker-compose down
apps:
	docker exec -it  baladiaty-super-admin-app /bin/bash
ps:
	docker ps
