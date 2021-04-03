import React, { useCallback, useState } from 'react'
import { Frame } from "@shopify/polaris";
import AppNavigation from './AppNavigation';
import Routes from './Routes';
import Header from './Header';

function ApplicationLayout() {
    const [mobileNavigationActive, setMobileNavigationActive] = useState(
        false
    );
    const toggleMobileNavigationActive = useCallback(
        () =>
            setMobileNavigationActive(
                (mobileNavigationActive) => !mobileNavigationActive
            ),
        []
    );

    return (
        <Frame
            navigation={<AppNavigation />}
            topBar={<Header />}
            
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}>
            <Routes />
        </Frame>
    );
}

export default ApplicationLayout;
