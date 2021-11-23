import React, {useEffect, useState} from 'react';
import {ContentOnScroll} from "../../ContentOnScroll/ContentOnScroll";
import {useFetchCharactersPageQuery} from "../../../redux/services";
import {useAppDispatch, useTypedSelector} from "../../../utils/hooks/redux-hooks";
import {addNewPage} from "../../../redux";

export const QueryOnScroll = () => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    // const {items} = useTypedSelector(state => state.querySlice);
    const {data, isLoading} = useFetchCharactersPageQuery(page);
    const [items, setItems] = useState(data?.results);


    // console.log(data);
    // useEffect(() => {
    //     setItems((prev) => {
    //         return [...prev, ...data?.results];
    //     })
    //     // dispatch(addNewPage(data!.results));
    // }, []);

    if (!data) return null;
    console.log(items);
    // dispatch(addNewPage(data!.results));

    return (
        <ContentOnScroll
            setPage={setPage}
            items={data.results}
            isLoading={isLoading}
        />
    )
};