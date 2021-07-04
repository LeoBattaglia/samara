"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexedObject = void 0;
//Class
class IndexedObject {
    constructor(id, object) {
        this.id = id;
        this.object = object;
    }
    //Get-Methods
    get id() {
        return this._id;
    }
    get object() {
        return this._object;
    }
    //Set-Methods
    set id(value) {
        this._id = value;
    }
    set object(value) {
        this._object = value;
    }
}
exports.IndexedObject = IndexedObject;
//# sourceMappingURL=IndexedObject.js.map