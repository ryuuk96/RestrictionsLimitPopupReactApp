import React, { useCallback, useEffect, useState } from 'react'
import AgeRestrictionComponent from '../components/warning-categories/AgeRestriction';
import OutOfStockComponent from '../components/warning-categories/OutOfStock';
import BuyingLimitRestrictionComponent from '../components/warning-categories/BuyingLimitRestriction';
import ProductIngredientsWarningComponent from '../components/warning-categories/ProductIngredientsWarning';
import { Months, WarningCategory, WarningStatus } from '../utilities/Const';
import { ActionList, Badge, Button, Card, Checkbox, DatePicker, Heading, Layout, Page, Popover, RadioButton, Stack, TextContainer, TextField } from '@shopify/polaris';
import { CircleDisabledMajor, PauseMajor, PlayMajor, SaveMinor } from '@shopify/polaris-icons'; import Seperator from '../components/Seperator';
;

function AddWarning() {

    //#region Warning Details i.e. Title, Category, etc.
    const [warningTitle, setWarningTitle] = useState('');
    const [warningTitlePlaceholder, setWarningTitlePlaceholder] = useState('Warning title goes here...');

    const [warningCategory, setWarningCategory] = useState(WarningCategory.AgeRestriction);

    const handleWarningTitleChange = useCallback(
        (newValue) => {
            setWarningTitle(newValue);
        },
        [],
    );
    const handleWarningTitleClear = useCallback(
        () => setWarningTitle(''),
        [],
    );
    const handleWarningCategoryChange = useCallback(
        (_checked, newValue) => setWarningCategory(newValue),
        [],
    );
    const displayWarningCategoryInfo = useCallback(
        () => {
            switch (warningCategory) {
                case WarningCategory.AgeRestriction: return (<AgeRestrictionComponent />);
                case WarningCategory.OutOfStock: return (<OutOfStockComponent />);
                case WarningCategory.ProductElements: return (<ProductIngredientsWarningComponent />);
                case WarningCategory.ProductUnit: return (<BuyingLimitRestrictionComponent />);
            }
        },
        [warningCategory],
    )

    const displayWarningDetails = () => {
        return (
            <Layout.Section >
                <Card title="Warning details" sectioned>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        rowGap: '1em'
                    }}>
                        <TextField
                            label="Warning title"
                            value={warningTitle}
                            onChange={handleWarningTitleChange}
                            placeholder={warningTitlePlaceholder}
                            clearButton
                            onClearButtonClick={handleWarningTitleClear}
                            helpText="This will be meant for internal use only" />

                        <Seperator />

                        <TextContainer>
                            <Heading>
                                Select category
                </Heading>
                        </TextContainer>

                        <Stack vertical>
                            <RadioButton
                                label="Age restriction"
                                helpText="Customer will be able to proceed with checkout only if they are above a certain age"
                                checked={warningCategory === WarningCategory.AgeRestriction}
                                id={WarningCategory.AgeRestriction}
                                name={WarningCategory.AgeRestriction}
                                onChange={handleWarningCategoryChange} />
                            <RadioButton
                                label="Out of stock"
                                helpText="Products that are out of stock will trigger this. Hint: This can be used to register pre-order of the products"
                                checked={warningCategory === WarningCategory.OutOfStock}
                                id={WarningCategory.OutOfStock}
                                name={WarningCategory.OutOfStock}
                                onChange={handleWarningCategoryChange} />
                            <RadioButton
                                label="Product contents"
                                helpText="Make use of this if you want to highlight that selected products contains particular ingredients"
                                checked={warningCategory === WarningCategory.ProductElements}
                                id={WarningCategory.ProductElements}
                                name={WarningCategory.ProductElements}
                                onChange={handleWarningCategoryChange} />
                            <RadioButton
                                label="Buying limit Restriction"
                                helpText="Will be triggered when a customer is buying products over a certain quantity"
                                checked={warningCategory === WarningCategory.ProductUnit}
                                id={WarningCategory.ProductUnit}
                                name={WarningCategory.ProductUnit}
                                onChange={handleWarningCategoryChange} />
                        </Stack>

                        {displayWarningCategoryInfo()}
                    </div>
                </Card>
            </Layout.Section>
        );
    }
    //#endregion

    //#region Warning configuration
    const [warningStatus, setWarningStatus] = useState(WarningStatus.Inactive);
    const [statusPopoverActive, setStatusPopoverActive] = useState(false);

    const handleWarningStatusChange = useCallback(
        (newValue) => {
            setWarningStatus(newValue);
            setStatusPopoverActive((oldValue) => !oldValue)
        },
        [],
    );

    const [warningFrequency, setWarningFrequency] = useState('ONCE');
    const handleWarningFrequencyChange = useCallback(
        (_checked, newValue) => {
            setWarningFrequency(newValue)
        },
        [],
    );

    const [restrictCheckout, setRestrictCheckout] = useState(true);
    const handleRestrictCheckoutChange = useCallback(
        (_checked, newValue) => {
            setRestrictCheckout((oldValue) => !oldValue);
        },
        [],
    );

    //#region  Warning Scehdule
    const [scheduleWarning, setScheduleWarning] = useState(false);
    const [disableEndDate, setDisableEndDate] = useState(true);

    const todayDate = new Date();
    const dayAfterTomDate = new Date();
    const yesterdayDate = new Date();

    dayAfterTomDate.setDate(todayDate.getDate() + 2);
    yesterdayDate.setDate(todayDate.getDate() - 1);


    const [{ startMonth, startYear }, setStartMonthYear] = useState({ startMonth: (todayDate.getMonth()), startYear: (todayDate.getFullYear()) });
    const [selectedDates, setSelectedDates] = useState({
        start: todayDate,
        end: todayDate
    });

    const handleScheduleWarningChange = useCallback(
        () => setScheduleWarning((oldValue) => !oldValue),
        [],
    );
    const handleDisableEndDateChange = useCallback(
        () => {
            setDisableEndDate((oldValue) => !oldValue);
        },
        []);
    useEffect(() => {
        if (!disableEndDate) {
            const selectedStartDate = selectedDates.start;
            selectedStartDate.setDate(selectedDates.start.getDate() + 2);
            setSelectedDates({
                start: selectedDates.start,
                end: selectedStartDate
            })
        }
    }, [disableEndDate, selectedDates.start])
    const handleStartMonthChange = useCallback(
        (month, year) => {
            setStartMonthYear({ startMonth: month, startYear: year });
        }, [],
    );

    const selectedDateString = !disableEndDate ?
        `${selectedDates.start.getDate()} ${Months[selectedDates.start.getMonth()]}, ${selectedDates.start.getFullYear()} - ${selectedDates.end.getDate()} ${Months[selectedDates.end.getMonth()]}, ${selectedDates.end.getFullYear()}` :
        `Starts from: ${selectedDates.start.getDate()} ${Months[selectedDates.start.getMonth()]}, ${selectedDates.start.getFullYear()}`;

    const displayScheduleWarning = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '0.7em'
                }}>
                    <TextContainer>
                        <Heading >Selected dates: </Heading>  {selectedDateString}
                    </TextContainer>
                    <Checkbox
                        label="No end date"
                        checked={disableEndDate}
                        onChange={handleDisableEndDateChange} />
                    <div style={{ marginTop: '0.5rem' }}>
                        <DatePicker
                            month={startMonth}
                            year={startYear}
                            onChange={setSelectedDates}
                            onMonthChange={handleStartMonthChange}
                            selected={selectedDates}
                            disableDatesBefore={yesterdayDate}
                            allowRange={!disableEndDate} />
                    </div>
                </div>
            </div>
        );
    }
    const displayScheduleWarningIfNeeded = scheduleWarning ? displayScheduleWarning() : "";

    const scheduleWarningStatus = scheduleWarning ? 'Enabled' : 'Disabled';
    //#endregion

    const statusPopoverActivator = (
        <Button onClick={() => setStatusPopoverActive((oldValue) => !oldValue)} disclosure>
            Actions
        </Button>
    )
    const displayWarningConfiguration = () => {
        return (
            <Layout.Section secondary>
                <Card title="Warning configuration" sectioned>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '1em' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ fontWeight: '400', fontSize: '1.7rem', lineHeight: '2rem', marginRight: '1.5rem' }}>
                                Take actions:
                            </div>

                            <Popover active={statusPopoverActive} activator={statusPopoverActivator} onClose={() => setStatusPopoverActive((oldValue) => !oldValue)}>
                                <ActionList
                                    items={[
                                        {
                                            content: 'Active',
                                            icon: PlayMajor,
                                            active: warningStatus === WarningStatus.Active,
                                            onAction: () => handleWarningStatusChange(WarningStatus.Active)
                                        },
                                        {
                                            content: 'Scheduled',
                                            icon: PauseMajor,
                                            active: warningStatus === WarningStatus.Paused,
                                            onAction: () => { handleWarningStatusChange(WarningStatus.Paused); setScheduleWarning(true); }
                                        },
                                        {
                                            content: 'Inactive',
                                            icon: CircleDisabledMajor,
                                            active: warningStatus === WarningStatus.Inactive,
                                            onAction: () => { handleWarningStatusChange(WarningStatus.Inactive); setScheduleWarning(false); }
                                        }
                                    ]} />
                            </Popover>
                        </div>

                        <Seperator />

                        <TextContainer>
                            <Heading>
                                Frequency
                            </Heading>
                        </TextContainer>

                        <Stack vertical>
                            <RadioButton
                                label="Once"
                                helpText="Warning will be triggered only once during the user session"
                                checked={warningFrequency === "ONCE"}
                                id="ONCE"
                                name="once_trigger"
                                onChange={handleWarningFrequencyChange} />
                            <RadioButton
                                label="Always"
                                helpText="Warning will always be triggered during the user session"
                                checked={warningFrequency === "ALWAYS"}
                                id="ALWAYS"
                                name="always_trigger"
                                onChange={handleWarningFrequencyChange} />
                        </Stack>

                        <Seperator />

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextContainer>
                                    <Heading>Schedule warning</Heading>
                                </TextContainer>
                                <Button onClick={handleScheduleWarningChange} primary={scheduleWarning}>{scheduleWarningStatus}</Button>
                            </div>
                            {displayScheduleWarningIfNeeded}
                        </div>

                    </div>
                </Card>
            </Layout.Section>
        );
    };
    //#endregion

    //#region Warning Design
    const displayWarningDesign = () => {
        return (
            <Layout.Section secondary>
                <Card title="Warning design" sectioned>

                </Card>
            </Layout.Section>
        )
    };
    //#endregion

    //#region  Warning Page Actions
    const goToWarnings = () => {
        console.log(`warning-detail.js => Go to warnings is clicked`);
    };
    const getWarningStatus = useCallback(
        () => {
            switch (warningStatus) {
                case WarningStatus.Active: return (<Badge status="success">Active</Badge>);
                case WarningStatus.Inactive: return (<Badge status="critical">Inactive</Badge>);
                case WarningStatus.Paused: return (<Badge status="warning">Paused</Badge>);
            }

        },
        [warningStatus],
    )

    //#endregion

    return (
        <Page
            fullWidth
            breadcrumbs={[
                {
                    content: "Warnings",
                    onAction: goToWarnings
                }
            ]}
            title="Add Warning"
            titleMetadata={getWarningStatus()}
            primaryAction={{ content: 'Save', disabled: false, icon: SaveMinor }}
            separator>
            <Layout>
                {displayWarningDetails()}
                {displayWarningConfiguration()}
                {displayWarningDesign()}
            </Layout>
        </Page>
    );
}

export default AddWarning;
