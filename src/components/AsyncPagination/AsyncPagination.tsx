import React, {FC} from 'react';
import {Box, Center, Flex, HStack, SimpleGrid, Stack} from "@chakra-ui/react";
import {Pagination} from "antd";
import {CharacterCard} from "../CharacterCard/CharacterCard";

const charData = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    },
    {
        "id": 183,
        "name": "Johnny Depp",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "url": "https://rickandmortyapi.com/api/character/183",
        "created": "2017-12-29T18:51:29.693Z"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
        ],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
        ],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
    }
]

export const AsyncPagination: FC = props => {

    function onChange(pageNumber: number) {
        console.log('Page: ', pageNumber);
    }

    return (
        <Box>
            <Center mb="15px">Карточки, подгружаемые с пагинацией</Center>
            <Center>
                <Pagination
                    style={{color: 'inherit', margin: "30px 0 20px 0"}}
                    showQuickJumper
                    showSizeChanger={false}
                    defaultCurrent={2}
                    total={250}
                    onChange={onChange}
                />
            </Center>
            <Flex flexWrap="wrap" ml="-20px">
                {charData.map(char => (
                    <CharacterCard key={char.id} {...char} />
                ))}

            </Flex>
        </Box>
    )
};