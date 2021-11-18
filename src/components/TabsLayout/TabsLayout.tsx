import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";


interface TabsLayoutProps {
    titles: string[];
    components: React.ReactComponentElement<any>[]
}

export const TabsLayout = ({titles, components}: TabsLayoutProps) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleTabChange = (index: number) => {
        navigate(pathname, {replace: true});
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
