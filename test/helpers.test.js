import test from "ava";
import fs from "fs";

import helpers from "../src/helpers";

test("prepare()", t => {
  const config = { workingDir: "/tmp/whatever" };

  helpers.prepare(config).then(() => {
    t.true(fs.statSync(config.workingDir));
    fs.rmdir(config.workingDir);
  });
});

test("writeFont()", t => {
  const content = "hello";
  const destination = "/tmp/whatever.txt";

  helpers.writeFont(content, destination).then(() => {
    t.true(fs.statSync(destination));
    fs.unlink(destination);
  });
});
