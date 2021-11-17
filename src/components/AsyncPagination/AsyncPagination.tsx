import React, {FC, useEffect} from 'react';
import {Box, Center, Flex, Skeleton} from "@chakra-ui/react";
import {Pagination} from "antd";
import {CharacterCard} from "../CharacterCard/CharacterCard";
import {useAppDispatch, useTypedSelector} from "../../utils/hooks/redux-hooks";
import {fetchCharactersPage} from "../../redux";
import {CardSkeleton} from "../CardSkeleton/CardSkeleton";

export const AsyncPagination: FC = props => {
    const dispatch = useAppDispatch();
    const {characters, isLoading, error} = useTypedSelector(state => state.asyncThunk);

    useEffect(() => {
        dispatch(fetchCharactersPage(1));
    }, [dispatch])

    function onChange(pageNumber: number) {
        console.log('Page: ', pageNumber);
    }

    // if (isLoading) {
    //     return <h1>Загрузка...</h1>;
    // }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Box>
            <Center mb="15px">Карточки, подгружаемые с пагинацией</Center>
            <Center>
                <Pagination
                    style={{color: 'inherit', margin: "30px 0 20px 0"}}
                    showQuickJumper
                    showSizeChanger={false}
                    defaultCurrent={2}
                    total={250}
                    onChange={onChange}
                />
            </Center>
            <Flex flexWrap="wrap" ml="-20px">
                {!isLoading && characters && characters.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}
                {isLoading && Array.from(Array(8).keys()).map(num => (
                    <CardSkeleton key={num}/>
                ))}

            </Flex>
        </Box>
    )
};