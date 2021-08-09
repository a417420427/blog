projectRoot := $(shell echo `git rev-parse --show-toplevel`)
withYarnPath := PATH=$(projectRoot)/node_modules/yarn/bin:$$PATH
yarn := $(withYarnPath) yarn

default: \
	build_main

build_menu:
	node tools/generateMenu.js


build_main:
	$(yarn) build



