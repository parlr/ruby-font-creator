import TextToSVG from 'text-to-svg';

const textToSVG = TextToSVG.loadSync();

export default {
	text(chinese = '汉字') {
		const attrs = {
			fill: 'black',
			stroke: 'black'};
		const options = {
			x: 0,
			y: 0,
			fontSize: 72,
			anchor: 'top',
			attributes: attrs};

		return textToSVG.getSVG(chinese, options);
	},
	annotation(pinyin = 'hanzi') {
		const attrs = {
			fill: 'red',
			stroke: 'red',
			transform: 'matrix(0,1,-1,0,0,0)'};
		const options = {
			x: 0,
			y: 0,
			fontSize: 32,
			anchor: 'top',
			attributes: attrs};

		return textToSVG.getSVG(pinyin, options);
	},
	getData(doc) {
		const parser = new DOMParser();
		const svg = parser.parseFromString(doc, 'image/svg+xml');
		const path = svg.querySelector('path');

		return path.attributes.getNamedItem('d').value;
	}
};
