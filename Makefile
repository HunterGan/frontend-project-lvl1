#Makefile
install: # useful after first clone or del node-modules
	npm ci

brain-games: #start game
	node bin/brain-games.js

publish: #publish dry run
	npm publish --dry-run

lint: #start eslint
	npx eslint .
