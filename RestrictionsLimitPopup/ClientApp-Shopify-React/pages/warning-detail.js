import React from 'react';
import { Badge, Card, Layout, Page } from '@shopify/polaris';
import { SaveMinor } from '@shopify/polaris-icons';
import WarningDetailsComponent from '../components/warnings/warning-details';
import WarningConfigurationComponent from '../components/warnings/warning-configuration';
import WarningDesignComponent from '../components/warnings/design/warning-design';

export default function WarningDetail() {

    const goToWarnings = () => {
        console.log(`warning-detail.js => Go to warnings is clicked`);
    };
    const getWarningStatus = () => {
        return "success";
    };
    const showPrevWarning = () => {
        console.log(`warning-detail.js => showPrevWarning is clicked`);
    };
    const showNextWarning = () => {
        console.log(`warning-detail.js => showNextWarning is clicked`);
    };
    const duplicateWarning = () => {
        console.log(`warning-detail.js => duplicateWarning is clicked`);
    };
    const deleteWarning = () => {
        console.log(`warning-detail.js => deleteWarning is clicked`);
    };
    const toggleActiveInactiveStatus = () => {
        console.log(`warning-detail.js => toggleActiveInactiveStatus is clicked`);
    };

    const warningInfoTriggered = (values) => {
        console.log(`warning-detail.js => Warning Details are of the follow values: ${values}`);
    };

    const warningConfigurationTriggered = (values) => {
        console.log(`warning-detail.js => Warning configuration are of the follow values: ${values}`);
    };

    return (
        <Page
            fullWidth
            breadcrumbs={[{
                content: "Warnings",
                onAction: goToWarnings
            }]}
            title="Warning detail"
            titleMetadata={<Badge status="success">Active</Badge>}
            pagination={{
                hasPrevious: true,
                hasNext: true,
                onPrevious: showPrevWarning,
                onNext: showNextWarning
            }}
            primaryAction={{ content: 'Save', disabled: false, icon: SaveMinor }}
            secondaryActions={[
                {
                    content: 'Duplicate',
                    accessibilityLabel: 'Duplicate the current warning',
                    onAction: duplicateWarning,
                },
                {
                    content: 'Delete',
                    accessibilityLabel: 'Delete the current warning',
                    onAction: deleteWarning,
                }
            ]}
            separator >
            <Layout>
                <Layout.Section>
                    <Card title="Warning details" sectioned>
                        <WarningDetailsComponent
                            warningDetailsInfoTrigger={warningInfoTriggered} />
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card title="Warning configuration" sectioned>
                        <WarningConfigurationComponent
                            warningConfigurationTrigger={warningConfigurationTriggered} />
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card title="Warning design" sectioned>
                        <WarningDesignComponent />
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}