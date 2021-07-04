"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = exports.removeTags = exports.removeDoubleSpaces = exports.removeDoubleBreaks = exports.removeBreaksAndTabs = exports.removeAll = exports.isNull = exports.getRequest = exports.fillString = exports.capitalizeFirstLetter = void 0;
//Constants
var http = require('http');
var https = require('https');
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
    var httpsMode = url.indexOf("https:") == 0;
    var client = httpsMode ? https : http;
    client.get(url, function (res) {
        var data = '';
        res.on('data', function (d) {
            data += d;
        });
        res.on('end', function () {
            callback(data);
        });
    }).on("error", function (err) {
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
        var start = str.substring(0, str.indexOf("<"));
        var end = str.substring(str.indexOf(">") + 1, str.length);
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
//# sourceMappingURL=index.js.map