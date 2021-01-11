import { ResourcePicker } from '@shopify/app-bridge-react';
import { Button, Card, Heading, Stack, Subheading, TextContainer, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import Seperator from '../../Seperator';

function BuyingLimitRestrictionComponent(props) {
    const [productName, setProductName] = useState('');
    const [buyingLimit, setBuyingLimit] = useState(1);
    const [showProductSelectionPopup, setShowProductSelectionPopup] = useState(false);
    const [selectedProductIds, setSelectedProductIds] = useState([]);

    const handleBuyingLimit = useCallback(
        (value) => {
            setBuyingLimit(value);
        },
        [],
    );

    const handleSelectProducts = useCallback(
        (value) => {
            setProductName(value);
            setShowProductSelectionPopup(true);
        },
        [],
    );

    const handleBrowseProducts = useCallback(
        () => {
            setShowProductSelectionPopup(true);
        },
        [],
    );
    const handleBrowseProductsClose = useCallback(
        () => {
            setShowProductSelectionPopup(false);
        },
        [],
    );

    const getVariantIds = (variants) => {
        var selectedVariantIds = [];
        variants.forEach(variant => {
            selectedVariantIds.push({
                id: variant.id
            });
        });
        return selectedVariantIds;
    };

    const handleProductSelection = (resources) => {
        console.log(`Select products.js => ${JSON.stringify(resources.selection)}`);

        var products = resources.selection;
        var selectedProducts = [];
        products.forEach(product => {
            selectedProducts.push({
                id: product.id,
                variants: getVariantIds(product.variants)
            })
        });

        console.log(`buying-limit.js => Selected products are: ${JSON.stringify(selectedProducts)}`);
        setSelectedProductIds(selectedProducts);
        handleBrowseProductsClose();
    };

    const selectedProductsMarkup = () => {
        if (selectedProductIds.length > 0) {
            var variantsCount = 0;
            selectedProductIds.forEach(productId => {
                variantsCount += productId.variants.length
            });
            return (
                <div>
                    <br />
                    <TextContainer>
                        <Subheading>{selectedProductIds.length} products and {variantsCount} variants selected</Subheading>
                    </TextContainer>
                </div>
            );
        }
        else
            return (
                <div style={{ display: 'none' }}></div>
            );
    };

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

                {selectedProductsMarkup()}
            </Card.Section>
            
            <ResourcePicker
                resourceType="Product"
                initialSelectionIds={selectedProductIds}
                showVariants={true}
                showDraftBadge={true}
                showArchivedBadge={true}
                open={showProductSelectionPopup}
                onSelection={(resources) => handleProductSelection(resources)}
                onCancel={handleBrowseProductsClose} />
        </Stack>
    )
}

export default BuyingLimitRestrictionComponent
