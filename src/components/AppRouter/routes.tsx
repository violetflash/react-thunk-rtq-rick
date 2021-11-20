import React from "react";
import {AsyncThunkMethod, CharactersPage, Main, RtkQueryMethod} from "../../pages";

interface IRoute {
    id: number;
    title: string;
    path: string;
    element: React.ReactElement;
}

export const routes: IRoute[] = [
    { id: 1, title: "Описание проекта", path: "/", element: <Main/> },
    { id: 2, title: "asyncThunk", path: "/thunks", element: <AsyncThunkMethod/> },
    { id: 3, title: "rtk-Query", path: "/queries", element: <RtkQueryMethod/> },
    { id: 4, title: "", path: "/character/:id", element: <CharactersPage/> }
];
