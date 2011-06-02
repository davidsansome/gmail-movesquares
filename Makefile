all:
	google-chrome --pack-extension=$(shell pwd) --pack-extension-key=gmail-movesquares.pem
	mv ../gmail-movesquares.crx .
