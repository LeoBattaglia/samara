//Class
export class JSONObject{
    //Declarations
    sc:string

    //Constructor
    constructor(){
        this.sc = "{";
    }

    //Methods
    add(str:string):void{
        this.sc += str;
    }

    addName(name:string):void{
        this.add("\"" + name + "\":");
    }

    addValue(name:string, value:string, isString:Boolean, setComma:Boolean):void{
        this.add("\"" + name + "\":");
        if(isString){
            this.add("\"" + value + "\"");
        }else{
            this.add(value);
        }
        if(setComma){
            this.add(",");
        }
    }

    closeArray():void{
        this.add("]");
    }

    closeObject():void{
        this.add("}");
    }

    getString():string{
        return this.sc + "}";
    }

    openArray():void{
        this.add("[");
    }

    openObject():void{
        this.add("{");
    }
}