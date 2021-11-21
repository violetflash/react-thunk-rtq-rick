import React from 'react';
import {motion} from 'framer-motion';
import {
    Flex, FlexProps,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Text,
    LinkBox,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {ICharacter} from "../../models";


const MotionFlex = motion<FlexProps>(Flex);
export const responsiveWidth = ['calc(100%)', 'calc(100% / 2 - 20px)', 'calc(100% / 3 - 20px)', 'calc(100% / 4 - 20px)'];

export const CharacterCard = (props: ICharacter) => {
    return (
        <MotionFlex
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            alignItems="center"
            justifyContent="center"
            position={"relative"}
            width={responsiveWidth}
            m="0 0 20px 20px"
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
                <LinkBox
                    as={Link}
                    to={`/character/${props.id}`}
                >
                    <Image
                        src={props.image}
                        alt={`Picture of ${props.name}`}
                        roundedTop="lg"
                        height="300px"
                        w="full"
                        objectFit="cover"
                        // fallbackSrc="https://via.placeholder.com/300"
                    />
                </LinkBox>
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
        </MotionFlex>
    )
};
