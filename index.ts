export function isNull(str:string):Boolean{
    if(str === null || str === undefined || str === ""){
        return true;
    }else{
        return false;
    }
}

export function removeAll(str:string, search:string):string{
    while(str.indexOf(search) > -1){
        str = str.replace(search, "");
    }
    return str;
}

export function removeBreaksAndTabs(str:string):string{
    str = removeAll(str, "\t");
    str = removeAll(str, "\r\n");
    return str.trim();
}

export function removeDoubleSpaces(str:string):string{
    return replaceAll(str, "  ", " ");
}

export function replaceAll(str:string, search:string, replace:string):string{
    while(str.indexOf(search) > -1){
        str = str.replace(search, replace);
    }
    return str;
}