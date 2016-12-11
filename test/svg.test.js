import test from 'ava';
import svg from '../src/svg';

const fs = require('fs');

test('should save data to svg file asynchornously', async t => {
	const content = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M22.64 50.17Q15.01…"/></svg>';

	const filename = './test/test.svg';
	await svg.save(filename, content);

	t.true(fs.statSync(filename).size > 0);
});

test('should save data to svg file', t => {
	const content = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M22.64 50.17Q15.01…"/></svg>';

	const filename = './test/test.svg';
	svg.saveSync(filename, content);

	t.true(fs.statSync(filename).size > 0);
});
