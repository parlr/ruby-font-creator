import test from "ava";

import layout from "../src/layouts";

test("verify layout.annotation.top attributes", t => {
  const attributes = layout.annotation.top({ width: 80, height: 80 });

  t.deepEqual(attributes, {
    x: 40,
    y: -1,
    fontSize: 16,
    anchor: "top center",
    attributes: { fill: "grey", stroke: "grey", id: "annotation" }
  });
});

test("verify layout.base.bottom attributes", t => {
  const attributes = layout.base.bottom({ width: 80, height: 80 });

  t.deepEqual(attributes, {
    x: 40,
    y: 82,
    fontSize: 72,
    anchor: "bottom center",
    attributes: { fill: "black", stroke: "black", id: "glyph" }
  });
});
