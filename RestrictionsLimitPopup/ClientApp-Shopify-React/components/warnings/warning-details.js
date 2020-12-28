import { Card, Heading, RadioButton, Stack, TextContainer, TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'
import { WarningCategory } from '../../models/ConstUtility';
import Seperator from '../Seperator';
import AgeRestrictionComponent from './categories/age-restriction';
import BuyingLimitRestrictionComponent from './categories/buying-limit';
import OutOfStockComponent from './categories/out-of-stock';
import ProductIngredientsWarningComponent from './categories/prod-elements';

function WarningDetailsComponent(props) {
    const [warningTitle, setWarningTitle] = useState('First warning')
    const [warningCategory, setWarningCategory] = useState(WarningCategory.AgeRestriction);

    const handleTitleTextChange = useCallback(
        (value) => {
            setWarningTitle(value);
            props.warningDetailsInfoTrigger(value);
        },
        [],
    );
    const handleTitleTextClearClicked = useCallback(
        () => {
            setWarningTitle('');
            props.warningDetailsInfoTrigger('');
        },
        [],
    );

    const handleCategory = useCallback(
        (_checked, newValue) => setWarningCategory(newValue),
        [],
    );

    const categoryComponent = () => {
        switch (warningCategory) {
            case WarningCategory.AgeRestriction:
                return (
                    <AgeRestrictionComponent />
                );
            case WarningCategory.OutOfStock:
                return (
                    <OutOfStockComponent />
                );
            case WarningCategory.ProductElements:
                return (
                    <ProductIngredientsWarningComponent />
                );
            case WarningCategory.ProductUnit:
                return (
                    <BuyingLimitRestrictionComponent />
                );
        }
    };

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            rowGap: '1.3em'
        }}>
            <TextField
                label="Warning title"
                value={warningTitle}
                onChange={handleTitleTextChange}
                clearButton
                onClearButtonClick={handleTitleTextClearClicked}
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
                    onChange={handleCategory} />
                <RadioButton
                    label="Out of stock"
                    helpText="Products that are out of stock will trigger this. Hint: This can be used to register pre-order of the products"
                    checked={warningCategory === WarningCategory.OutOfStock}
                    id={WarningCategory.OutOfStock}
                    name={WarningCategory.OutOfStock}
                    onChange={handleCategory} />
                <RadioButton
                    label="Product contents"
                    helpText="Make use of this if you want to highlight that selected products contains particular ingredients"
                    checked={warningCategory === WarningCategory.ProductElements}
                    id={WarningCategory.ProductElements}
                    name={WarningCategory.ProductElements}
                    onChange={handleCategory} />
                <RadioButton
                    label="Buying limit Restriction"
                    helpText="Will be triggered when a customer is buying products over a certain quantity"
                    checked={warningCategory === WarningCategory.ProductUnit}
                    id={WarningCategory.ProductUnit}
                    name={WarningCategory.ProductUnit}
                    onChange={handleCategory} />
            </Stack>

            {categoryComponent()}
        </div>

    )
}

export default WarningDetailsComponent
