import React from 'react';
import {Box, Divider} from "@chakra-ui/react";
import {Header} from "../Header/Header";
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <Box className="app-layout">
            <Header/>
            <Divider/>
            <Box>
                <Outlet/>
            </Box>
        </Box>
    )
};
