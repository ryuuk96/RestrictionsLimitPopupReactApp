import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useCallback, useState } from 'react'

function SelectProductsComponent(props) {
    const [openResourcePicker, setOpenResourcePicker] = useState(true);

    const handleProductSelection = (resources) => {
        console.log(`Select products.js => ${resources}`);
        
        const resourcesIds = resources.selection.map((product) => product.id);
        props.setSelectedProducts(resourcesIds);
    };

    const handleResourcePickerCancel = useCallback(
        () => {
            setOpenResourcePicker(false);
            props.closeModal();
        },
        [],
    )


    return (
        <ResourcePicker
            resourceType="Product"
            showVariants={true}
            open={openResourcePicker}
            onSelection={(resources) => handleProductSelection(resources)}
            onCancel={handleResourcePickerCancel} />
    )
}

export default SelectProductsComponent
