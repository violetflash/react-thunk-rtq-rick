import React, {useEffect, useState} from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import {IconButton, IconButtonProps} from '@chakra-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import { Portal } from '../ui';

const MotionIconButton = motion<IconButtonProps>(IconButton)

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        <Portal>
            <AnimatePresence>
                {isVisible &&
                <MotionIconButton
                    key="button"
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: "spring", ease: "easeOut"}}
                    exit={{x: 20, opacity: 0}}
                    sx={{position: "fixed", bottom: "40px", right: "40px"}}
                    aria-label="scroll to the top"
                    icon={<ArrowUpIcon/>}
                    colorScheme="blue"
                    rounded="full"
                    onClick={scrollToTop}
                />}
            </AnimatePresence>
        </Portal>
    )
};
