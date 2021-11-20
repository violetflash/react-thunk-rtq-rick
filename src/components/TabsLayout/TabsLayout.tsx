import React from 'react';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {useAppDispatch} from "../../utils/hooks/redux-hooks";


interface TabsLayoutProps {
    titles: string[];
    components: React.ReactComponentElement<any>[]
}

export const TabsLayout = ({titles, components}: TabsLayoutProps) => {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const tab = searchParams.get('tab');
    const activeTab = tab ? +tab : 0;

    const handleTabChange = (index: number) => {
        navigate(`${pathname}?tab=${index}`, {replace: true});
    };

    // useEffect(() => {
    //     navigate(`${pathname}?tab=0`, {replace: true});
    // }, [pathname, navigate]);

    return (
        <Tabs
            index={activeTab}
            // isLazy
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
