import React from 'react';
import {Box, Divider, Flex} from "@chakra-ui/react";
import {Sider} from "../Sider/Sider";
import {Header} from "../Header/Header";
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <Flex className="AppLayout">
            <Sider/>
            <Divider variant="vertical"/>
            <Flex
                direction="column"
                className="App-flex-content"
                sx={{flex: 1}}
            >
                <Header/>
                <Divider/>
                <Box>
                    <Outlet/>
                </Box>
            </Flex>
        </Flex>
    )
};
