import React, {FC} from 'react';
import {HStack, Link} from '@chakra-ui/react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {routes} from "../AppRouter/routes";

export const Nav:FC = props => {
    const {pathname} = useLocation();
    const links = routes.map(route => {

        if (route.title === '') {
            return undefined;
        }

        return (
            <Link
                key={route.id}
                as={RouterLink}
                to={route.path}
                color={pathname === route.path ? "black" : 'inherit'}
                p="2px 10px"
                borderRadius="4px"
                bg={pathname === route.path ? "orange.200" : 'inherit'}
            >
                {route.title}
            </Link>
        );
    })

    return (
        <HStack as="nav" spacing="40px">
            {links}
        </HStack>
    )
};
