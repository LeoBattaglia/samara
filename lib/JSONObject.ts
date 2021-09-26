//Class
export class JSONObject{
    //Declarations
    sc:string;

    //Constructor
    constructor(){
        this.sc = "{";
    }

    //Methods
    add(str:string):void{
        this.sc += str;
    }

    addColon(){
        this.add(":");
    }

    addComma(){
        this.add(",");
    }

    addCommaToBegin(){
        this.sc = "," + this.sc;
    }

    addName(name:string):void{
        this.add("\"" + name + "\":");
    }

    addValue(name:string, value:string, isString:Boolean, setComma:Boolean):void{
        this.addName(name);
        if(isString){
            this.add("\"" + value + "\"");
        }else{
            this.add(value);
        }
        if(setComma){
            this.addComma();
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