//Constants
export const chars:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
                                "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                                "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7",
                                "8", "9"];
export const chars_password:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                                        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                                        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                                        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-",
                                        "*", "/", "<", ">", "ç", "%", "&", "(", ")", "?", "!", "[", "]",
                                        ":", ",", "$", "£", "@", "#", "|", "¢", "ä", "Ä", "ö", "Ö", "ü",
                                        "Ü", "_"];
const fs = require("fs");
const http = require("http");
const https = require("https");

//Exports
export {IndexedObject} from "./lib/IndexedObject";
export {JSONObject} from "./lib/JSONObject";
export {ObjectContainer} from "./lib/ObjectContainer";
export {SourceObject} from "./lib/SourceObject";

//Functions
export function addBreak(str:string, r:Boolean):string{
    if(r){
        return str + "\r\n";
    }else{
        return str + "\n";
    }
}

export function capitalizeFirstLetter(str:string):string{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createPath(str:string):string{
    str = str.toLowerCase();
    str = removeBreaksAndTabs(str);
    str = removeDoubleSpaces(str);
    str = replaceAll(str, " ", "_");
    str = replaceUmlauts(str);
    return str.trim();
}

export function fillString(str:string, length:number, char:string, left:Boolean):string{
    while(str.length < length){
        if(left){
            str = char + str;
        }else{
            str += char;
        }
    }
    return str;
}

export function getChancePerCent(chance:number):Boolean{
    let random = getRandomInt(1, 100);
    if(random <= chance){
        return true;
    }else{
        return false;
    }
}

export function getChancePerMill(chance:number):Boolean{
    let random = getRandomInt(1, 1000);
    if(random <= chance){
        return true;
    }else{
        return false;
    }
}

export function getRandomInt(min:number, max:number):number{
    if(max < min){
        let temp:number = min;
        min = max;
        max = temp;
    }
    max++;
    let difference:number = max - min;
    let ints:number[] = [];
    for(let i:number = min; i < difference + min; i++){
        ints.push(i);
    }
    for(let i:number = 0; i < difference; i++){
        let random:number = getRandomIntPseudo(0, ints.length - 1);
        let random2:number = -1;
        while(random2 === -1){
            random2 = getRandomIntPseudo(0, ints.length - 1);
            if(random2 === random){
                random2 = -1;
            }
        }
        let temp:number = ints[random];
        ints[random] = ints[random2];
        ints[random2] = temp;
    }
    return ints[getRandomIntPseudo(0, ints.length - 1)];
}

function getRandomIntPseudo(min:number, max:number):number{
    if(max < min){
        let temp:number = min;
        min = max;
        max = temp;
    }
    max++;
    let difference:number = max - min;
    let random:number = Math.floor(Math.random() * difference);
    random += min;
    return random;
}

export function getRequest(url:string, callback){
    let httpsMode:Boolean = url.indexOf("https:") == 0;
    let client = httpsMode ? https : http;
    client.get(url, (res) => {
        let data = '';
        res.on('data', (d) => {
            data += d;
        });
        res.on('end', () => {
            callback(data);
        });
    }).on("error", (err) => {
        callback(undefined);
    });
}

export function getUUID():string{
    let uuid:string = "";
    for(let i:number = 0; i < chars.length; i++){
        let random:number = getRandomInt(0, chars.length - 1);
        let random2:number = -1;
        while(random2 === -1){
            random2 = getRandomInt(0, chars.length - 1);
            if(random2 === random){
                random2 = -1;
            }
        }
        let temp:string = chars[random];
        chars[random] = chars[random2];
        chars[random2] = temp;
    }
    for(let i:number = 0; i < 8; i++){
        let part = "";
        while(part.length < 8){
            let random = getRandomInt(0, chars.length - 1);
            part += chars[random];
        }
        uuid += part;
        if(i<7){
            uuid += "-";
        }
    }
    return uuid;
}

export function isFileExist(str:string):Boolean{
    return fs.existsSync(str);
}

export function isNull(str:string):Boolean{
    if(str === null || str === undefined || str === ""){
        return true;
    }else{
        return false;
    }
}

export function isNumeric(str:string):Boolean{
    let nr = Number(str);
    if(nr === NaN){
        return false;
    }else{
        return true;
    }
}

export function isValidKey(str:string):Boolean{
    if(!isNull(str) && str.length === 1){
        return true;
    }
    return false;
}

export function readFile(path:string):string{
    return fs.readFileSync(path).toString();
}

export function removeAll(str:string, search:string):string{
    return replaceAll(str, search, "");
}

export function removeBreaks(str:string):string{
    str = removeAll(str, "\r\n");
    str = removeAll(str, "\n");
    return str.trim();
}

export function removeBreaksAndTabs(str:string):string{
    str = removeBreaks(str);
    str = removeTabs(str);
    return str.trim();
}

export function removeDoubleBreaks(str:string):string{
    str = replaceAll(str, "\r\n\r\n", "\r\n");
    return replaceAll(str, "\n\n", "\n");
}

export function removeDoubleSpaces(str:string):string{
    return replaceAll(str, "  ", " ");
}

export function removeTabs(str:string):string{
    str = removeAll(str, "\t");
    return str.trim();
}

export function removeTags(str:string):string{
    while(str.indexOf("<") > -1 && str.indexOf(">") > str.indexOf("<")){
        let start = str.substring(0, str.indexOf("<"));
        let end = str.substring(str.indexOf(">") + 1, str.length);
        str = start + end;
    }
    return str;
}

export function replaceAll(str:string, search:string, replace:string):string{
    while(str.indexOf(search) > -1){
        str = str.replace(search, replace);
    }
    return str;
}

export function replaceUmlauts(str:string):string{
    str = replaceAll(str, "ä", "ae");
    str = replaceAll(str, "ö", "oe");
    str = replaceAll(str, "ü", "ue");
    return str;
}

export function writeFile(path:string, content:string){
    fs.writeFile(path, content, err => {
        if(err){
            console.error(err);
        }
    });
}