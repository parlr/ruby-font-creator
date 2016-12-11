const fs = require('fs');

export default {
	saveSync: (filename, content) => {
		fs.writeFileSync(filename, content);
	},
	save: (filename, content) => {
		return fs.writeFileSync(filename, content);
	}
};
