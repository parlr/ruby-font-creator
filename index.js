/* takes in entry :


*/

const fs = require('fs');
const TextToSVG = require('text-to-svg');
const textToSVGort = TextToSVG.loadSync(); // default font for ort
const textToSVGpho = TextToSVG.loadSync('./fonts/FreeSansBold.ttf'); // local custom font for pho

fs.mkdir('./build', 0o700, err => { if (err) { console.log('./build folder already exists'); } });

// Variables values
var list = [
	{ ort: '西', pho: 'xī', style: 'top' },
	{ ort: '中', pho: 'zhong1', style: 'top' }
];

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

for (let char of list) {
	// Active style
	var style = styles[char.style];
	// Create svg, then paths
	const svgOrt = textToSVGort.getPath(char.ort, style.ort);
	const svgPho = textToSVGpho.getPath(char.pho, style.pho);
	//Create valid svg file's data
	var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" style="border:1px solid #666">`
	    + svgOrt
	    + svgPho
	    + `</svg>`;
	// Print to file
	fs.writeFile('./build/'+ char.ort +'.svg', svg);
	// Few feedbacks
	console.log('File generation : done.');
	console.log('File data : '+JSON.stringify(char));
	console.log('File location : ./build/'+char.ort+'.svg');
}
