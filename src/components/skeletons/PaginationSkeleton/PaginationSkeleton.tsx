import React from 'react';
import {Center, Skeleton} from "@chakra-ui/react";

export const PaginationSkeleton = () => {
    return (
        <Center m="30px 0 20px 0">
            <Skeleton
                width={["200px", "300px", "400px", "400px"]}
                height="30px"
            />
        </Center>
    )
};
