import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';
import {Nav} from "../Nav/Nav";
import { PageContainer } from '../ui';

export const Header = () => {
    return (
        <Box as="header" className="Header" py="10px">
            <PageContainer>
                <Flex className="header-content" justify="space-around">
                    <Nav/>
                    <ColorModeSwitcher alignSelf="flex-end"/>
                </Flex>
            </PageContainer>
        </Box>
    )
};
