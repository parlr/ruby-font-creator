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
