//Class
export class IndexedObject{
    _id:number | string;
    _object:any;

    constructor(id:number | string, object:any){
        this.id = id;
        this.object = object;
    }

    //Get-Methods
    get id():number | string{
        return this._id;
    }

    get object():any{
        return this._object;
    }

    //Set-Methods
    set id(value:number | string){
        this._id = value;
    }

    set object(value:any){
        this._object = value;
    }
}