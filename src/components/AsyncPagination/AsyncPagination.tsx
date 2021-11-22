import React, {FC, useEffect} from 'react';
import {Box, Center, Flex, FlexProps, Heading} from "@chakra-ui/react";
import {CharacterCard, CardSkeleton, PaginationSkeleton, ScrollToTop} from "../../components";
import {useAppDispatch, useTypedSelector} from "../../utils/hooks/redux-hooks";
import {fetchCharactersPage} from "../../redux";
import {Pagination} from "antd";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {motion} from 'framer-motion';
import './style.css';

const MotionFlex = motion<FlexProps>(Flex);

const container = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

export const AsyncPagination: FC = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const tab = searchParams.get('tab');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    // const [isLessThan768] = useMediaQuery("(max-width: 768px)")
    const {items, isLoading, error, info} = useTypedSelector(state => state.asyncThunk.pagination);


    const initialPage = page ? +page : 1;
    const activeTab = tab ? +tab : 0;


    useEffect(() => {
        dispatch(fetchCharactersPage(initialPage));
    }, [dispatch, initialPage])


    const onChange = (pageNumber: number) => {
        dispatch(fetchCharactersPage(pageNumber));
        navigate(`${pathname}?tab=${activeTab}&page=${pageNumber}`, { replace: true })
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
            <Center>
                {info.pages ? <Pagination
                    style={{color: 'inherit', margin: "30px 0 20px 0"}}
                    // size={isLessThan768 ? "small" : "default"}
                    showQuickJumper
                    responsive
                    showSizeChanger={false}
                    current={initialPage}
                    defaultCurrent={initialPage}
                    total={info.pages * 10}
                    onChange={onChange}
                /> : <PaginationSkeleton/>}
            </Center>
            <MotionFlex
                variants={container}
                initial="hidden"
                animate="visible"
                flexWrap="wrap"
                ml="-20px"
            >
                {!isLoading && items && items.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}
                {isLoading && Array.from(Array(8).keys()).map(num => (
                    <CardSkeleton key={num}/>
                ))}
            </MotionFlex>
            <ScrollToTop/>
        </Box>
    )
};
