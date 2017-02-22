/* takes in entry :


*/

const fs = require('fs');
const TextToSVG = require('text-to-svg');
const textToSVGort = TextToSVG.loadSync(); // default font for ort
const textToSVGpho = TextToSVG.loadSync('./fonts/FreeSansBold.ttf'); // local custom font for pho

fs.mkdir('./build', 0o700, err => { if (err) { console.log('./build folder already exists'); } });

// Variables values
var 西 = { ort: '西', pho: 'xī', style: 'top' };
var 中 = { ort: '中', pho: 'zhong1', style: 'top' };
var sinogram = 西;

// All possibles styles
const styles= {
	"top": {
	  ort : { x: 40, y: 70, fontSize: 70, anchor: 'center', attributes:
			{ fill: '#000', 'font-family':'normal','font-weight':'bold','font-style':'italic' } // the font-* DO NOT work
		},
	  pho : { x: 40, y: 10, fontSize: 20, anchor: 'middle center', attributes:
			{ fill: '#666', 'font-family':'FreeSans','font-weight':'bold','font-style':'italic' } // the font-* DO NOT work
		},
	},
	"bottom" : { },
	"left-downward" : { },
	"left-upward" : { },
	"right-downward" : { },
	"right-upward" : { }
};

// Active style
var style = styles[sinogram.style];

const svgOrt = textToSVGort.getPath(sinogram.ort, style.ort); // create ortho's path
const svgPho = textToSVGpho.getPath(sinogram.pho, style.pho); // create phono's path

var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" style="border:1px solid #666">`
    + svgOrt
    + svgPho
    + `</svg>`;

fs.writeFile('./build/'+ sinogram.ort +'.svg', svg);

console.log('File generation : done.');
console.log('File data : '+JSON.stringify(sinogram));
console.log('File location : ./build/'+sinogram.ort+'.svg');
