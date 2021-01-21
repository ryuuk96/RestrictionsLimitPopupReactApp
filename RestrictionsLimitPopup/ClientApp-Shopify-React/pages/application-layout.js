import React, { useCallback, useRef, useState } from 'react';
import { ActionList, Card, TextField, TextContainer, ContextualSaveBar, FormLayout, Modal, Frame, Layout, Loading, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, Toast, TopBar } from '@shopify/polaris';
import AppNavigation from '../components/navigation/AppNavigation';
import WarningDetail from '../pages/warning-detail';
import AppHeader from '../components/header/AppHeader';

export default function ApplicationLayout() {
    const defaultState = useRef({
        emailFieldValue: 'dharma@jadedpixel.com',
        nameFieldValue: 'Jaded Pixel',
    });
    const skipToContentRef = useRef(null);

    const [toastActive, setToastActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [userMenuActive, setUserMenuActive] = useState(false);
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [nameFieldValue, setNameFieldValue] = useState(
        defaultState.current.nameFieldValue,
    );
    const [emailFieldValue, setEmailFieldValue] = useState(
        defaultState.current.emailFieldValue,
    );
    const [storeName, setStoreName] = useState(
        defaultState.current.nameFieldValue,
    );
    const [supportSubject, setSupportSubject] = useState('');
    const [supportMessage, setSupportMessage] = useState('');

    const handleSubjectChange = useCallback(
        (value) => setSupportSubject(value),
        [],
    );
    const handleMessageChange = useCallback(
        (value) => setSupportMessage(value),
        [],
    );
    const handleDiscard = useCallback(() => {
        setEmailFieldValue(defaultState.current.emailFieldValue);
        setNameFieldValue(defaultState.current.nameFieldValue);
        setIsDirty(false);
    }, []);
    const handleSave = useCallback(() => {
        defaultState.current.nameFieldValue = nameFieldValue;
        defaultState.current.emailFieldValue = emailFieldValue;

        setIsDirty(false);
        setToastActive(true);
        setStoreName(defaultState.current.nameFieldValue);
    }, [emailFieldValue, nameFieldValue]);
    const handleSearchFieldChange = useCallback((value) => {
        setSearchValue(value);
        setSearchActive(value.length > 0);
    }, []);
    const toggleToastActive = useCallback(
        () => setToastActive((toastActive) => !toastActive),
        [],
    );
    const toggleUserMenuActive = useCallback(
        () => setUserMenuActive((userMenuActive) => !userMenuActive),
        [],
    );
    const toggleMobileNavigationActive = useCallback(
        () =>
            setMobileNavigationActive(
                (mobileNavigationActive) => !mobileNavigationActive,
            ),
        [],
    );
    const toggleModalActive = useCallback(
        () => setModalActive((modalActive) => !modalActive),
        [],
    );

    const toastMarkup = toastActive ? (
        <Toast onDismiss={toggleToastActive} content="Changes saved" />
    ) : null;

    const userMenuActions = [
        {
            items: [{ content: 'Community forums' }],
        },
    ];

    const contextualSaveBarMarkup = isDirty ? (
        <ContextualSaveBar
            message="Unsaved changes"
            saveAction={{
                onAction: handleSave,
            }}
            discardAction={{
                onAction: handleDiscard,
            }}
        />
    ) : null;




    const topBarMarkup = (
        <AppHeader />
    );

    const navigationMarkup = (
        <AppNavigation />
    );

    const loadingMarkup = isLoading ? <Loading /> : null;


    const actualPageMarkup = (
        // <WarningList />
        <WarningDetail />
    );

    const loadingPageMarkup = (
        <SkeletonPage>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <TextContainer>
                            <SkeletonDisplayText size="small" />
                            <SkeletonBodyText lines={9} />
                        </TextContainer>
                    </Card>
                </Layout.Section>
            </Layout>
        </SkeletonPage>
    );

    const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

    const modalMarkup = (
        <Modal
            open={modalActive}
            onClose={toggleModalActive}
            title="Contact support"
            primaryAction={{
                content: 'Send',
                onAction: toggleModalActive,
            }}
        >
            <Modal.Section>
                <FormLayout>
                    <TextField
                        label="Subject"
                        value={supportSubject}
                        onChange={handleSubjectChange}
                    />
                    <TextField
                        label="Message"
                        value={supportMessage}
                        onChange={handleMessageChange}
                        multiline
                    />
                </FormLayout>
            </Modal.Section>
        </Modal>
    );


    return (
        <div style={{ height: '500px' }}>
            <Frame
                topBar={topBarMarkup}
                navigation={navigationMarkup}
                showMobileNavigation={mobileNavigationActive}
                onNavigationDismiss={toggleMobileNavigationActive}
                skipToContentTarget={skipToContentRef.current} >
                {contextualSaveBarMarkup}
                {loadingMarkup}
                {pageMarkup}
                {toastMarkup}
                {modalMarkup}
            </Frame>
        </div>
    );
}