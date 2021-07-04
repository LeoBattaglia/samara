//Imports
import {IndexedObject} from "./IndexedObject";

//Class
export class ObjectContainer{
    //Declarations
    objects:IndexedObject[];

    //Constructor
    constructor(){
        this.objects = [];
    }

    //Methods
    get(id:number | string):any{
        for(let object of this.objects){
            if(id === object.id){
                return object.object;
            }
        }
        return undefined;
    }

    getPosition(id:number | string):number{
        let count:number = 0;
        for(let object of this.objects){
            if(object.id === id){
                return count;
            }
            count++;
        }
        return -1;
    }

    pop():void{
        this.objects.pop();
    }

    push(id:number | string, object:any):void{
        this.objects.push(new IndexedObject(id, object));
    }

    remove(id:number | string):void{
        let pos:number = this.getPosition(id);
        this.objects.splice(pos, 1);
    }

    reset(id:number | string, object:IndexedObject):void{
        let pos:number = this.getPosition(id);
        this.objects.splice(pos, 1, object);
    }

    shift():void{
        this.objects.shift();
    }

    unshift(id:number | string, object:any):void{
        this.objects.unshift(new IndexedObject(id, object));
    }
}