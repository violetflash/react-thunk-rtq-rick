import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Center, Flex} from "@chakra-ui/react";
import {CharacterCard} from "../CharacterCard/CharacterCard";
import {CardSkeleton} from "../skeletons";
import {useAppDispatch, useTypedSelector} from "../../utils/hooks/redux-hooks";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";
import {fetchCharPageOnScroll} from "../../redux";

export const AsyncOnScroll: FC = () => {
    const dispatch = useAppDispatch();
    const {items, isLoading, info} = useTypedSelector(state => state.asyncThunk.onScroll);
    const initialPage = info.current ? info.current : 1;
    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        if (info.current === page) return;
        dispatch(fetchCharPageOnScroll(page));
    }, [dispatch, page]);

    return (
        <Box>
            <Center>Карточки, подгружаемые со скроллом</Center>

            <Flex flexWrap="wrap" ml="-20px">
                {!isLoading && items && items.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}
                {isLoading && Array.from(Array(8).keys()).map(num => (
                    <CardSkeleton key={num}/>
                ))}
            </Flex>

            <Center my="20px">
                <Button onClick={() => setPage((page) => page + 1)}>
                    Подгрузить следующую страницу
                </Button>
            </Center>
            <ScrollToTop/>
            {/*{Array.from(Array(50).keys()).map(el => <br key={el}/>)}*/}
        </Box>
    )
};