import React, {FC} from 'react';
import {ICharacter} from "./types";
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Text,
    chakra,
    Tooltip, LinkBox,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";


export const CharacterCard: FC<ICharacter> = (props) => {
    return (
        <LinkBox as={Link} to={`/character/${props.id}`}>
            <Flex p="20px" w="full" alignItems="center" justifyContent="center">
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={props.image}
                        alt={`Picture of ${props.name}`}
                        roundedTop="lg"
                    />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                {props.status}
                            </Badge>
                        </Box>
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
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

                        <Flex justifyContent="space-between" alignContent="center">
                            <Tooltip
                                label="Открыть карточку"
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                    Открыть карточку
                                </chakra.a>
                            </Tooltip>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </LinkBox>
    )
};