"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectContainer = void 0;
//Imports
const IndexedObject_1 = require("./IndexedObject");
//Class
class ObjectContainer {
    //Constructor
    constructor() {
        this.objects = [];
    }
    //Methods
    get(id) {
        for (let object of this.objects) {
            if (id === object.id) {
                return object.object;
            }
        }
        return undefined;
    }
    getPosition(id) {
        let count = 0;
        for (let object of this.objects) {
            if (object.id === id) {
                return count;
            }
            count++;
        }
        return -1;
    }
    length() {
        return this.objects.length;
    }
    pop() {
        this.objects.pop();
    }
    push(id, object) {
        this.objects.push(new IndexedObject_1.IndexedObject(id, object));
    }
    remove(id) {
        let pos = this.getPosition(id);
        this.objects.splice(pos, 1);
    }
    reset(id, object) {
        let pos = this.getPosition(id);
        this.objects.splice(pos, 1, object);
    }
    shift() {
        this.objects.shift();
    }
    unshift(id, object) {
        this.objects.unshift(new IndexedObject_1.IndexedObject(id, object));
    }
}
exports.ObjectContainer = ObjectContainer;
//# sourceMappingURL=ObjectContainer.js.map