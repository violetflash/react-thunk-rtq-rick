import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {CharacterFull, PageContainer} from "../components";
import {Box, Button, Center, Flex, Heading, VStack} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons';
import {fetchCharacterById} from "../redux";
import {useAppDispatch, useTypedSelector} from "../utils/hooks/redux-hooks";



export const CharactersPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useAppDispatch();
    const {char, isLoading} = useTypedSelector(state => state.asyncThunk);

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const id = params.id ? +params.id : 1;
        dispatch(fetchCharacterById(id))
    }, [dispatch, params.id]);

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
                    {!isLoading &&
                        <Flex direction="column">
                          <Heading
                            m="20px 0 30px"
                            textAlign="center"
                            color="inherit"
                          >
                            Страница персонажа {char.name}
                          </Heading>
                          <Center>
                            <CharacterFull {...char}/>
                          </Center>
                        </Flex>
                    }
                </Box>
            </PageContainer>
        </Box>
    )
};
