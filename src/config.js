import path from "path";
import layout from "./layouts";

export default {
  canvas: { width: 80, height: 80 },
  dataSource: path.resolve("./src/data.json"),
  destFilename: path.resolve("./build/Hanzi-Pinyin-Font"),
  fontFilepath: path.resolve("./resources/fonts/DroidSansFallbackFull.ttf"),
  fontName: "Hanzi-Pinyin-Font",
  formats: ["ttf", "woff2"],
  inputFiles: "./build/**/*.svg",
  workingDir: path.resolve("./build/svg"),
  get layout() {
    return {
      base: layout.base.bottom(this.canvas),
      annotation: layout.annotation.top(this.canvas)
    };
  }
};
