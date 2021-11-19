import React, {useEffect, useState} from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { Portal } from '../ui';

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

    if (isVisible) {
        return (
            <Portal>
                <IconButton
                    sx={{position: "fixed", bottom: "40px", right: "40px"}}
                    aria-label="scroll to the top"
                    icon={<ArrowUpIcon/>}
                    colorScheme="blue"
                    rounded="full"
                    onClick={scrollToTop}
                />
            </Portal>
        )
    }

    return null;
};
