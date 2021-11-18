import React from 'react';
import {useNavigate} from 'react-router-dom';
import {PageContainer} from "../components";
import {Box, Button} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons';

export const CharactersPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Box className="info-page">
            <PageContainer>
                <Box className="info-content" py="20px">
                    <Button
                        onClick={handleGoBack}
                        leftIcon={<ArrowBackIcon/>}
                        variant="outline"
                        colorScheme="teal"
                    >
                        Назад
                    </Button>
                    Страница персонажа
                </Box>
            </PageContainer>
        </Box>
    )
};
