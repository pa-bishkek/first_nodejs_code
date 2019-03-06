// const foo = require("./foo.js");
const createLogger = require("./logger");
const dirinfo = require("./dirinfo");

const logger = createLogger(__filename);

console.log(dirinfo(process.cwd()));
