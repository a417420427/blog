projectRoot := $(shell echo `git rev-parse --show-toplevel`)
withYarnPath := PATH=$(projectRoot)/node_modules/yarn/bin:$$PATH
yarn := $(withYarnPath) yarn

default: \
	build_menu

build_menu:
	$(yarn) build



