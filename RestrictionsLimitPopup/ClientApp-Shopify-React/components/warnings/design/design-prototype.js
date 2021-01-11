import { Button, Card } from '@shopify/polaris'
import React, { useCallback, useEffect, useState } from 'react'
import '../../../assets/styles/popup-prototype.css';
// import PlaceHolder from "../../../assets/images/graphic_uploader_placeholder.png";

function WarningDesignPrototypeComponent(props) {

    const {
        style,

        headerStyle,
        headerImgSrc,
        headerImgStyle,
        headerText,
        headerTextContainerStyle,

        buttonContainerStyle,
        firstButtonClick,
        secondButtonClick,
        firstButtonText,
        secondButtonText,
        firstButtonStyle,
        secondButtonStyle,

        warningMessage,
        warningMessageStyle,

        activeContainerStyle,

        imageContainerStyle,
        imageLayoutMsgButtonsContainerStyle,
        imageContainerWarningMessageStyle,
        imageButtonContainerStyle,
        imageFirstButtonStyle,
        imageSecondButtonStyle,
        image_style,
        image_src
    } = props;

    const [activeContainer, setActiveContainer] = useState('MAIN');

    const handleContainerClick = useCallback(
        (e) => {
            if (e !== undefined && e !== null) {
                var classList = e.target.classList;
                if (classList[0] === 'header') {
                    setActiveContainer('HEADER');
                    activeContainerStyle('HEADER');
                }
                else if (classList[0] === 'mainBody') {
                    setActiveContainer('MAIN');
                    activeContainerStyle('MAIN');
                }
                else if (classList[0] === 'warningMessageContainer') {
                    setActiveContainer('MESSAGE');
                    activeContainerStyle('MESSAGE');
                }
                else if (classList[0] === 'buttonContainer') {
                    setActiveContainer('BUTTON_CONTAINER');
                    activeContainerStyle('BUTTON_CONTAINER');
                }
                else if (classList[0] === 'firstBtn') {
                    setActiveContainer('FIRST_BTN');
                    activeContainerStyle('FIRST_BTN');
                    firstButtonClick();
                }
                else if (classList[0] === 'secondBtn') {
                    setActiveContainer('SECOND_BTN');
                    activeContainerStyle('SECOND_BTN');
                    secondButtonClick();
                }
                else if (classList[0] === 'imageContainer-image') {
                    setActiveContainer('IMAGE');
                    activeContainerStyle('IMAGE');
                }
                else if (classList[0] === 'imageContainer-mainContainer') {
                    setActiveContainer('IMAGE_MAIN');
                    activeContainerStyle('IMAGE_MAIN');
                }
                else if (classList[0] === 'imageContainer-warningMessageContainer') {
                    setActiveContainer('IMAGE_MSG');
                    activeContainerStyle('IMAGE_MSG');
                }
                else if (classList[0] === 'imageContainer-buttonContainer') {
                    setActiveContainer('IMAGE_BUTTON_CONTAINER');
                    activeContainerStyle('IMAGE_BUTTON_CONTAINER');
                }
                else if (classList[0] === 'imageContainer-firstBtn') {
                    setActiveContainer('IMAGE_FIRST_BTN');
                    activeContainerStyle('IMAGE_FIRST_BTN');
                }
                else if (classList[0] === 'imageContainer-secondBtn') {
                    setActiveContainer('IMAGE_SECOND_BTN');
                    activeContainerStyle('IMAGE_SECOND_BTN');
                }
                else {
                    setActiveContainer('MAIN');
                }
            }
        },
        [],
    );

    return (
        <div style={{
            width: 'inherit',
            height: '364px',
            backgroundImage: 'linear-gradient(45deg, lightgrey 25%, transparent 25%),linear-gradient(135deg, lightgrey 25%, transparent 25%),linear-gradient(45deg, transparent 75%, lightgrey 75%),linear-gradient(135deg, transparent 75%, lightgrey 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
            onClick={handleContainerClick}>
            <div style={style}
                className={`mainBody design-container ${activeContainer === 'MAIN' ? 'design-container-active' : ''}`}
                onClick={handleContainerClick}>

                <div className={`header design-container ${activeContainer === 'HEADER' ? 'design-container-active' : ''}`}
                    style={headerStyle} onClick={handleContainerClick}>
                    <img src={headerImgSrc} style={headerImgStyle} className={'header design-container'} />
                    <div style={headerTextContainerStyle} className={'header design-container'} >
                        {headerText}
                    </div>
                </div>

                <div className={`warningMessageContainer design-container ${activeContainer === 'MESSAGE' ? 'design-container-active' : ''}`}
                    style={warningMessageStyle} onClick={handleContainerClick}>
                    {warningMessage}
                </div>

                <div className={`buttonContainer design-container ${activeContainer === 'BUTTON_CONTAINER' ? 'design-container-active' : ''}`}
                    style={buttonContainerStyle} onClick={handleContainerClick}>

                    <button className={`firstBtn design-container ${activeContainer === 'FIRST_BTN' ? 'design-container-active' : ''}`}
                        onClick={firstButtonClick} style={firstButtonStyle} onClick={handleContainerClick}>
                        {firstButtonText}
                    </button>

                    <button className={`secondBtn design-container ${activeContainer === 'SECOND_BTN' ? 'design-container-active' : ''}`}
                        onClick={secondButtonClick} style={secondButtonStyle} onClick={handleContainerClick}>
                        {secondButtonText}
                    </button>
                </div>

                <div className={`imageContainer-image design-container ${activeContainer === 'IMAGE' ? 'design-container-active' : ''}`}
                    onClick={handleContainerClick} style={imageContainerStyle}>
                    <img src={image_src} style={image_style} className='imageContainer-image' onClick={handleContainerClick} />
                </div>

                <div className={`imageContainer-mainContainer`} style={imageLayoutMsgButtonsContainerStyle}>
                    <div className={`imageContainer-warningMessageContainer design-container ${activeContainer === 'IMAGE_MSG' ? 'design-container-active' : ''}`}
                        style={imageContainerWarningMessageStyle} onClick={handleContainerClick}>
                        {warningMessage}
                    </div>

                    <div className={`imageContainer-buttonContainer design-container ${activeContainer === 'IMAGE_BUTTON_CONTAINER' ? 'design-container-active' : ''}`}
                        style={imageButtonContainerStyle} onClick={handleContainerClick}>
                        <button className={`imageContainer-firstBtn design-container ${activeContainer === 'IMAGE_FIRST_BTN' ? 'design-container-active' : ''}`}
                            onClick={firstButtonClick} style={imageFirstButtonStyle} onClick={handleContainerClick}>
                            {firstButtonText}
                        </button>

                        <button className={`imageContainer-secondBtn design-container ${activeContainer === 'IMAGE_SECOND_BTN' ? 'design-container-active' : ''}`}
                            onClick={secondButtonClick} style={imageSecondButtonStyle} onClick={handleContainerClick}>
                            {secondButtonText}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WarningDesignPrototypeComponent
