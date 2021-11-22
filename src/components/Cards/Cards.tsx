import React from 'react';
import {CharacterCard} from "../CharacterCard/CharacterCard";
import {CardSkeleton} from "../skeletons";
import {motion} from 'framer-motion';
import {Flex, FlexProps} from "@chakra-ui/react";
import { ICharacter } from '../../models';

const MotionFlex = motion<FlexProps>(Flex);

const container = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

interface ICards {
    isLoading: boolean;
    items: ICharacter[];
}

export const Cards = ({isLoading, items}: ICards) => {
    return (
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
    )
};