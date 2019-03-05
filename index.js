// const foo = require("./foo.js");
const createLogger = require("./logger");
const dirinfo = require("./dirinfo");

const logger = createLogger(__filename);

logger("message");
logger("message 2");

console.log(dirinfo(process.cwd()));
