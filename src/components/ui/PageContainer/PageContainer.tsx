import React, {FC} from 'react';
import {Container} from "@chakra-ui/react";

export const PageContainer: FC = ({children}) => {
    return (
        <Container maxW="container.xl">
            {children}
        </Container>
    );

};