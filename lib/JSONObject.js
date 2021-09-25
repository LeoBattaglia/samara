"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONObject = void 0;
//Class
class JSONObject {
    //Constructor
    constructor() {
        this.sc = "{";
    }
    //Methods
    add(str) {
        this.sc += str;
    }
    addComma() {
        this.add(",");
    }
    addName(name) {
        this.add("\"" + name + "\":");
    }
    addValue(name, value, isString, setComma) {
        this.addName(name);
        if (isString) {
            this.add("\"" + value + "\"");
        }
        else {
            this.add(value);
        }
        if (setComma) {
            this.addComma();
        }
    }
    closeArray() {
        this.add("]");
    }
    closeObject() {
        this.add("}");
    }
    getString() {
        return this.sc + "}";
    }
    openArray() {
        this.add("[");
    }
    openObject() {
        this.add("{");
    }
}
exports.JSONObject = JSONObject;
//# sourceMappingURL=JSONObject.js.map