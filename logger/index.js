const color = require("../colors");

const createLogger = logger_name => {
    return message => {
        console.log(`[${color("red", logger_name)}]${message}`);
    };
};

module.exports = createLogger;
