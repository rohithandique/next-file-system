import React from "react";
import { getPathFromParams } from "../../utils/parseData";
import { rootParam, urlPathType } from "@/interfaces";
import { getDirectoryData } from "@/utils/crudData";

export default async function Home( rootParam: rootParam) {
    let path = getPathFromParams(rootParam.params);
    let data = await getDirectoryData(path);
    
    return (
        <div>Hello</div>
    );
}