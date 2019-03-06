// const foo = require("./foo.js");
const createLogger = require("./logger");
const dirinfo = require("./dirinfo");

const logger = createLogger(__filename);
const dir_path = process.argv[2];
console.log(dirinfo(dir_path));
