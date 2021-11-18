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
    { id: 2, title: "Метод AsyncThunk", path: "/async-thunk-method", element: <AsyncThunkMethod/> },
    { id: 3, title: "Метод Rtk-Query", path: "/rtk-query-method", element: <RtkQueryMethod/> },
    { id: 4, title: "", path: "/character/:id", element: <CharactersPage/> }
];
