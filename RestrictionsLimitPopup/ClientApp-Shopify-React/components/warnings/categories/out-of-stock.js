import { Button, Card, Heading, Stack, TextContainer, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import Seperator from '../../Seperator'

function OutOfStockComponent(props) {
    const [productName, setProductName] = useState('');
    const [showProductSelection, setShowProductSelection] = useState(false);

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

    return (
        <Stack vertical>
            <Seperator />

            <Card.Section>
                <Heading>
                    Out of stock
                </Heading>
                <br />
                <TextField
                    label="Choose products"
                    type="text"
                    value={productName}
                    onChange={handleSelectProducts}
                    connectedRight={<Button onClick={handleBrowseProducts}>Browse products</Button>} />

            </Card.Section>
        </Stack>
    )
}

export default OutOfStockComponent
