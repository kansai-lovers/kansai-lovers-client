.PHONY: help
help:
	@cat Makefile

.PHONY: cp-env
cp-env:
	cp .env.example .env.local

.PHONY: install
install:
	yarn install

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
