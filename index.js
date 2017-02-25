import fs from 'fs';
import ruby from './src/ruby';
import svg from './src/svg';
import layout from './src/layouts';

const data = [
	{glyph: '西', phonetic: 'xī'},
	{glyph: '中', phonetic: 'zong1'}
];

prepare();
build(data);

function build(data) {
	const options = {width: 80, height: 80};
	for (let datum = 0; datum < data.length; datum++) {
		const char = data[datum];
		const svgContent = svg.wrap([
			ruby.text(char.glyph, layout.bottom.glyph(options)),
			ruby.annotation(char.phonetic, layout.top.phonetic(options))
		]);
		svg.save(`./build/${char.glyph}.svg`, svgContent);
	}
}

function prepare() {
	fs.mkdir('./build', 0o700, err => {
		if (err) {
			console.log('already exists');
		}
	});
}
