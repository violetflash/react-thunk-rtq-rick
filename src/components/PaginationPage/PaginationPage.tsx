import React from 'react';
import {PaginationElement} from "../PaginationElement/PaginationElement";
import {Cards} from "../Cards/Cards";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";
import {Box, Center, Heading} from "@chakra-ui/react";
import {useSearchParams} from "react-router-dom";
import {IStateObject} from "../../redux/types";

export interface IPaginationPage extends IStateObject {
    onChange: (page: number) => void;
    initialPage: number;
}


export const PaginationPage = ({onChange, isLoading, error, items, info, initialPage}: IPaginationPage) => {

    if (error) {
        return (
            <Center>
                <Heading>{error}</Heading>
            </Center>
        );
    }

    return (
        <Box>
            <PaginationElement pages={info.pages} onChange={onChange} initialPage={initialPage}/>
            <Cards isLoading={isLoading} items={items}/>
            <ScrollToTop/>
        </Box>
    )
};