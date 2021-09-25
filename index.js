"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = exports.replaceAll = exports.removeTags = exports.removeDoubleSpaces = exports.removeDoubleBreaks = exports.removeBreaksAndTabs = exports.removeAll = exports.isNumeric = exports.isNull = exports.getRequest = exports.fillString = exports.capitalizeFirstLetter = exports.ObjectContainer = exports.IndexedObject = void 0;
//Constants
const fs = require("fs");
const http = require("http");
const https = require("https");
//Exports
var IndexedObject_1 = require("./lib/IndexedObject");
Object.defineProperty(exports, "IndexedObject", { enumerable: true, get: function () { return IndexedObject_1.IndexedObject; } });
var ObjectContainer_1 = require("./lib/ObjectContainer");
Object.defineProperty(exports, "ObjectContainer", { enumerable: true, get: function () { return ObjectContainer_1.ObjectContainer; } });
//Functions
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
function fillString(str, length, char, left) {
    while (str.length < length) {
        if (left) {
            str = char + str;
        }
        else {
            str += char;
        }
    }
    return str;
}
exports.fillString = fillString;
function getRequest(url, callback) {
    let httpsMode = url.indexOf("https:") == 0;
    let client = httpsMode ? https : http;
    client.get(url, (res) => {
        let data = '';
        res.on('data', (d) => {
            data += d;
        });
        res.on('end', () => {
            callback(data);
        });
    }).on("error", (err) => {
        callback(undefined);
    });
}
exports.getRequest = getRequest;
function isNull(str) {
    if (str === null || str === undefined || str === "") {
        return true;
    }
    else {
        return false;
    }
}
exports.isNull = isNull;
function isNumeric(str) {
    let nr = Number(str);
    if (nr === NaN) {
        return false;
    }
    else {
        return true;
    }
}
exports.isNumeric = isNumeric;
function removeAll(str, search) {
    return replaceAll(str, search, "");
}
exports.removeAll = removeAll;
function removeBreaksAndTabs(str) {
    str = removeAll(str, "\t");
    str = removeAll(str, "\r\n");
    return str.trim();
}
exports.removeBreaksAndTabs = removeBreaksAndTabs;
function removeDoubleBreaks(str) {
    return replaceAll(str, "\r\n\r\n", "\r\n");
}
exports.removeDoubleBreaks = removeDoubleBreaks;
function removeDoubleSpaces(str) {
    return replaceAll(str, "  ", " ");
}
exports.removeDoubleSpaces = removeDoubleSpaces;
function removeTags(str) {
    while (str.indexOf("<") > -1 && str.indexOf(">") > str.indexOf("<")) {
        let start = str.substring(0, str.indexOf("<"));
        let end = str.substring(str.indexOf(">") + 1, str.length);
        str = start + end;
    }
    return str;
}
exports.removeTags = removeTags;
function replaceAll(str, search, replace) {
    while (str.indexOf(search) > -1) {
        str = str.replace(search, replace);
    }
    return str;
}
exports.replaceAll = replaceAll;
function writeFile(path, content) {
    fs.writeFile(path, content, err => {
        if (err) {
            console.error(err);
        }
    });
}
exports.writeFile = writeFile;
//# sourceMappingURL=index.js.map