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
  text(glyph = "汉字", options) {
    return this.converter.getPath(glyph, options);
  },
  annotation(annotation = "hanzi", options) {
    return this.converter.getPath(annotation, options);
  },
  getData(doc) {
    const svg = jsdom.jsdom(doc);
    const path = svg.querySelector("path");

    return path.attributes.getNamedItem("d").value;
  }
};
