import React, {FC} from 'react';
import {Badge, Box, BoxProps, Flex, FlexProps, Image, Text, useColorModeValue} from "@chakra-ui/react";
import {motion} from 'framer-motion';
import {ICharacter} from "../CharacterCard/types";
import { FieldAndValueRow } from '../ui';


const MotionFlex = motion<FlexProps>(Flex);
const MotionBox = motion<BoxProps>(Box);

export const CharacterFull: FC<ICharacter> = (props) => {

    return (
        <MotionFlex
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            direction={["column", "column", "row", "row"]}
            alignItems="center"
            justify="center"
            position={"relative"}
            width="full"
            // shadow="lg"
            rounded="lg"
        >
            <MotionBox
                // initial={{translateX: "0"}}
                // animate={{ translateX: ["0", "0", "-100px"] }}
                // transition={{delay: 0.2}}
                bg={useColorModeValue('white', 'gray.800')}
                w="300px"
                position="relative">
                <Image
                    src={props.image}
                    alt={`Picture of ${props.name}`}
                    rounded="lg"
                    height="300px"
                    w="full"
                    objectFit="cover"
                    // fallbackSrc="https://via.placeholder.com/300"
                />
            </MotionBox>
            <Box
                // flex="1"
                p="15px"
                ml="20px"
            >
                <Flex alignItems="center" mb="10px">
                    <Text fontWeight="bold" fontSize="lg" mr="10px">Status:</Text>
                    <Badge
                        colorScheme={props.status !== "Alive" ? "red" : "green"}
                    >
                        {props.status}
                    </Badge>
                </Flex>
                <FieldAndValueRow fieldName="Species" value={props.species}/>
                <FieldAndValueRow fieldName="Gender" value={props.gender}/>
                <FieldAndValueRow fieldName="From" value={props.origin.name}/>
                <FieldAndValueRow fieldName="Location" value={props.location.name}/>
            </Box>
        </MotionFlex>
    )
};
