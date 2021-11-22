import { ICharacter } from "../models";

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

export interface Base {
    isLoading: boolean;
    error: string | null;
}

export interface IChar extends Base {
    item: ICharacter;
}

export interface IStateObject extends Base {
    items: ICharacter[],
    info: IResponseInfo;
}

export interface IState {
    chosenChar: IChar;
    pagination: IStateObject;
    onScroll: IStateObject;
}