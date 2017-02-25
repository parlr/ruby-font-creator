import TextToSVG from 'text-to-svg';
import jsdom from 'jsdom';

const textToSVG = TextToSVG.loadSync();

export default {
	rightDownward: 'matrix(0,1,-1,0,0,0)',
	rightUpward: 'matrix(0,-1,1,0,0,0)',
	text(chinese = '汉字', options) {
		return textToSVG.getPath(chinese, options);
	},
	annotation(pinyin = 'hanzi', options) {
		return textToSVG.getPath(pinyin, options);
	},
	getData(doc) {
		const svg = jsdom.jsdom(doc);
		const path = svg.querySelector('path');

		return path.attributes.getNamedItem('d').value;
	}
};
