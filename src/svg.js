const fs = require('fs');

export default {
	saveSync: (filename, content) => {
		fs.writeFileSync(filename, content);
	},
	save: (filename, content) => {
		return fs.writeFileSync(filename, content);
	},
	wrap: (text, annotation, options = {width: 80, height: 80}) => {
		return `<svg xmlns="http://www.w3.org/2000/svg" width="${options.width}" height="${options.height}">` +
			text + annotation +
			`</svg>`;
	}
};
