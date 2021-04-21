import React from 'react'

function Seperator(props) {

    const verticalSeperator = (
        <div style={{
            height: '100%',
            borderLeft: "1px solid #dfe3e8"
        }}></div>
    );
    const horizontalSeperator = (
        <div style={{
            width: '100%',
            borderTop: "1px solid #dfe3e8"
        }}></div>
    );

    const seperatorMarkup = () => {
        if (props === undefined)
            return horizontalSeperator;
        if (props.vertical)
            return verticalSeperator;
        return horizontalSeperator;
    }

    return (
        seperatorMarkup()
    )
}

export default Seperator;
