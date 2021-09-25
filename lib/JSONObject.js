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
    addValue(name, value, isString, setComma) {
        this.add("\"" + name + "\":");
        if (isString) {
            this.add("\"" + value + "\"");
        }
        else {
            this.add(value);
        }
        if (setComma) {
            this.add(",");
        }
    }
    closeArray() {
        this.add("]");
    }
    closeObject() {
        this.add("}");
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