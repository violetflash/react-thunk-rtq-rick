import React, {FC} from 'react';
import {ICharacter} from "./types";
import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Text,
    LinkBox,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";

export const responsiveWidth = ['calc(100%)', 'calc(100% / 2 - 20px)', 'calc(100% / 3 - 20px)', 'calc(100% / 4 - 20px)'];

export const CharacterCard = (props: ICharacter) => {
    return (
        <LinkBox
            as={Link}
            width={responsiveWidth}
            m="0 0 20px 20px"
            to={`/character/${props.id}`}
        >
            <Flex
                alignItems="center"
                justifyContent="center"
                position={"relative"}
            >
                <Badge
                    position={"absolute"}
                    bg="gray.100"
                    color="black"
                    sx={{top: "10px", left: "10px"}}
                    zIndex={1}
                >
                    {props.id}
                </Badge>
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    // maxW="sm"
                    w="full"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={props.image}
                        alt={`Picture of ${props.name}`}
                        roundedTop="lg"
                        height="300px"
                        w="full"
                        objectFit="cover"
                        fallbackSrc="https://via.placeholder.com/300"
                    />

                    <Box p="6">
                        <Flex  justify="flex-end">
                            <Badge
                                rounded="full"
                                px="2"
                                fontSize="0.8em"
                                colorScheme={props.status !== "Alive" ? "red" : "green"}
                            >
                                {props.status}
                            </Badge>
                        </Flex>
                        <Flex mt="1" justifyContent="baseline" alignContent="center">
                            <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                as="h4"
                                color="inherit"
                                lineHeight="tight"
                                isTruncated>
                                {props.name}
                            </Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </LinkBox>
    )
};