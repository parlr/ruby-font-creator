import fs from "fs";

export default {
  prepare(config) {
    return new Promise(resolve =>
      fs.mkdirSync(`${config.workingDir}`, resolve()));
  },
  writeFont(content, destination) {
    return new Promise((resolve, reject) => {
      fs.writeFile(destination, content, error => {
        if (error) {
          return reject(new Error(error));
        }

        return resolve();
      });
    });
  }
};
