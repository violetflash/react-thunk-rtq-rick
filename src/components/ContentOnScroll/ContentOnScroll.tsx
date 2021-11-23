import React, {useCallback, useEffect, useRef} from 'react';
import {Cards} from "../Cards/Cards";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";
import {Box} from "@chakra-ui/react";
import {ICharacter} from "../../models";

interface IContentOnScrollProps {
    setPage: Function;
    isLoading: boolean;
    items: ICharacter[];
}

export const ContentOnScroll = ({setPage, isLoading, items}: IContentOnScrollProps) => {
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((page: number ) => page + 1);
        }
    }, [setPage]);

    useEffect(() => {
        // if (isLoading) return;
        const option = {
            root: null,
            rootMargin: "30px",
            threshold: 0.5
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);

        return () => observer.disconnect();
        //turn off observer!!!
    }, [handleObserver]);

    return (
        <Box>
            <Cards isLoading={isLoading} items={items}/>
            <div ref={loader}/>
            <ScrollToTop/>
        </Box>
    )
};
