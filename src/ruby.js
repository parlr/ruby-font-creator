import TextToSVG from 'text-to-svg';
import jsdom from 'jsdom';

const textToSVG = TextToSVG.loadSync();

export default {
	rightDownward: 'matrix(0,1,-1,0,0,0)',
	rightUpward: 'matrix(0,-1,1,0,0,0)',
	text(chinese = '汉字') {
		const attrs = {fill: 'black', stroke: 'black'};
		const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attrs};

		return textToSVG.getPath(chinese, options);
	},
	annotation(pinyin = 'hanzi') {
		const attrs = {fill: 'red', stroke: 'red', transform: 'matrix(0,1,-1,0,0,0)'};
		const options = {x: 0, y: 0, fontSize: 32, anchor: 'top', attributes: attrs};

		return textToSVG.getPath(pinyin, options);
	},
	getData(doc) {
		const svg = jsdom.jsdom(doc);
		const path = svg.querySelector('path');

		return path.attributes.getNamedItem('d').value;
	}
};
