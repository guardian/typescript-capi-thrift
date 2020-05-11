
YARN = yarn
YARNFLAGS= --mutex network
.PHONY= install generate build publish compile

install:
	@echo "\n👟 Installing dependencies\n"
	${YARN} ${YARNFLAGS}
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
