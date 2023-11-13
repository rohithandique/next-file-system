export type rootParam = {
    params: urlPathType
    searchParams: searchParams
}

export type searchParams = {}

export type urlPathType = {
    slug: string[]
}

export type explorerDataType = {
    name: string,
    size: number,
    date: string,
    user: string | number,
}

export type directoryDataType = {
    folders: explorerDataType[],
    files: explorerDataType[]
}