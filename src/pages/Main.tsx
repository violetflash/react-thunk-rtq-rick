import {Box, Heading, Text, VStack} from '@chakra-ui/react';
import React, {FC} from 'react';
import {PageContainer} from "../components";
import {FieldAndValueRow} from "../components/ui";

export const Main:FC = props => {
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
                        <FieldAndValueRow responsive
                                          fieldName="Цель"
                                          value="1) Отработка навыков использования различных методов получения асинхронных данных: rtk-createAsyncThunk и rtk-Query. 2) Использование новых механизмов React-router-dom v6, такие как Outlet, useNavigate, useLocation, useSearchParams - реализация подгрузки данных (пагинация, по скроллу) на их основе."
                        />
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
