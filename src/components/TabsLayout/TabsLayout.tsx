import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";


interface TabsLayoutProps {
    titles: string[];
    components: React.ReactComponentElement<any>[]
}

export const TabsLayout = ({titles, components}: TabsLayoutProps) => {


    const handleTabChange = (index: number) => {

    };

    return (
        <Tabs
            onChange={(index) => handleTabChange(index)}
            p="0 0 20px"
        >
            <TabList>
                {titles.map(title => <Tab key={title}>{title}</Tab>)}
            </TabList>

            <TabPanels>
                {components.map((comp, idx) => (
                    <TabPanel key={idx}>
                        {comp}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
};
