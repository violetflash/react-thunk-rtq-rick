import React, {FC} from 'react';
import {Box, Heading} from "@chakra-ui/react";
import {TabsLayout} from "../components";
import { PageContainer } from '../components/ui';
import {QueryPagination} from '../components/tabs';

export const RtkQueryMethod: FC = () => {
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
                    <TabsLayout titles={['Пагинация']} components={[<QueryPagination/>]}/>
                </Box>
            </PageContainer>
        </Box>
    )
};
