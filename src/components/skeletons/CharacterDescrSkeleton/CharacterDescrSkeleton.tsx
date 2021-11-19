import React from 'react';
import {Box, Flex, Skeleton} from "@chakra-ui/react";

export const CharacterDescrSkeleton = () => {
    return (
        <Flex
            direction={["column", "column", "row", "row"]}
            alignItems="center"
            justify="center"
            position={"relative"}
            width="full"
        >
            <Skeleton
                w="300px"
                height="300px"
                rounded="lg"
            />
            <Box
                p="15px"
                ml="20px"
            >
                <Skeleton width="200px" height="25px" mb="15px" />
                <Skeleton width="200px" height="25px" mb="15px"/>
                <Skeleton width="200px" height="25px" mb="15px"/>
                <Skeleton width="200px" height="25px" mb="15px"/>
                <Skeleton width="200px" height="25px" mb="15px"/>
            </Box>
        </Flex>
    )
};
