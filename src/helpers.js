import fs from "fs";

export default {
  prepare(config) {
    return new Promise(resolve => fs.mkdir(`${config.workingDir}`, resolve()));
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
  },
  generateFontFiles(content, config) {
    return new Promise((resolve, reject) => {
      config.formats.map(format =>
        this.writeFont(content[format], `${config.destFilename}.${format}`)
          .then(() => {
            console.log(`wrote: ${config.destFilename}.${format}`);
          })
          .catch(err => {
            reject();
            console.log(
              `failed to write ${config.destFilename}.${format}`,
              err
            );
          }));
      resolve();
    });
  }
};
