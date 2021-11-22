import React from 'react';
import {PaginationSkeleton} from "../skeletons";
import {Center} from "@chakra-ui/react";
import { Pagination } from 'antd';
import './style.css';

interface IPagePagination {
    pages: number;
    onChange: (page: number) => void;
    initialPage: number;
}

export const PaginationElement = ({pages, onChange, initialPage}: IPagePagination) => {
    return (
        <Center>
            {pages ? <Pagination
                style={{color: 'inherit', margin: "30px 0 20px 0"}}
                // size={isLessThan768 ? "small" : "default"}
                showQuickJumper
                responsive
                showSizeChanger={false}
                current={initialPage}
                defaultCurrent={initialPage}
                total={pages * 10}
                onChange={onChange}
            /> : <PaginationSkeleton/>}
        </Center>
    )
};