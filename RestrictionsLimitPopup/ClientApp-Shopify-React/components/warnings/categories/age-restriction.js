import { Button, Card, Heading, Stack, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import Seperator from '../../Seperator';

function AgeRestrictionComponent(props) {
    const [productName, setProductName] = useState('');
    const [showProductSelection, setShowProductSelection] = useState(false);

    const [ageLimit, setAgeLimit] = useState(18);

    const handleSelectProducts = useCallback(
        (value) => {
            setProductName(value);
            showSelectProductsPopup();
        },
        [],
    );

    const handleBrowseProducts = useCallback(
        () => {
            showSelectProductsPopup();
        },
        [],
    );

    const showSelectProductsPopup = useCallback(
        () => {
            setShowProductSelection(true);
        },
        [],
    );

    const handleAgeLimit = useCallback(
        (value) => {
            setAgeLimit(value);
        },
        [],
    )
    return (
        <Stack vertical>
            <Seperator />

            <Card.Section>
                <Heading>
                    Age restriction
                </Heading>
                <br />

                <Stack vertical={false} distribution='fill' wrap={true}>
                    <TextField
                        label="Age Limit"
                        type="number"
                        value={ageLimit}
                        onChange={handleAgeLimit} />

                    <TextField
                        label="Choose products"
                        type="text"
                        value={productName}
                        onChange={handleSelectProducts}
                        connectedRight={<Button onClick={handleBrowseProducts}>Browse products</Button>} />
                </Stack>

            </Card.Section>
        </Stack>
    )
}

export default AgeRestrictionComponent
