import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppLayout} from "../AppLayout/AppLayout";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>

            </Route>
        </Routes>
    )
};
