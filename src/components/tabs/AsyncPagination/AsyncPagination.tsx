import React, {FC, useEffect} from 'react';
import {ContentWithPagination} from "../../../components";
import {useAppDispatch, useTypedSelector} from "../../../utils/hooks/redux-hooks";
import {fetchCharactersPage} from "../../../redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

export const AsyncPagination: FC = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const tab = searchParams.get('tab');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const {items, isLoading, error, info} = useTypedSelector(state => state.asyncThunk.pagination);


    const initialPage = page ? +page : 1;
    const activeTab = tab ? +tab : 0;


    useEffect(() => {
        dispatch(fetchCharactersPage(initialPage));
    }, [dispatch, initialPage])


    //обернуть в useCallback
    const onChange = (pageNumber: number) => {
        dispatch(fetchCharactersPage(pageNumber));
        navigate(`${pathname}?tab=${activeTab}&page=${pageNumber}`, { replace: true })
    }

    return (
        <ContentWithPagination
            onChange={onChange}
            items={items}
            info={info}
            isLoading={isLoading}
            error={error}
            initialPage={initialPage}
        />
    );
};
