import React, {FC, useEffect} from 'react';
import {Box, Center, Flex, Heading, useMediaQuery} from "@chakra-ui/react";
import {CharacterCard, CardSkeleton, PaginationSkeleton} from "../../components";
import {useAppDispatch, useTypedSelector} from "../../utils/hooks/redux-hooks";
import {fetchCharactersPage} from "../../redux";
import {Pagination} from "antd";
import {useLocation, useNavigate} from "react-router-dom";

export const AsyncPagination: FC = props => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const [isLessThan768] = useMediaQuery("(max-width: 768px)")
    const {characters, isLoading, error, info} = useTypedSelector(state => state.asyncThunk);

    useEffect(() => {
        dispatch(fetchCharactersPage(1));
    }, [dispatch])

    const onChange = (pageNumber: number) => {
        dispatch(fetchCharactersPage(pageNumber));
        navigate(`${pathname}?page_${pageNumber}`, { replace: true })
    }

    if (error) {
        return (
            <Center>
                <Heading>{error}</Heading>
            </Center>
        );
    }

    return (
        <Box>
            <Center mb="15px">Карточки, подгружаемые с пагинацией</Center>
            <Center>
                {info.pages ? <Pagination
                    style={{color: 'inherit', margin: "30px 0 20px 0"}}
                    size={isLessThan768 ? "small" : "default"}
                    showQuickJumper
                    showSizeChanger={false}
                    defaultCurrent={1}
                    total={info.pages * 10}
                    onChange={onChange}
                /> : <PaginationSkeleton/>}
            </Center>
            <Flex flexWrap="wrap" ml="-20px">
                {!isLoading && characters && characters.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}
                {isLoading && Array.from(Array(8).keys()).map(num => (
                    <CardSkeleton key={num}/>
                ))}

            </Flex>
        </Box>
    )
};
