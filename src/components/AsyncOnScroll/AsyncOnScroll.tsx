import React, {FC, useEffect} from 'react';
import {Box, Center, Flex} from "@chakra-ui/react";
import {CharacterCard} from "../CharacterCard/CharacterCard";
import {CardSkeleton} from "../skeletons";
import {useAppDispatch, useTypedSelector} from "../../utils/hooks/redux-hooks";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";
import {fetchCharPageOnScroll} from "../../redux";

export const AsyncOnScroll: FC = () => {
    const dispatch = useAppDispatch();
    const {charactersOnScroll, isLoadingOnScroll} = useTypedSelector(state => state.asyncThunk);

    useEffect(() => {
        dispatch(fetchCharPageOnScroll(1));
    }, [dispatch]);

    return (
        <Box>
            <Center>Карточки, подгружаемые со скроллом</Center>
            <Flex flexWrap="wrap" ml="-20px">
                {!isLoadingOnScroll && charactersOnScroll && charactersOnScroll.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}
                {isLoadingOnScroll && Array.from(Array(8).keys()).map(num => (
                    <CardSkeleton key={num}/>
                ))}
            </Flex>
            <ScrollToTop/>
            {/*{Array.from(Array(50).keys()).map(el => <br key={el}/>)}*/}
        </Box>
    )
};