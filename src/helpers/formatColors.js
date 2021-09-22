export const formatColors = (color) => {
	let rgb = "";
	for (let properties in color) {
		rgb += properties;
	}
	rgb += "(";
	for (let properties in color) {
		rgb += color[properties] + ",";
	}
	rgb = rgb.substr(0, rgb.length - 1) + ")";
	return rgb;
};

const componentToHex = (c) => {
	let hex = c.toString(16);
	return (hex.length = 1 ? "0" + hex : hex);
};

export const rgbToHex = (r, g, b) => {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
