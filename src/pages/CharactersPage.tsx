import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {CharacterDescrSkeleton, CharacterFull, PageContainer} from "../components";
import {Box, Button, Center, Flex, Heading} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons';
import {fetchCharacterById} from "../redux";
import {useAppDispatch, useTypedSelector} from "../utils/hooks/redux-hooks";


export const CharactersPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useAppDispatch();
    const {item, isLoading, error} = useTypedSelector(state => state.asyncThunk.chosenChar);

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
                    <Flex direction="column">
                      <Heading
                        m="20px 0 30px"
                        textAlign="center"
                        color="inherit"
                      >
                          {item.name}
                      </Heading>
                      <Center>
                          {isLoading && <CharacterDescrSkeleton/>}
                          {!isLoading && Object.keys(item).length > 0 && <CharacterFull {...item}/>}
                      </Center>
                    </Flex>
                </Box>
            </PageContainer>
        </Box>
    )
};
