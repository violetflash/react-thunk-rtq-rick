import React from 'react';
import {useFetchCharactersPageQuery} from '../../redux/services';
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {PaginationPage} from "../PaginationPage/PaginationPage";

export const QueryPagination = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const tab = searchParams.get('tab');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const initialPage = page ? +page : 1;
    const {data: {results}, isLoading, error} = useFetchCharactersPageQuery(initialPage);


    console.log(data);
    const activeTab = tab ? +tab : 0;

    const onChange = (pageNumber: number) => {
        navigate(`${pathname}?tab=${activeTab}&page=${pageNumber}`, {replace: true})
    }



    return results && <PaginationPage
              onChange={onChange}
              initialPage={initialPage}
              items={data.results}
              info={data.info}
              isLoading={isLoading}
              error={"error!"}
            />
};