import test from 'ava';

import ruby from '../src/ruby';

test('should parse a line', t => {
	const chinese = '北京';

	let svg = ruby.text(chinese);

	console.log(svg);
	t.deepEqual(svg, {});
});
