import { Button, Card, Heading, Stack, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import Seperator from '../../Seperator';

function BuyingLimitRestrictionComponent(props) {
    const [productName, setProductName] = useState('');
    const [showProductSelection, setShowProductSelection] = useState(false);
    const [buyingLimit, setBuyingLimit] = useState(1);

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

    const handleBuyingLimit = useCallback(
        (value) => {
            setBuyingLimit(value);
        },
        [],
    )

    return (
        <Stack vertical>
            <Seperator />

            <Card.Section>
                <Heading>
                    Buying limit restriction
                </Heading>
                <br />

                <Stack vertical={false} distribution='fill'>
                    <TextField
                        label="Allowable quantity"
                        type="number"
                        value={buyingLimit}
                        onChange={handleBuyingLimit} />
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

export default BuyingLimitRestrictionComponent
