function setup() {
	setupScene(
		createBlock(6, appendChildren(createMobius(), createElement("face")))
	);

	renderThemes({ index: 6 });
}

setup();
