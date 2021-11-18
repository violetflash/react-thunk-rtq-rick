import React, {FC} from 'react';
import {Flex, Skeleton} from "@chakra-ui/react";
import {responsiveWidth} from "../../CharacterCard/CharacterCard";

export const CardSkeleton:FC = () => {
    return (
        <Flex
            direction="column"
            m="0 0 20px 20px"
            width={responsiveWidth}
            shadow="lg"
            borderRadius="0 0 var(--chakra-radii-lg) var(--chakra-radii-lg)"
        >
            <Skeleton
                borderRadius="var(--chakra-radii-lg) var(--chakra-radii-lg) 0 0"

                width="full"
                height="300px"
            />
            <Flex
                p="24px"
                direction="column"
                justify="flex-end"

            >
                <Skeleton
                    alignSelf="flex-end"
                    width="70px"
                    height="17px"
                    borderRadius="var(--chakra-radii-full)"
                />
                <Skeleton
                    mt="10px"
                    width="full"
                    height="30px"
                />
            </Flex>
        </Flex>

    )
};
