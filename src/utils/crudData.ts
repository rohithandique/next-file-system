import { directoryDataType, explorerDataType } from "@/interfaces";
import fs from "fs";
import { parseDateTime } from "./parseData";

export const getDirectoryData = async (path: string) => {
    console.log("hello")
    const data = {} as directoryDataType;
    const items = await fs.promises.readdir(path);
    const foldersArr: explorerDataType[] = [];
    const filesArr: explorerDataType[] = [];
    for(const item of items) {
        try {
            const fileDetails = fs.lstatSync(path);
            console.log(fileDetails)
            const listItem = {} as explorerDataType;
            listItem["name"] = item;
            listItem["size"] = fileDetails.size;
            listItem["date"] = parseDateTime(fileDetails.mtime);
            listItem["user"] = fileDetails.uid === 0 ? "root" : fileDetails.uid;
            console.log(item)
            console.log(fileDetails.isDirectory())
            if(fileDetails.isDirectory()) {
                foldersArr.push(listItem);
            } else {
                filesArr.push(listItem);
            }
        } catch(err) {
            console.trace(err);
        } 
    }
    data["folders"] = foldersArr;
    data["files"] = filesArr;

    //console.log(data)
    return data;
}