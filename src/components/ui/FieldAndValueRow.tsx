import React from 'react';
import {Flex, Text} from "@chakra-ui/react";

interface CardTextRowProps {
    fieldName: string;
    value: string;
    responsive?: boolean;
}

export const FieldAndValueRow = ({ fieldName, value, responsive }: CardTextRowProps) => {
    return (
        <Flex
            alignItems={responsive ? ["flex-start", "flex-start", "center", "center"] : "center"}
            mb="10px"
            direction={responsive ? ["column", "column", "row", "row"] : "row"}
        >
            <Text fontWeight="bold" fontSize="lg" mr="10px">{fieldName}:</Text>
            <Text fontSize="md">{value}</Text>
        </Flex>
    )
};
