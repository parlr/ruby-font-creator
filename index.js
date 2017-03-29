import fs from "fs";
import webfont from "webfont";
import path from "path";
import jsonfile from "jsonfile";
import ruby from "./src/ruby";
import svg from "./src/svg";
import layout from "./src/layouts";

function prepare(config) {
  fs.mkdir(`${config.workingDir}`, 0o700, err => {
    if (err) {
      console.log("already exists");
    }
  });
}

function generateSvg(data, config) {
  const options = { width: 80, height: 80 };
  for (let datum = 0; datum < data.length; datum += 1) {
    const char = data[datum];
    const svgContent = svg.wrap([
      ruby.text(char.glyph, layout.bottom.glyph(options)),
      ruby.annotation(char.ruby, layout.top.ruby(options))
    ]);
    svg.save(`${config.workingDir}/${char.glyph}.svg`, svgContent);
  }
}

function buildFont(config) {
  return webfont({
    files: config.inputFiles,
    fontName: config.fontName
  })
    .then(content => content)
    .catch(err => {
      console.log(err);
    });
}

function writeFont(content, destination) {
  return new Promise((resolve, reject) => {
    fs.writeFile(destination, content, error => {
      if (error) {
        return reject(new Error(error));
      }

      return resolve();
    });
  });
}

function generateFontFiles(content, config) {
  config.formats.map(format => {
    writeFont(content[format], `${config.destFilename}.${format}`)
      .then(() => {
        console.log(`wrote: ${config.destFilename}.${format}`);
      })
      .catch(err => {
        console.log(`failed to write ${config.destFilename}.${format}`, err);
      });
  });
}

function start(filepath = "src/data.json") {
  jsonfile.readFile(filepath, (err, data) => {
    if (err) {
      throw err;
    }

    const config = {
      inputFiles: "./build/**/*.svg",
      workingDir: "./build/svg",
      fontName: "Hanzi-Pinyin-Font",
      destFilename: path.resolve("./build/svg"),
      formats: ["ttf", "eot", "woff", "woff2"]
    };

    prepare(config);
    generateSvg(data, config);
    buildFont(config).then(fontData => generateFontFiles(fontData, config));
  });
}

start();
