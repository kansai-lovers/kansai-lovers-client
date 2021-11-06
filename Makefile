.PHONY: help
help:
	@cat Makefile

.PHONY: cp-env
cp-env:
	cp .env.example .env.local

.PHONY: install
install:
	find . -type d -name node_modules -prune -o -type f -name package.json -execdir yarn install \;

.PHONY: dev
dev:
	yarn dev

.PHONY: build
build:
	yarn build

.PHONY: start
start:
	yarn start

.PHONY: storybook
storybook:
	yarn storybook

.PHONY: prettier
prettier:
	yarn prettier

.PHONY: lint
lint:
	yarn lint

.PHONY: format
format:
	yarn prettier && yarn lint

.PHONY: precommit
precommit:
	$(MAKE) format

SERVICE:=
COMMAND:=

.PHONY: docker-compose/command
docker-compose/command:
	docker compose $(COMMAND)

.PHONY: docker-compose/build
docker-compose/build:
	docker compose build

.PHONY: docker-compose/up
docker-compose/up:
	docker compose up

.PHONY: docker-compose/up-d
docker-compose/up-d:
	docker compose up -d

.PHONY: docker-compose/up/service
docker-compose/up/service:
	docker compose up $(SERVICE)

.PHONY: docker-compose/bash/service
docker-compose/bash/service:
	docker compose exec $(SERVICE) /bin/bash

.PHONY: docker-compose/logs
docker-compose/logs:
	docker compose logs -f

.PHONY: docker-compose/down
docker-compose/down:
	docker compose down

.PHONY: __docker-compose/down-remove
__docker-compose/down-remove:
	docker compose down --rmi all --volumes --remove-orphans

DOCUMENT_SERVICE:=codegen
DOCUMENT_MOCK:=nodejs-server
DOCUMENT_CLIENT:=typescript-axios

.PHONY: swagger/gen
swagger/gen:
	docker compose run --rm $(DOCUMENT_SERVICE) generate -i /app/openapi.yml -l $(DOCUMENT_MOCK) -o /app/generate/server -D modelPropertyNaming=original &\
	docker compose run --rm $(DOCUMENT_SERVICE) generate -i /app/openapi.yml -l $(DOCUMENT_CLIENT) -o /app/generate/client -D modelPropertyNaming=original
