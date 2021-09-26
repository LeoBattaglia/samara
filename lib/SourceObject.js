"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceObject = void 0;
//Class
class SourceObject {
    //Constructor
    constructor() {
        this.sc = "";
    }
    //Methods
    add(str, level) {
        let tabs = "";
        for (let i = 0; i < level; i++) {
            tabs += "\t";
        }
        this.sc += tabs + str + "\n";
    }
    getString() {
        return this.sc;
    }
    newLine() {
        this.sc += "\n";
    }
}
exports.SourceObject = SourceObject;
//# sourceMappingURL=SourceObject.js.map