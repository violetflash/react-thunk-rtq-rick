import {Badge, Box, Flex, Heading, Link, List, ListItem, Text, VStack} from '@chakra-ui/react';
import React, {FC} from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {PageContainer} from "../components/ui";
import {FieldAndValueRow} from "../components/ui";

export const Main:FC = () => {
    return (
        <Box className="info-page">
            <PageContainer>
                <Box className="info-content" pb="50px">
                    <Heading textAlign="center" mt="20px" color="inherit">О проекте</Heading>
                    <VStack alignItems="flex-start" mt="20px">
                        <Flex
                            alignItems={["flex-start", "flex-start", "center", "center"]}
                            mb="10px"
                            direction={["column", "column", "row", "row"]}
                        >
                            <Text fontWeight="bold" fontSize="lg" mr="10px">Статус:</Text>
                            <Badge colorScheme="green" variant="outline" p="2px 10px">Завершен</Badge>
                        </Flex>
                        <Flex
                            alignItems="center"
                            mb="10px"
                            direction={["column", "column", "row", "row"]}
                        >
                            <Text fontWeight="bold" fontSize="lg" mr="10px">Проект по работе с API:</Text>
                            <Link href="https://rickandmortyapi.com"  fontSize="md" isExternal>
                                https://rickandmortyapi.com <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Flex>
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
                        <Flex
                            alignItems="center"
                            mb="10px"
                            direction={["column", "column", "row", "row"]}
                        >
                            <Text fontWeight="bold" fontSize="lg" mr="10px">GitHub:</Text>
                            <Link href="https://github.com/violetflash/react-thunk-rtq-rick" p="2px 10px" fontSize="md" isExternal>
                                Ссылка на репозиторий проекта <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Flex>
                    </VStack>
                </Box>
            </PageContainer>
        </Box>
    )
};
