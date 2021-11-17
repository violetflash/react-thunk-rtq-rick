import { Box } from '@chakra-ui/react';
import React, {FC} from 'react';
import {PageContainer} from "../components";

export const Main:FC = props => {
    return (
        <Box className="info-page">
            <PageContainer>
                <Box className="info-content">
                    Описание проекта
                </Box>
            </PageContainer>
        </Box>
    )
};