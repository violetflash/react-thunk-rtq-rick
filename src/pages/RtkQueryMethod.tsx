import React, {FC} from 'react';
import {Box, Heading} from "@chakra-ui/react";
import {PageContainer, QueryOnScroll, QueryPagination, TabsLayout} from "../components";
import {tabTitles} from "../utils/constants";

export const RtkQueryMethod: FC = props => {
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
                        Загрузка элементов с Redux-toolkit Query
                    </Heading>
                    <TabsLayout titles={tabTitles} components={[<QueryPagination/>, <QueryOnScroll/>]}/>
                </Box>
            </PageContainer>
        </Box>
    )
};