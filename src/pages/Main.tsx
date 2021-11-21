import {Box, Flex, Heading, List, ListItem, Text, VStack} from '@chakra-ui/react';
import React, {FC} from 'react';
import {PageContainer} from "../components";
import {FieldAndValueRow} from "../components/ui";

export const Main:FC = () => {
    return (
        <Box className="info-page">
            <PageContainer>
                <Box className="info-content">
                    <Heading textAlign="center" mt="20px">О проекте</Heading>
                    <VStack alignItems="flex-start" mt="20px">
                        <FieldAndValueRow responsive
                            fieldName="Тренировочный проект по работе с API"
                            value="https://rickandmortyapi.com/"
                        />
                        <FieldAndValueRow responsive
                                          fieldName="Стек"
                                          value="React, Typescript, Redux Toolkit, React-router-dom v6, Chakra Ui, Framer motion"
                        />
                        <Flex
                            alignItems="flex-start"
                            mb="10px"
                            direction={["column", "column", "row", "row"]}
                        >
                            <Text fontWeight="bold" fontSize="lg" mr="10px">Цель:</Text>

                            <List fontSize="md">
                                <ListItem>
                                    1) Отработка навыков использования различных методов получения асинхронных данных: rtk-createAsyncThunk и rtk-Query.
                                </ListItem>
                                <ListItem>
                                    2) Использование новых механизмов React-router-dom v6, такие как Outlet, useNavigate, useLocation, useSearchParams - реализация подгрузки данных (пагинация, по скроллу) на их основе.
                                </ListItem>
                                <ListItem>
                                    3) Реализация подгрузки данных по скроллу c использованием Intersection API
                                </ListItem>
                            </List>
                        </Flex>

                        <FieldAndValueRow responsive
                                          fieldName="Статус"
                                          value="В процессе"
                        />
                    </VStack>
                </Box>
            </PageContainer>
        </Box>
    )
};
