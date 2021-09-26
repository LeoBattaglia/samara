//Class
export class SourceObject{
    //Declarations
    sc:string;

    //Constructor
    constructor(){
        this.sc = "";
    }

    //Methods
    add(str:string, level:number):void{
        let tabs:string = "";
        for(let i=0; i<level; i++){
            tabs += "\t";
        }
        this.sc += tabs + str + "\n";
    }

    getString():string{
        return this.sc;
    }

    newLine():void{
        this.sc += "\n";
    }
}