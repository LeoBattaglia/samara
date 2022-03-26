"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = exports.replaceUmlauts = exports.replaceAll = exports.removeTags = exports.removeTabs = exports.removeDoubleSpaces = exports.removeDoubleBreaks = exports.removeBreaksAndTabs = exports.removeBreaks = exports.removeAll = exports.readFile = exports.isValidKey = exports.isNumeric = exports.isNull = exports.isFileExist = exports.getRequest = exports.getRandomIntPseudo = exports.getChancePerMill = exports.getChancePerCent = exports.fillString = exports.extractFromString = exports.cutFromString = exports.createPath = exports.capitalizeFirstLetter = exports.addBreak = exports.StringExtract = exports.SourceObject = exports.ObjectContainer = exports.JSONObject = exports.IndexedObject = void 0;
//Constants
const fs = require("fs");
const http = require("http");
const https = require("https");
//Exports
var IndexedObject_1 = require("./lib/IndexedObject");
Object.defineProperty(exports, "IndexedObject", { enumerable: true, get: function () { return IndexedObject_1.IndexedObject; } });
var JSONObject_1 = require("./lib/JSONObject");
Object.defineProperty(exports, "JSONObject", { enumerable: true, get: function () { return JSONObject_1.JSONObject; } });
var ObjectContainer_1 = require("./lib/ObjectContainer");
Object.defineProperty(exports, "ObjectContainer", { enumerable: true, get: function () { return ObjectContainer_1.ObjectContainer; } });
var SourceObject_1 = require("./lib/SourceObject");
Object.defineProperty(exports, "SourceObject", { enumerable: true, get: function () { return SourceObject_1.SourceObject; } });
//Classes
class StringExtract {
    //Constructor
    constructor(pre, ext, post) {
        this.pre = pre;
        this.ext = ext;
        this.post = post;
    }
}
exports.StringExtract = StringExtract;
//Functions
function addBreak(str, r) {
    if (r) {
        return str + "\r\n";
    }
    else {
        return str + "\n";
    }
}
exports.addBreak = addBreak;
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
function createPath(str) {
    str = str.toLowerCase();
    str = removeBreaksAndTabs(str);
    str = removeDoubleSpaces(str);
    str = replaceAll(str, " ", "_");
    str = replaceUmlauts(str);
    return str.trim();
}
exports.createPath = createPath;
function cutFromString(str, start, end) {
    while (str.indexOf(start) > -1 && str.indexOf(end) > str.indexOf(start)) {
        let begin = str.substring(0, str.indexOf(start));
        let end2 = str.substring(str.indexOf(end) + end.length, str.length);
        str = begin + end2;
    }
    return str;
}
exports.cutFromString = cutFromString;
function extractFromString(str, start, end) {
    let ext;
    if (str.indexOf(start) > -1 && str.indexOf(end) > str.indexOf(start)) {
        let pre = str.substring(0, str.indexOf(start));
        let post = str.substring(str.indexOf(end) + end.length, str.length);
        let extraction = str.substring(str.indexOf(start), str.indexOf(end));
        ext = new StringExtract(pre, extraction, post);
    }
    else {
        ext = undefined;
    }
    return ext;
}
exports.extractFromString = extractFromString;
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
function getChancePerCent(chance) {
    let random = getRandomIntPseudo(1, 100);
    if (random <= chance) {
        return true;
    }
    else {
        return false;
    }
}
exports.getChancePerCent = getChancePerCent;
function getChancePerMill(chance) {
    let random = getRandomIntPseudo(1, 1000);
    if (random <= chance) {
        return true;
    }
    else {
        return false;
    }
}
exports.getChancePerMill = getChancePerMill;
function getRandomIntPseudo(min, max) {
    if (max < min) {
        let temp = min;
        min = max;
        max = temp;
    }
    max++;
    let difference = max - min;
    let random = Math.floor(Math.random() * difference);
    random += min;
    return random;
}
exports.getRandomIntPseudo = getRandomIntPseudo;
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
function isFileExist(str) {
    return fs.existsSync(str);
}
exports.isFileExist = isFileExist;
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
function isValidKey(str) {
    if (!isNull(str) && str.length === 1) {
        return true;
    }
    return false;
}
exports.isValidKey = isValidKey;
function readFile(path) {
    return fs.readFileSync(path).toString();
}
exports.readFile = readFile;
function removeAll(str, search) {
    return replaceAll(str, search, "");
}
exports.removeAll = removeAll;
function removeBreaks(str) {
    str = removeAll(str, "\r\n");
    str = removeAll(str, "\n");
    return str.trim();
}
exports.removeBreaks = removeBreaks;
function removeBreaksAndTabs(str) {
    str = removeBreaks(str);
    str = removeTabs(str);
    return str.trim();
}
exports.removeBreaksAndTabs = removeBreaksAndTabs;
function removeDoubleBreaks(str) {
    str = replaceAll(str, "\r\n\r\n", "\r\n");
    return replaceAll(str, "\n\n", "\n");
}
exports.removeDoubleBreaks = removeDoubleBreaks;
function removeDoubleSpaces(str) {
    return replaceAll(str, "  ", " ");
}
exports.removeDoubleSpaces = removeDoubleSpaces;
function removeTabs(str) {
    str = removeAll(str, "\t");
    return str.trim();
}
exports.removeTabs = removeTabs;
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
function replaceUmlauts(str) {
    str = replaceAll(str, "ä", "ae");
    str = replaceAll(str, "ö", "oe");
    str = replaceAll(str, "ü", "ue");
    return str;
}
exports.replaceUmlauts = replaceUmlauts;
function writeFile(path, content) {
    fs.writeFile(path, content, err => {
        if (err) {
            console.error(err);
        }
    });
}
exports.writeFile = writeFile;
//# sourceMappingURL=index.js.map