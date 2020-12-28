import { Card, DisplayText, Heading, RadioButton, Scrollable, Stack, TextContainer, TextField } from '@shopify/polaris';
import React, { useCallback, useEffect, useState } from 'react'
import Seperator from '../../Seperator';
import WarningDesignPrototypeComponent from './design-prototype';

function getWindowDimensions() {
    if (process.browser) {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    } else {
        return {
            width: 0,
            height: 0
        };
    }
}


function WarningDesignComponent() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            console.log(getWindowDimensions());
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const firstButtonClick = useCallback(
        () => {
            console.log(`First button clicked`);
        },
        [],
    );

    const secondButtonClick = useCallback(
        () => {
            console.log(`second button clicked`);
        },
        [],
    );

    return (
        <Stack spacing={'tight'} distribution={'fillEvenly'}>
            <WarningDesignPrototypeComponent
                style={{
                    backgroundColor: 'white',
                    width: '85%',
                    height: '80%',
                    borderRadius: '0px',
                    borderColor: 'black',
                    boxShadow: '4px 6px 4px #0000002b',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
                    gridTemplateAreas: `
                                        'leftHalf leftHalf rightHalf rightHalf' 
                                        'leftHalf leftHalf rightHalf rightHalf'
                                        'leftHalf leftHalf rightHalf rightHalf'
                                        'leftHalf leftHalf rightHalf rightHalf'
                                        'leftHalf leftHalf rightHalf rightHalf'
                                        'firstButton firstButton secondButton secondButton'
                    `

                }}

                header={{
                    display: 'none'
                }}

                leftHalf={{
                    gridArea: 'leftHalf',
                    borderRight: '1px solid #000',
                }}

                rightHalf={{
                    gridArea: 'rightHalf'
                }}

                firstButtonContainer={{
                    gridArea: 'firstButton'
                }}

                secondButtonContainer={{
                    gridArea: 'secondButton',
                }}

                firstButtonClick={firstButtonClick}
                firstButtonText={'First Button'}
                firstButtonStyle={{
                    width: '100%',
                    height: '100%',
                    border: '0px',
                    borderColor: 'transparent',
                    backgroundColor: 'blue',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff'
                }}

                secondButtonClick={secondButtonClick}
                secondButtonText={'Second Button'}
                secondButtonStyle={{
                    width: '100%',
                    height: '100%',
                    border: '0px',
                    borderColor: 'transparent',
                    backgroundColor: 'green',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff'
                }}

            />
            <div style={{
                width: '100%',
                height: '364px'
            }}>
                <Scrollable shadow height={'364px'}>
                    <Card.Section>
                        <Stack vertical>
                            <Stack>
                                <Stack.Item fill>
                                    <label style={{ fontSize: '1.6rem', fontWeight: '400' }}>
                                        Layout:
                                </label>
                                </Stack.Item>
                                <Stack.Item>

                                </Stack.Item>
                            </Stack>
                        </Stack>
                    </Card.Section>
                </Scrollable>
            </div>
        </Stack >
    )
}

export default WarningDesignComponent
