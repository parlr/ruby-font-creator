import fs from "fs";
import test from "ava";
import del from "del";
import jsdom from "jsdom";
import svg from "../src/svg";

test.afterEach.always(() => {
  del(["./test/test*.svg"]);
});

test("should save data to svg file asynchornously", async t => {
  const content = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M22.64 50.17Q15.01…"/></svg>';

  const filename = "./test/test1.svg";
  await svg.save(filename, content);

  t.true(fs.statSync(filename).size > 0);
});

test("should save data to svg file", t => {
  const content = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M22.64 50.17Q15.01…"/></svg>';

  const filename = "./test/test2.svg";
  svg.saveSync(filename, content);

  t.true(fs.statSync(filename).size > 0);
});

test("wrap()", t => {
  const xml = svg.wrap("<path>", "<path>");

  const document = jsdom.jsdom(xml);
  t.is(document.querySelectorAll("path").length, 2);
});
