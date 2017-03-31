import webfont from "webfont";
import path from "path";
import jsonfile from "jsonfile";

import helpers from "./src/helpers";
import ruby from "./src/ruby";
import svg from "./src/svg";
import layout from "./src/layouts";

const config = {
  dataSource: "src/data.json",
  fontFilepath: "./resources/fonts/DroidSansFallbackFull.ttf",
  canvas: { width: 80, height: 80 },
  inputFiles: "./build/**/*.svg",
  workingDir: "./build/svg",
  fontName: "Hanzi-Pinyin-Font",
  destFilename: path.resolve("./build/Hanzi-Pinyin-Font"),
  formats: ["ttf", "woff2"]
};

function generateSvg(data, config) {
  const engine = ruby.loadFont(config.fontFilepath);

  for (let datum = 0; datum < data.length; datum += 1) {
    const char = data[datum];
    const svgContent = svg.wrap(
      ruby.getBase(engine, char.glyph, layout.base.bottom(config.canvas)),
      ruby.getAnnotation(
        engine,
        char.ruby,
        layout.annotation.top(config.canvas)
      )
    );
    svg.save(`${config.workingDir}/${char.glyph}.svg`, svgContent);
  }
}

function buildFont(config) {
  return webfont({
    files: config.inputFiles,
    fontName: config.fontName,
    startunicode: 0x3400
  })
    .then(content => content)
    .catch(err => console.log(err));
}

function start(config) {
  jsonfile.readFile(config.dataSource, (err, data) => {
    if (err) {
      throw err;
    }

    helpers.prepare(config);
    generateSvg(data, config);
    buildFont(config).then(fontData =>
      helpers.generateFontFiles(fontData, config));
  });
}

start(config);
