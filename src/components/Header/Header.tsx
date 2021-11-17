import {Box, Divider} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';

export const Header = () => {
    return (
        <Box as="header" className="Header">
            <ColorModeSwitcher/>
        </Box>
    )
};
