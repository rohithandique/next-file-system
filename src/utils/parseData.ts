import { urlPathType } from "../interfaces";

export const getPathFromParams = (urlPath: urlPathType) => {
    console.log("..");
    console.log(urlPath)
    console.log("..");
    if(urlPath.slug[0]==="") return "/"
    let pathFromParams: string = "/";
    for(let i=0; i < urlPath.slug.length; i++) {
        pathFromParams += urlPath.slug[i].replaceAll("%20", " ") + "/";
    }
    console.log(pathFromParams)
    return pathFromParams;
}

export const parseDateTime = (dateTime: Date) => {
    let parsedDateTime: string = new Date(dateTime).toLocaleString("en-US");
    parsedDateTime = parsedDateTime.substring(0, parsedDateTime.length-6).replace(",","") + " " + parsedDateTime.substring(parsedDateTime.length-2, parsedDateTime.length)
    return parsedDateTime;
}