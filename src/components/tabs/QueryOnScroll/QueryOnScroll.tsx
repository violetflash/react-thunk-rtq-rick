import React, {useState} from 'react';
import {ContentOnScroll} from "../../ContentOnScroll/ContentOnScroll";
import {useFetchCharactersPageQuery} from "../../../redux/services";

export const QueryOnScroll = () => {
    const [page, setPage] = useState(1);
    const {data, isLoading} = useFetchCharactersPageQuery(page);

    if (!data) return null;

    return (
        <ContentOnScroll
            setPage={setPage}
            items={data.results}
            isLoading={isLoading}
        />
    )
};
