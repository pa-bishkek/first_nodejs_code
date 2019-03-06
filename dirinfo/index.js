const fs = require("fs");
const path = require("path");
const color = require("../colors");

const info = dir_path => {
    const tree = getTree(dir_path);
    return getFilesString(tree);
};

const getFilesString = (tree, level = 0) => {
    let result = "";
    const lineF = str => `${new Array(level).fill("--").join("")}${str}\n`;
    for (let i of tree) {
        if (typeof i === "string") {
            result += lineF(i);
        } else if (typeof i === "object") {
            result += lineF(color("red", i.name));
            result += getFilesString(i.children, level + 1);
        }
    }
    return result;
};

const getTree = dir_path => {
    const files_list = fs.readdirSync(dir_path, {
        withFileTypes: true
    });
    // console.log(files_list); // [Dirent()...]
    return (
        files_list
            //
            .map((f) /* экземпляр Dirent */ => {
                if (f.isDirectory()) {
                    return {
                        name: f.name,
                        children: getTree(path.join(dir_path, f.name))
                    };
                } else if (f.isFile()) {
                    return color("blue", f.name);
                }
            })
            //
            .filter(f => !!f)
    );
};

module.exports = info;
