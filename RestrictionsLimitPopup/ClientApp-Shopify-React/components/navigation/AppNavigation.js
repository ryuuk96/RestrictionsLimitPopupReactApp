import { Navigation } from '@shopify/polaris'
import { RiskMajor,
    PaintBrushMajor,
    QuestionMarkMajor,
    CircleInformationMajor,
    ToolsMajor } from "@shopify/polaris-icons";
import React from 'react'

export default function AppNavigation() {

const navigateToWarnings = () => ({});
const navigateToTemplates = () => ({});
const navigateToSettings = () => ({});
const navigateToHelp = () => ({});
const navigateToAboutUs = () => ({});

    return (
       <Navigation location="/">
           <Navigation.Section
           items={[
               {
                   label: "Warnings",
                   icon: RiskMajor,
                   onClick: {navigateToWarnings}
               },
               {
                   label: "Templates",
                   icon: PaintBrushMajor,
                   onClick: {navigateToTemplates}
               }
           ]} />
           <Navigation.Section 
           separator
           items={[
            {
                label: "Settings",
                onClick:{navigateToSettings},
                icon: ToolsMajor,
            },
            {
                label: 'Help',
                icon: QuestionMarkMajor,
                onClick: {navigateToHelp}
            },
            {
                label: 'About us',
                icon: CircleInformationMajor,
                onClick: {navigateToAboutUs}
            }
           ]}/>
       </Navigation>
    );
}

