
YARN = yarn
YARNFLAGS= --mutex network
.PHONY= install generate build publish compile

install: capi-ts/node_modules node_modules
node_modules: yarn.lock
	@echo "\n👟 Installing dependencies\n"
	${YARN} ${YARNFLAGS}
capi-ts/node_modules: capi-ts/yarn.lock
	@echo "\n👟 Installing library dependencies\n"
	cd capi-ts && ${YARN} ${YARNFLAGS}
generate: install
	@echo "\n Running code generation \n"
	${YARN} ts-node index.ts
compile: generate
	@echo "\n Compiling generated code \n"
	cd capi-ts && ${YARN} build
publish: compile
	@echo "\n Publishin @guardian/capi-ts \n"
	cd capi-ts && ${YARN} publish
