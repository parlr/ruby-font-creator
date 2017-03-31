import webfont from "webfont";
import path from "path";
import jsonfile from "jsonfile";
import helpers from "./src/helpers";
import ruby from "./src/ruby";
import svg from "./src/svg";
import layout from "./src/layouts";

function generateSvg(data, config) {
  const options = { width: 80, height: 80 };
  const converter = ruby.loadFont("./resources/fonts/NotoSansTC-Regular.otf");

  for (let datum = 0; datum < data.length; datum += 1) {
    const char = data[datum];
    const svgContent = svg.wrap(
      ruby.getBase(converter, char.glyph, layout.base.bottom(options)),
      ruby.getAnnotation(converter, char.ruby, layout.annotation.top(options))
    );
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

function start(filepath = "src/data.json") {
  jsonfile.readFile(filepath, (err, data) => {
    if (err) {
      throw err;
    }

    const config = {
      inputFiles: "./build/**/*.svg",
      workingDir: "./build/svg",
      fontName: "Hanzi-Pinyin-Font",
      destFilename: path.resolve("./build/Hanzi-Pinyin-Font"),
      formats: ["ttf", "woff2"]
    };

    helpers.prepare(config);
    generateSvg(data, config);
    buildFont(config); //.then(fontData => helpers.generateFontFiles(fontData, config));
  });
}

start();
