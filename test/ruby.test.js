import test from 'ava';

import ruby from '../src/ruby';

test('should parse a line', t => {
	const chinese = '北京';

	const doc = ruby.text(chinese);
	const parser = new DOMParser();
	const svg = parser.parseFromString(doc, 'image/svg+xml');
	const d = svg.querySelector('path').attributes.getNamedItem('d').value;

	t.is(d.length > 0, true);
});
