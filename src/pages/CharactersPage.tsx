import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {CharacterDescrSkeleton, CharacterFull} from "../components";
import {Box, Button, Center, Flex, Heading} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons';

import { PageContainer } from '../components/ui';
import {useFetchCharacterByIdQuery} from "../redux/services";


export const CharactersPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id ? +params.id : 1;
    const {data, isLoading} = useFetchCharacterByIdQuery(id);

    if (!data) return null;


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
                        colorScheme="orange"
                    >
                        Назад
                    </Button>
                    <Flex direction="column">
                      <Heading
                        m="20px 0 30px"
                        textAlign="center"
                        color="inherit"
                      >
                          {data.name}
                      </Heading>
                      <Center>
                          {isLoading && <CharacterDescrSkeleton/>}
                          {!isLoading && Object.keys(data).length > 0 && <CharacterFull {...data}/>}
                      </Center>
                    </Flex>
                </Box>
            </PageContainer>
        </Box>
    )
};
