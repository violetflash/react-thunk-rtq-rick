import React from 'react';
import {useFetchCharactersPageQuery} from '../../../redux/services';
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Center, Heading} from "@chakra-ui/react";
import {ContentWithPagination} from "../../ContentWithPagination/ContentWithPagination";

export const QueryPagination = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const tab = searchParams.get('tab');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const initialPage = page ? +page : 1;
    const {data, isLoading, error} = useFetchCharactersPageQuery(initialPage);
    const activeTab = tab ? +tab : 0;

    const onChange = (pageNumber: number) => {
        navigate(`${pathname}?tab=${activeTab}&page=${pageNumber}`, {replace: true})
    }

    const errorMsg = error ? "Произошла ошибка при загрузке данных" : null;

    if (error) {
        return (
            <Center>
                <Heading fontSize="md">{errorMsg}</Heading>
            </Center>
        );
    }

    if (!data) return null;

    return (
        <ContentWithPagination
          onChange={onChange}
          initialPage={initialPage}
          items={data!.results}
          info={data!.info}
          isLoading={isLoading}
          error={errorMsg}
        />
    )
};
