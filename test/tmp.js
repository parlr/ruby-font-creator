require("text-to-svg")
const TextToSVG = require('text-to-svg');
//const textToSVG = TextToSVG.loadSync(); default font
const textToSVG = TextToSVG.loadSync('resources/fonts/DroidSansFallbackFull.ttf'); // local custom font


const glyph = {x: 40, y: 70, fontSize: 70, anchor: 'center', attributes: {fill: 'black'}};
const phonetic = {x: 40, y: 10, fontSize: 20, anchor: 'middle center', attributes: {fill: 'black'}};

const svgMain = textToSVG.getPath('西', glyph);
const svgPho = textToSVG.getPath('totot', phonetic);

var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" style="border:1px solid #666">`
	+ svgMain
	+ svgPho
	+ `</svg>`;
console.log(svg);
