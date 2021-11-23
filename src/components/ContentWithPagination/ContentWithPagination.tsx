import React from 'react';
import {Cards} from "../Cards/Cards";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";
import {Box} from "@chakra-ui/react";
import {IStateObject} from "../../redux/types";
import { PaginationElement } from '../ui';

export interface IContentPage extends IStateObject {
    onChange: (page: number) => void;
    initialPage: number;
}


export const ContentWithPagination = ({onChange, isLoading, error, items, info, initialPage}: IContentPage) => {
    return (
        <Box>
            <PaginationElement pages={info.pages} onChange={onChange} initialPage={initialPage}/>
            <Cards isLoading={isLoading} items={items}/>
            <ScrollToTop/>
        </Box>
    )
};
