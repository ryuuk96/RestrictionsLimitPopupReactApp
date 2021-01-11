import {
    ActionList,
    Button,
    Checkbox,
    DatePicker,
    Heading,
    Popover,
    RadioButton,
    Stack,
    TextContainer,
    TextField
} from '@shopify/polaris';
import {
    PlayMajor,
    PauseMajor,
    DeleteMajor,
    CircleDisabledMajor,
    CalendarMajor
} from '@shopify/polaris-icons';
import React,
{
    useState,
    useCallback
} from 'react'
import {
    Months,
    WarningStatus
} from '../../models/ConstUtility';
import Seperator from '../Seperator';

function WarningConfigurationComponent(props) {

    const [status, setStatus] = useState('INACTIVE');

    const [isPopoverActive, setIsPopoverActive] = useState(false);

    const toggleStatus = useCallback(
        (values) => {
            console.log(`warning-config.js => Status for warning is toggled to: ${values}`);
            setStatus(values);
        },
        [],
    );
    const toggleActive = useCallback(
        () => {
            setIsPopoverActive((isPopoverActive) => !isPopoverActive)
        },
        [],
    );
    const activator = (
        <Button onClick={toggleActive} disclosure>
            Actions
        </Button>
    );


    //#region Warning Frequency
    const [frequency, setFrequency] = useState('ONCE');
    const handleFrequency = useCallback(
        (_checked, newValue) => setFrequency(newValue),
        [],
    )
    //#endregion

    //#region Warning Restriction
    const [restrictionAllowCheckout, setRestrictionAllowCheckout] = useState(true);
    const handleAllowCheckout = useCallback(
        (_checked, newValue) => setRestrictionAllowCheckout((prevValue) => !prevValue),
        [],
    )
    //#endregion

    //#region Start and End Date Picker
    const today = new Date();
    const previousDate = new Date(today);
    const tomorrow = new Date(today);
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    previousDate.setDate(previousDate.getDate() - 1);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [{ month, year }, setDate] = useState({ month: currentMonth, year: currentYear });
    const [selectedDates, setSelectedDates] = useState({
        start: today,
        end: tomorrow,
    });

    const [scheduleWarning, setScheduleWarning] = useState(false);
    const [disableEndDate, setDisableEndDate] = useState(false);
    const toggleScheduleWarningActive = useCallback(
        () => {
            setScheduleWarning((scheduleWarning) => !scheduleWarning);
        },
        [],
    )
    const scheduleWarningStatus = scheduleWarning ? 'Enabled' : 'Disabled';
    const handleMonthChange = useCallback(
        (month, year) => setDate({ month, year }),
        [],
    );
    const toggleDisableEndDate = useCallback(
        () => {
            setDisableEndDate((disableEndDate) => !disableEndDate);
        },
        []
    );
    const selectedDateString = !disableEndDate ?
        `${selectedDates.start.getDate()} ${Months[selectedDates.start.getMonth()]}, ${selectedDates.start.getFullYear()} - ${selectedDates.end.getDate()} ${Months[selectedDates.end.getMonth()]}, ${selectedDates.end.getFullYear()}` :
        `Starts from: ${selectedDates.start.getDate()} ${Months[selectedDates.start.getMonth()]}, ${selectedDates.start.getFullYear()}`;

    const scheduleWarningMarkup = (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '0.7em'
            }}>
                <TextContainer>
                    <Heading >Selected dates: </Heading>  {selectedDateString}
                </TextContainer>
                {/* <br /> */}
                <Checkbox
                    label="No end date"
                    checked={disableEndDate}
                    onChange={toggleDisableEndDate} />
                <div style={{ marginTop: '0.5rem' }}>
                    <DatePicker
                        month={month}
                        year={year}
                        onChange={setSelectedDates}
                        onMonthChange={handleMonthChange}
                        selected={selectedDates}
                        disableDatesBefore={previousDate}
                        allowRange={!disableEndDate} />
                </div>
            </div>
        </div>
    );
    const showScheduleWarning = scheduleWarning ? scheduleWarningMarkup : "";
    //#endregion
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            rowGap: '1em'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    fontWeight: '400',
                    fontSize: '1.7rem',
                    lineHeight: '2rem',
                    marginRight: '1.5rem'
                }}>
                    Take actions:
                </div>
                <Popover active={isPopoverActive} activator={activator} onClose={toggleActive}>
                    <ActionList
                        sections={[
                            {
                                items: [
                                    {
                                        content: 'Set to active',
                                        icon: PlayMajor,
                                        active: status === WarningStatus.Active,
                                        onAction: () => toggleStatus(WarningStatus.Active)
                                    },
                                    {
                                        content: 'Set to scheduled',
                                        icon: PauseMajor,
                                        active: status === WarningStatus.Paused,
                                        onAction: () => toggleStatus(WarningStatus.Paused)
                                    },
                                    {
                                        content: 'Set to inactive',
                                        icon: CircleDisabledMajor,
                                        active: status === WarningStatus.Inactive,
                                        onAction: () => toggleStatus(WarningStatus.Inactive)
                                    }
                                ]
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
                    checked={frequency === "ONCE"}
                    id="ONCE"
                    name="once_trigger"
                    onChange={handleFrequency} />
                <RadioButton
                    label="Always"
                    helpText="Warning will always be triggered during the user session"
                    checked={frequency === "ALWAYS"}
                    id="ALWAYS"
                    name="always_trigger"
                    onChange={handleFrequency} />
            </Stack>

            {/* <Seperator /> */}

            {/* <TextContainer>
                <Heading>
                    Restriction condition
                </Heading>
            </TextContainer>

            <Stack vertical>
                <RadioButton
                    label="Allow checkout"
                    helpText="App will show a popup before the checkout and will let the customer continue with the checkout as normal"
                    checked={restrictionAllowCheckout}
                    id="allowCheckout"
                    name="allowCheckout_trigger"
                    onChange={handleAllowCheckout} />
                <RadioButton
                    label="Confirm checkout"
                    helpText="App will show a confirmation popup and will only proceed with checkout if the customer agrees to the condition"
                    checked={!restrictionAllowCheckout}
                    id="confirmCheckout"
                    name="confirmCheckout_trigger"
                    onChange={handleAllowCheckout} />
            </Stack> */}

            <Seperator />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TextContainer>
                        <Heading>Schedule warning</Heading>
                    </TextContainer>
                    <Button onClick={toggleScheduleWarningActive} primary={scheduleWarning}>{scheduleWarningStatus}</Button>
                </div>
                {showScheduleWarning}
            </div>
        </div>
    )
}

export default WarningConfigurationComponent
