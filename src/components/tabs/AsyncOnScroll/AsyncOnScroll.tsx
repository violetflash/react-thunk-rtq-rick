import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useTypedSelector} from "../../../utils/hooks/redux-hooks";
import {fetchCharPageOnScroll} from "../../../redux";
import {ContentOnScroll} from "../../ContentOnScroll/ContentOnScroll";

export const AsyncOnScroll: FC = () => {
    const dispatch = useAppDispatch();
    const {items, isLoading, info} = useTypedSelector(state => state.asyncThunk.onScroll);
    const initialPage = info.current ? info.current : 1;
    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        //предотвращаем загрузку страницы, если текущая страница уже была загружена
        if (info.current === page) return;
        dispatch(fetchCharPageOnScroll(page));
    }, [dispatch, page, info]);

    return (
        <ContentOnScroll
            setPage={setPage}
            items={items}
            isLoading={isLoading}
        />
        // <Box>
        //     <Cards isLoading={isLoading} items={items}/>
        //     <div ref={loader}/>
        //     <ScrollToTop/>
        // </Box>
    )
};
