import React, {FC} from 'react';
import {Box, Heading} from "@chakra-ui/react";
import {TabsLayout} from "../components";
import {tabTitles} from "../utils/constants";
import { PageContainer } from '../components/ui';
import {AsyncOnScroll, AsyncPagination} from '../components/tabs';


export const AsyncThunkMethod: FC = () => {

    return (
        <Box>
            <PageContainer>
                <Box className="info-content">
                    <Heading
                        as="h2"
                        fontSize="2xl"
                        textAlign="center"
                        p="30px 0 10px"
                        color="inherit"
                    >
                        Загрузка элементов с Async thunk'ами
                    </Heading>
                    <TabsLayout titles={tabTitles} components={[<AsyncPagination/>, <AsyncOnScroll/>]}/>
                </Box>
            </PageContainer>
        </Box>
    )
};
