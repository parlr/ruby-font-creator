import TextToSVG from "text-to-svg";
import jsdom from "jsdom";

export default {
  rightDownward: "matrix(0,1,-1,0,0,0)",
  rightUpward: "matrix(0,-1,1,0,0,0)",
  converter: null,
  loadFont(fontFilepath) {
    this.converter = TextToSVG.loadSync(fontFilepath);
    return this.converter;
  },
  getBase(glyph = "汉字", options) {
    return this.converter.getPath(glyph, options);
  },
  getAnnotation(text = "hanzi", options) {
    return this.converter.getPath(text, options);
  },
  getData(doc) {
    const svg = jsdom.jsdom(doc);
    const path = svg.querySelector("path");

    return path.attributes.getNamedItem("d").value;
  }
};
