import TextToSVG from 'text-to-svg';

const textToSVG = TextToSVG.loadSync();

export default {
	text(chinese = '汉字') {
		const attributes = {fill: 'black', stroke: 'black'};
		const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

		return textToSVG.getSVG(chinese, options);
	},
	annotation(pinyin = 'hanzi') {
		const attributes = {fill: 'red', stroke: 'red', transform: 'matrix(0,1,-1,0,0,0)'};
		const options = {x: 0, y: 0, fontSize: 32, anchor: 'top', attributes: attributes};

		return textToSVG.getSVG(pinyin, options);
	}
};
