import { directoryDataType, explorerDataType } from "@/interfaces";
import fs from "fs";
import { parseDateTime } from "./parseData";
import path from "path";

export const getDirectoryData = async (parsedPath: string) => {
    const data = {} as directoryDataType;
    const items = await fs.promises.readdir(parsedPath);
    const foldersArr: explorerDataType[] = [];
    const filesArr: explorerDataType[] = [];
    for(const item of items) {
        try {
            const fileDetails = fs.statSync(path.resolve(parsedPath));
            const listItem = {} as explorerDataType;
            listItem["name"] = item;
            listItem["size"] = fileDetails.size;
            listItem["date"] = parseDateTime(fileDetails.mtime);
            listItem["user"] = fileDetails.uid === 0 ? "root" : fileDetails.uid;
            console.log(listItem)
            console.log(fileDetails.isFile())
            console.log(fileDetails.isDirectory())
            if(fileDetails.isFile()) {
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