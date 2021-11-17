import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppLayout} from "../AppLayout/AppLayout";
import {Main} from "../../pages";
import {routes} from "./routes";

export const AppRouter = () => {

    const publicRoutes = routes.map(route => {
        return <Route key={route.id} path={route.path} element={route.element}/>
    })

    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Main/>}/>
                {publicRoutes}
            </Route>
        </Routes>
    )
};
