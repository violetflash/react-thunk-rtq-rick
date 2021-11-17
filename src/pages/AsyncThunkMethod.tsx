import React, {FC} from 'react';
import {Box, Heading} from "@chakra-ui/react";
import {AsyncOnScroll, AsyncPagination, PageContainer, TabsLayout} from "../components";
import {tabTitles} from "../utils/constants";


export const AsyncThunkMethod: FC = props => {

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