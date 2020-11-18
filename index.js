"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = exports.removeTags = exports.removeDoubleSpaces = exports.removeBreaksAndTabs = exports.removeAll = exports.isNull = exports.getRequest = void 0;
//Constants
var http = require('http');
var https = require('https');
//Functions
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
    while (str.indexOf(search) > -1) {
        str = str.replace(search, "");
    }
    return str;
}
exports.removeAll = removeAll;
function removeBreaksAndTabs(str) {
    str = removeAll(str, "\t");
    str = removeAll(str, "\r\n");
    return str.trim();
}
exports.removeBreaksAndTabs = removeBreaksAndTabs;
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