import fs from "fs";

export default {
  setBuildConfig(cliArguments) {
    let config = require("./config/default").default; // eslint-disable-line global-require

    if (cliArguments.config) {
      config = require(`./config/${cliArguments.config}`).default; // eslint-disable-line global-require, import/no-dynamic-require
    }

    return config;
  },
  prepare(config) {
    return new Promise((resolve, reject) =>
      fs.mkdir(`${config.workingDir}`, err => {
        if (err && err.code !== "EEXIST") {
          reject();
        }
        resolve();
      }));
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
