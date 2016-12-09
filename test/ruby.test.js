import test from 'ava';

import ruby from '../src/ruby';

test('should extract path data', t => {
	const doc = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M22.64 50.17Q15.01…"/></svg>';

	const data = ruby.getData(doc);

	t.is(data, 'M22.64 50.17Q15.01…');
});

test('should create svg path with text', t => {
	const chinese = '北京';

	const doc = ruby.text(chinese);
	const data = ruby.getData(doc);

	t.is(data.length > 0, true);
});

test('should create svg path with annotation', t => {
	const annotation = 'běijīng';

	const doc = ruby.annotation(annotation);
	const data = ruby.getData(doc);

	t.is(data.length > 0, true);
});
