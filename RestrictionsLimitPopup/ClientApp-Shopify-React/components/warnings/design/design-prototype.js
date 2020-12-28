import { Button, Card } from '@shopify/polaris'
import React from 'react'

function WarningDesignPrototypeComponent(props) {

    const {
        style,
        header,
        leftHalf,
        rightHalf,
        firstButtonContainer,
        secondButtonContainer,
        firstButtonClick,
        secondButtonClick,
        firstButtonText,
        secondButtonText,
        firstButtonStyle,
        secondButtonStyle
    } = props;

    return (
        <div style={{
            width: '100%',
            height: '364px',
            backgroundImage: 'linear-gradient(45deg, lightgrey 25%, transparent 25%),linear-gradient(135deg, lightgrey 25%, transparent 25%),linear-gradient(45deg, transparent 75%, lightgrey 75%),linear-gradient(135deg, transparent 75%, lightgrey 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={style}>
                <div className='header' style={header}></div>
                <div className='leftHalf' style={leftHalf}></div>
                <div className='rightHalf' style={rightHalf}></div>
                <div className='firstButtonContainer' style={firstButtonContainer}>
                    <button onClick={firstButtonClick} style={firstButtonStyle}>
                        {firstButtonText}
                    </button>
                </div>
                <div className='secondButtonContainer' style={secondButtonContainer}>
                    <button onClick={secondButtonClick} style={secondButtonStyle}>
                        {secondButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WarningDesignPrototypeComponent
