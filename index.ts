//Constants
const http = require('http');
const https = require('https');

//Functions
export function capitalizeFirstLetter(str:string):string{
    return str.charAt(0).toUpperCase() + str.slice(1);
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

export function isNull(str:string):Boolean{
    if(str === null || str === undefined || str === ""){
        return true;
    }else{
        return false;
    }
}

export function removeAll(str:string, search:string):string{
    return replaceAll(str, search, "");
}

export function removeBreaksAndTabs(str:string):string{
    str = removeAll(str, "\t");
    str = removeAll(str, "\r\n");
    return str.trim();
}

export function removeDoubleBreaks(str:string):string{
    return replaceAll(str, "\r\n\r\n", "\r\n");
}

export function removeDoubleSpaces(str:string):string{
    return replaceAll(str, "  ", " ");
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