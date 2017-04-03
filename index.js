import webfont from "webfont";
import jsonfile from "jsonfile";

import helpers from "./src/helpers";
import ruby from "./src/ruby";
import svg from "./src/svg";
import buildConfig from "./src/config";

function generateSvg(data, config) {
  const engine = ruby.loadFont(config.fontFilepath);

  for (let datum = 0; datum < data.length; datum += 1) {
    const char = data[datum];
    const svgContent = svg.wrap(
      ruby.getBase(engine, char.glyph, config.layout.base),
      ruby.getAnnotation(engine, char.ruby, config.layout.annotation)
    );

    const unicode = char.codepoint.replace("U+", "u");
    svg.save(`${config.workingDir}/${unicode}-${char.glyph}.svg`, svgContent);
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

start(buildConfig);
