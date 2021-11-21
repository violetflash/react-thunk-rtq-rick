import { ICharacter } from "../../models";

export interface IResponseInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
    current: number;
}

export interface IResponse {
    results: ICharacter[];
    info: IResponseInfo;
}