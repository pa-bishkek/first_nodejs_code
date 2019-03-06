const fs = require("fs");
const color = require("../colors");

const info = dir_path => {
    const files_list = fs.readdirSync(dir_path, {
        withFileTypes: true
    });
    // console.log(files_list); // [Dirent()...]
    const result_strings = files_list
        //
        .map((f) /* экземпляр Dirent */ => {
            if (f.isDirectory()) {
                return color("red", f.name);
            } else if (f.isFile()) {
                return color("blue", f.name);
            }
        })
        //
        .filter(f => !!f);
    return result_strings.join("\n");
};

module.exports = info;
