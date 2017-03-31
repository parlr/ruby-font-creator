import fs from "fs";

export default {
  prepare(config) {
    return new Promise(resolve =>
      fs.mkdirSync(`${config.workingDir}`, resolve()));
  }
};
