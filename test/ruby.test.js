import test from "ava";

import ruby from "../src/ruby";
import buildConfig from "../src/config";

test("loadFont()", t => {
  const engine = ruby.loadFont(buildConfig.fontFilepath);
  t.truthy(engine.font.names.fontFamily.en);
});

test("should extract path data", t => {
  const doc = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M22.64 50.17Q15.01…"/></svg>';

  const data = ruby.getData(doc);

  t.is(data, "M22.64 50.17Q15.01…");
});

test("should create svg <path> with text", t => {
  const engine = ruby.loadFont(buildConfig.fontFilepath);
  const glyph = "北";

  const doc = ruby.getBase(engine, glyph);
  const data = ruby.getData(doc);

  t.is(data.length > 0, true);
});

test("should create svg <path> with annotation", t => {
  const engine = ruby.loadFont(buildConfig.fontFilepath);
  const text = "běi";

  const doc = ruby.getAnnotation(engine, text);
  const data = ruby.getData(doc);

  t.is(data.length > 0, true);
});
