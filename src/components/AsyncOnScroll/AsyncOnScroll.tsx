import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Box, Flex} from "@chakra-ui/react";
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
    const loader = useRef(null);

    useEffect(() => {
        if (info.current === page) return;
        dispatch(fetchCharPageOnScroll(page));
    }, [dispatch, page, info]);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "30px",
            threshold: 0.5
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <Box>
            <Flex flexWrap="wrap" ml="-20px">
                {items && items.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}
                {isLoading && Array.from(Array(8).keys()).map(num => (
                    <CardSkeleton key={num}/>
                ))}
            </Flex>
            <div ref={loader}/>
            <ScrollToTop/>
            {/*{Array.from(Array(50).keys()).map(el => <br key={el}/>)}*/}
        </Box>
    )
};