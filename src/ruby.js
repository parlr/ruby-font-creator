import TextToSVG from "text-to-svg";
import jsdom from "jsdom";

export default {
  rightDownward: "matrix(0,1,-1,0,0,0)",
  rightUpward: "matrix(0,-1,1,0,0,0)",
  converter: null,
  loadFont: fontFilepath => TextToSVG.loadSync(fontFilepath),
  getBase: (converter, glyph = "汉字", options) =>
    converter.getPath(glyph, options),
  getAnnotation: (converter, text = "hanzi", options) =>
    converter.getPath(text, options),
  getData: doc => {
    const svg = jsdom.jsdom(doc);
    const path = svg.querySelector("path");

    return path.attributes.getNamedItem("d").value;
  }
};
