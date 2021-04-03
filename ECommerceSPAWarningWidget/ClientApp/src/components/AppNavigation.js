import { Navigation } from '@shopify/polaris'
import {
    RiskMajor,
    PaintBrushMajor,
    QuestionMarkMajor,
    CircleInformationMajor,
    ToolsMajor
} from "@shopify/polaris-icons";
import React from 'react'
import { useLocation } from 'react-router';

function AppNavigation() {
    const location = useLocation();

    const navigateToWarnings = () => {
        console.log(`Called ===> navigateToWarnings`);
    };
    const navigateToTemplates = () => {
        console.log(`Called ===> navigateToTemplates`);
    };
    const navigateToSettings = () => {
        console.log(`Called ===> navigateToSettings`);
    };
    const navigateToHelp = () => {
        console.log(`Called ===> navigateToHelp`);
    };
    const navigateToAboutUs = () => {
        console.log(`Called ===> navigateToAboutUs`);
    };

    return (
        <Navigation location={location.pathname}>
            <Navigation.Section
                items={[
                    {
                        url: "/",
                        label: "Warnings",
                        icon: RiskMajor
                    },
                    {
                        label: "Templates",
                        icon: PaintBrushMajor,
                        url: "/warning-templates"
                    }
                ]} />
            <Navigation.Section
                separator
                items={[
                    {
                        label: "Settings",
                        icon: ToolsMajor,
                        url: "/settings"
                    },
                    {
                        label: 'Help',
                        icon: QuestionMarkMajor,
                        url: "/help"
                    },
                    {
                        label: 'About us',
                        icon: CircleInformationMajor,
                        url: "/about-us"
                    }
                ]} />
        </Navigation>
    );
}

export default AppNavigation;