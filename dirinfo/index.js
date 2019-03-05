const fs = require("fs");
const color = require("../colors");

const info = dir_path => {
    const files_list = fs.readdirSync(dir_path, {
        withFileTypes: true
    });
    return files_list;
};

module.exports = info;
