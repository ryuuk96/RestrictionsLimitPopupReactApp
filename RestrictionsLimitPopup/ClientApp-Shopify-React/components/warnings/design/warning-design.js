import { Banner, Button, Card, Checkbox, ChoiceList, ColorPicker, DropZone, hsbToHex, List, Popover, Scrollable, Stack, Subheading, TextContainer, TextField, Thumbnail } from '@shopify/polaris';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { NoteMinor } from '@shopify/polaris-icons';
import WarningLayouts from '../../../models/PopupDesignStyle';
import WarningDesignPrototypeComponent from './design-prototype';
import RichTextEditor from '../../shared/text-editor';
import ReactHtmlParser from "react-html-parser";


function WarningDesignComponent() {
    const hsbToHexColor = (hsb) => hsbToHex(hsb);

    //#region Designer Layout Settings
    var warningDesignLayouts = WarningLayouts();

    const [layoutSelectedIndex, setLayoutSelectedIndex] = useState(0);

    const [layoutSelectionPopoverActive, setLayoutSelectionPopoverActive] = useState(false);

    const layoutSelectionPopoverActivator = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={() => setLayoutSelectionPopoverActive(true)} disclosure>
                Choose
            </Button>
        </div>
    );

    const handleSelectedLayout = useCallback(
        (layoutIndex) => {
            setHideButtonGap(false);
            setLayoutSelectedIndex(layoutIndex);

            setMainContainerStyle(warningDesignLayouts[layoutIndex].containerStyle);
            setMainContainerBgColorHSB(warningDesignLayouts[layoutIndex].containerStyle.backgroundColorHSB);
            setmainContainerBorderRadius(warningDesignLayouts[layoutIndex].containerStyle.borderRadius.replace('px', ''));

            setButtonContainerStyle(warningDesignLayouts[layoutIndex].buttonContainerStyle);
            setFirstButtonStyle(warningDesignLayouts[layoutIndex].firstButtonStyle);
            setSecondButtonStyle(warningDesignLayouts[layoutIndex].secondButtonStyle);
            setWarningMessageStyle(warningDesignLayouts[layoutIndex].warningMessageStyle);

            setFirstButtonBgColorHSB(warningDesignLayouts[layoutIndex].firstButtonStyle.backgroundColorHSB);
            setFirstButtonFontColorHSB(warningDesignLayouts[layoutIndex].firstButtonStyle.colorHSB);
            setSecondButtonBgColorHSB(warningDesignLayouts[layoutIndex].secondButtonStyle.backgroundColorHSB);
            setSecondButtonFontColorHSB(warningDesignLayouts[layoutIndex].secondButtonStyle.colorHSB);

            setButtonsWidth(warningDesignLayouts[layoutIndex].firstButtonStyle.width.replace('%', ''));
            setButtonPaddingYAxis(warningDesignLayouts[layoutIndex].firstButtonStyle.paddingTop.replace('px', ''));
            setButtonsBorderRadius(warningDesignLayouts[layoutIndex].firstButtonStyle.borderRadius.replace('px', ''));
            setButtonContainerMarginBottom(warningDesignLayouts[layoutIndex].buttonContainerStyle.marginBottom.replace('px', ''));
            setButtonsGap(warningDesignLayouts[layoutIndex].buttonContainerStyle.columnGap.replace('px', ''));

            if (layoutIndex === 1) {
                setHideButtonGap(true);
            }

            setImageContainerButtonContainerStyle(warningDesignLayouts[layoutIndex].imageButtonContainerStyle);
            setImageFirstButtonStyle(warningDesignLayouts[layoutIndex].imageFirstButtonStyle);
            setImageSecondButtonStyle(warningDesignLayouts[layoutIndex].imageSecondButtonStyle);
            setImageLayoutMessageButtonsContainerStyle(warningDesignLayouts[layoutIndex].imageLayoutMsgButtonsContainerStyle);
            setImageContainerWarningMessageStyle(warningDesignLayouts[layoutIndex].imageContainerWarningMessageStyle);
            setImageSrc(warningDesignLayouts[layoutIndex].image_src);
            setImageStyle(warningDesignLayouts[layoutIndex].image_style);
            setImageContainerStyle(warningDesignLayouts[layoutIndex].imageContainerStyle);


            setImageContainerButtonsWidth(warningDesignLayouts[layoutIndex].imageFirstButtonStyle.width.replace('%', ''));
            setImageContainerButtonsPaddingYAxis(warningDesignLayouts[layoutIndex].imageFirstButtonStyle.paddingTop.replace('px', ''));
            setImageContainerButtonsBorderRadius(warningDesignLayouts[layoutIndex].imageFirstButtonStyle.borderRadius.replace('px', ''));
            setImageContainerButtonContainerMarginBottom(warningDesignLayouts[layoutIndex].imageButtonContainerStyle.marginBottom.replace('px', ''));
            setImageContainerButtonsGap(warningDesignLayouts[layoutIndex].imageButtonContainerStyle.columnGap.replace('px', ''));

            setImageContainerFirstButtonBgColorHSB(warningDesignLayouts[layoutIndex].imageFirstButtonStyle.backgroundColorHSB);
            setImageContainerFirstButtonFontColorHSB(warningDesignLayouts[layoutIndex].imageFirstButtonStyle.colorHSB);
            setImageContainerSecondButtonBgColorHSB(warningDesignLayouts[layoutIndex].imageSecondButtonStyle.backgroundColorHSB);
            setImageContainerSecondButtonFontColorHSB(warningDesignLayouts[layoutIndex].imageSecondButtonStyle.colorHSB);

            setHeaderStyle(warningDesignLayouts[layoutIndex].headerStyle);
            setHeaderBackgroundColorHSB(warningDesignLayouts[layoutIndex].headerStyle.backgroundColorHSB);
            setHeaderImgStyle(warningDesignLayouts[layoutIndex].headerImgStyle);
            setHeaderTextContainerStyle(warningDesignLayouts[layoutIndex].headerTextContainerStyle);

            setLayoutSelectionPopoverActive(false);
        },
        [],
    );

    const popupLayoutsMarkup = () => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.6em',
                backgroundColor: '#ffffff'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    rowGap: '0.3em',
                    columnGap: '0.6em'
                }}>

                    {
                        warningDesignLayouts.map((layout, index) => {
                            return (
                                <div style={{ cursor: 'pointer' }}
                                    key={index}
                                    onClick={() => handleSelectedLayout(index)}>
                                    {ReactHtmlParser(layout.layoutSvg)}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
    //#endregion

    //#region Warning message settings
    const [warningMessage, setWarningMessage] = useState(warningDesignLayouts[layoutSelectedIndex].warningMessage);
    const [warningMessageStyle, setWarningMessageStyle] = useState(warningDesignLayouts[layoutSelectedIndex].warningMessageStyle);
    const handleWarningMessageChange = useCallback(
        (value) => {
            if (!value) {
                setWarningMessage(warningDesignLayouts[layoutSelectedIndex].warningMessage);
            } else if (value == "") {
                setWarningMessage(warningDesignLayouts[layoutSelectedIndex].warningMessage);
            }
            else
                setWarningMessage(value);
        },
        [],
    );
    //#endregion

    //#region Buttons Text
    const [firstButtonText, setFirstButtonText] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonText);
    const [secondButtonText, setSecondButtonText] = useState(warningDesignLayouts[layoutSelectedIndex].secondButtonText);

    const handleFirstButtonTextOnChange = useCallback(
        (value) => {
            if (!value)
                value = warningDesignLayouts[layoutSelectedIndex].firstButtonText;
            else if (value.length == 0)
                value = warningDesignLayouts[layoutSelectedIndex].firstButtonText;
            setFirstButtonText(value);
        },
        [],
    );
    const handleSecondButtonTextOnChange = useCallback(
        (value) => {
            if (!value)
                value = warningDesignLayouts[layoutSelectedIndex].secondButtonText;
            else if (value.length == 0)
                value = warningDesignLayouts[layoutSelectedIndex].secondButtonText;
            setSecondButtonText(value);
        },
        [],
    );

    const [firstButtonFontColorHSB, setFirstButtonFontColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonStyle.colorHSB);
    const [secondButtonFontColorHSB, setSecondButtonFontColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].secondButtonStyle.colorHSB);

    const [firstButtonFontColorPopover, setFirstButtonFontColorPopover] = useState(false);
    const [secondButtonFontColorPopover, setSecondButtonFontColorPopover] = useState(false);

    const firstButtonFontActivator = (
        <Button onClick={() => setFirstButtonFontColorPopover(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(firstButtonFontColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    const secondButtonFontActivator = (
        <Button onClick={() => setSecondButtonFontColorPopover(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(secondButtonFontColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    //#endregion

    //#region Individual buttons style i.e. bg color and buttonStyle
    const [firstButtonBgColorHSB, setFirstButtonBgColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonStyle.backgroundColorHSB);
    const [secondButtonBgColorHSB, setSecondButtonBgColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].secondButtonStyle.backgroundColorHSB);

    const [firstButtonBgPopover, setFirstButtonBgPopover] = useState(false);
    const [secondButtonBgPopover, setSecondButtonBgPopover] = useState(false);

    const [firstButtonStyle, setFirstButtonStyle] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonStyle);
    const [secondButtonStyle, setSecondButtonStyle] = useState(warningDesignLayouts[layoutSelectedIndex].secondButtonStyle);

    const firstButtonBgActivator = (
        <Button onClick={() => setFirstButtonBgPopover(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(firstButtonBgColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    const secondButtonBgActivator = (
        <Button onClick={() => setSecondButtonBgPopover(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(secondButtonBgColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    //#endregion

    //#region Both buttons/Button container style i.e. width, borderRadius, button Gap, etc.
    const [buttonContainerStyle, setButtonContainerStyle] = useState(warningDesignLayouts[layoutSelectedIndex].buttonContainerStyle);

    const [buttonsWidth, setButtonsWidth] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonStyle.width.replace('%', ""));

    const [buttonsBorderRadius, setButtonsBorderRadius] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonStyle.borderRadius.replace('px', ''));

    const [buttonsGap, setButtonsGap] = useState(warningDesignLayouts[layoutSelectedIndex].buttonContainerStyle.columnGap.replace('px', ''));

    const [buttonContainerMarginBottom, setButtonContainerMarginBottom] = useState(warningDesignLayouts[layoutSelectedIndex].buttonContainerStyle.marginBottom.replace('px', ''));

    const [buttonsPaddingYAxis, setButtonPaddingYAxis] = useState(warningDesignLayouts[layoutSelectedIndex].firstButtonStyle.paddingTop.replace('px', ''));

    const [hideButtonGap, setHideButtonGap] = useState(false);
    //#endregion

    //#region Main container style
    const [mainContainerStyle, setMainContainerStyle] = useState(warningDesignLayouts[layoutSelectedIndex].containerStyle);

    const [mainContainerBgColorHSB, setMainContainerBgColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].containerStyle.backgroundColorHSB);

    const [mainContainerBgColorPopoverActive, setMainContainerBgColorPopoverActive] = useState(false);

    const [mainContainerBorderRadius, setmainContainerBorderRadius] = useState(warningDesignLayouts[layoutSelectedIndex].containerStyle.borderRadius.replace('px', ''));

    const mainContainerBgColorActivator = (
        <Button onClick={() => setMainContainerBgColorPopoverActive(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(mainContainerBgColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    //#endregion

    const acceptedImageTypes = "image/png,image/jpeg,image/jpg,image/gif";
    const validImageTypes = acceptedImageTypes.split(",");

    //#region Image Source
    const [imageSrc, setImageSrc] = useState(warningDesignLayouts[layoutSelectedIndex].image_src);
    const [uploadedImageFiles, setUploadedImageFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);
    const hasError = rejectedFiles.length > 0;

    const uploadedImageFilesMarkup = uploadedImageFiles.length > 0 && (
        <div>
            {
                uploadedImageFiles.map((file, index) => (
                    <Stack alignment="center" key={index}>
                        <Thumbnail
                            size="medium"
                            alt={file.name}
                            source={
                                validImageTypes.indexOf(file.type) > 0
                                    ? window.URL.createObjectURL(file)
                                    : NoteMinor
                            } />
                    </Stack>
                ))[0]
            }
        </div>
    );

    const fileUpload = !uploadedImageFiles.length && <DropZone.FileUpload />;

    const errorMessage = hasError && (
        <Banner
            title="Can only accept image file with size less than 20MB. The following images couldn’t be uploaded:"
            status="critical">
            <List type="bullet">
                {rejectedFiles.map((file, index) => (
                    <List.Item key={index}>
                        {`"${file.name}" is not supported. File type must be .gif, .jpg or .png`}
                    </List.Item>))}
            </List>
        </Banner>
    );
    const handleImageDrop = useCallback(
        (_dropFiles, acceptedFiles, rejectedFiles) => {
            setUploadedImageFiles((files) => [...files, ...acceptedFiles]);
            setRejectedFiles(rejectedFiles);
        },
        [],
    );
    //#endregion

    //#region Image Container
    const [imageContainerStyle, setImageContainerStyle] = useState(warningDesignLayouts[layoutSelectedIndex].imageContainerStyle);
    const [imageStyle, setImageStyle] = useState(warningDesignLayouts[layoutSelectedIndex].image_style);
    const [imageIsOnRight, setImageIsOnRight] = useState(false);
    const [imageHeight, setImageHeight] = useState(warningDesignLayouts[layoutSelectedIndex].image_style.height.replace('px', ''));
    const [imageWidth, setImageWidth] = useState(warningDesignLayouts[layoutSelectedIndex].image_style.width.replace('px', ''));

    const [imageContainerWidth, setImageContainerWidth] = useState(warningDesignLayouts[layoutSelectedIndex].imageContainerStyle.width.replace('%', ''))



    //#endregion

    //#region Image container MSG container style
    const [imageLayoutMessageButtonsContainerStyle, setImageLayoutMessageButtonsContainerStyle] = useState(warningDesignLayouts[layoutSelectedIndex].imageLayoutMsgButtonsContainerStyle);
    //#endregion

    //#region Image container message style
    const [imageContainerWarningMessageStyle, setImageContainerWarningMessageStyle] = useState(warningDesignLayouts[layoutSelectedIndex].imageContainerWarningMessageStyle);
    //#endregion

    //#region Image container button container style
    const [imageContainerButtonContainerStyle, setImageContainerButtonContainerStyle] = useState(warningDesignLayouts[layoutSelectedIndex].imageButtonContainerStyle);

    const [imageContainerButtonsWidth, setImageContainerButtonsWidth] = useState(warningDesignLayouts[layoutSelectedIndex].imageFirstButtonStyle.width.replace('%', ''));
    const [imageContainerButtonsPaddingYAxis, setImageContainerButtonsPaddingYAxis] = useState(warningDesignLayouts[layoutSelectedIndex].imageFirstButtonStyle.paddingTop.replace('px', ''));
    const [imageContainerButtonsBorderRadius, setImageContainerButtonsBorderRadius] = useState(warningDesignLayouts[layoutSelectedIndex].imageFirstButtonStyle.borderRadius.replace('px', ''));
    const [imageContainerButtonsGap, setImageContainerButtonsGap] = useState(warningDesignLayouts[layoutSelectedIndex].imageButtonContainerStyle.columnGap.replace('px', ''));
    const [imageContainerButtonContainerMarginBottom, setImageContainerButtonContainerMarginBottom] = useState(warningDesignLayouts[layoutSelectedIndex].imageButtonContainerStyle.marginBottom.replace('px', ''));

    //#endregion

    //#region Image container First Button Style
    const [imageFirstButtonStyle, setImageFirstButtonStyle] = useState(warningDesignLayouts[layoutSelectedIndex].imageFirstButtonStyle);

    const [imageContainerFirstButtonBgPopover, setImageContainerFirstButtonBgPopover] = useState(false);
    const [imageContainerFirstButtonFontColorPopover, setImageContainerFirstButtonFontColorPopover] = useState(false);

    const [imageContainerFirstButtonBgColorHSB, setImageContainerFirstButtonBgColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].imageFirstButtonStyle.backgroundColorHSB);
    const [imageContainerFirstButtonFontColorHSB, setImageContainerFirstButtonFontColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].imageFirstButtonStyle.colorHSB);

    const imageContainerFirstButtonBgActivator = (<Button onClick={() => setImageContainerFirstButtonBgPopover(true)}>
        <Stack alignment="center" spacing="tight">
            <div
                style={{
                    height: "2rem",
                    width: "2rem",
                    borderColor: "##d6d6d6",
                    borderRadius: "0.3rem",
                    background: hsbToHexColor(firstButtonBgColorHSB)
                }}
            />
        </Stack>
    </Button>);

    const imageContainerFirstButtonFontActivator = (<Button onClick={() => setImageContainerFirstButtonFontColorPopover(true)}>
        <Stack alignment="center" spacing="tight">
            <div
                style={{
                    height: "2rem",
                    width: "2rem",
                    borderColor: "##d6d6d6",
                    borderRadius: "0.3rem",
                    background: hsbToHexColor(firstButtonBgColorHSB)
                }}
            />
        </Stack>
    </Button>);
    //#endregion

    //#region Image container Second Button Style
    const [imageSecondButtonStyle, setImageSecondButtonStyle] = useState(warningDesignLayouts[layoutSelectedIndex].imageSecondButtonStyle);
    const [imageContainerSecondButtonBgPopover, setImageContainerSecondButtonBgPopover] = useState(false);
    const [imageContainerSecondButtonFontColorPopover, setImageContainerSecondButtonFontColorPopover] = useState(false);

    const [imageContainerSecondButtonBgColorHSB, setImageContainerSecondButtonBgColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].imageSecondButtonStyle.backgroundColorHSB);
    const [imageContainerSecondButtonFontColorHSB, setImageContainerSecondButtonFontColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].imageSecondButtonStyle.colorHSB);

    const imageContainerSecondButtonBgActivator = (<Button onClick={() => setImageContainerSecondButtonBgPopover(true)}>
        <Stack alignment="center" spacing="tight">
            <div
                style={{
                    height: "2rem",
                    width: "2rem",
                    borderColor: "##d6d6d6",
                    borderRadius: "0.3rem",
                    background: hsbToHexColor(firstButtonBgColorHSB)
                }}
            />
        </Stack>
    </Button>);

    const imageContainerSecondButtonFontActivator = (<Button onClick={() => setImageContainerSecondButtonFontColorPopover(true)}>
        <Stack alignment="center" spacing="tight">
            <div
                style={{
                    height: "2rem",
                    width: "2rem",
                    borderColor: "##d6d6d6",
                    borderRadius: "0.3rem",
                    background: hsbToHexColor(firstButtonBgColorHSB)
                }}
            />
        </Stack>
    </Button>);
    //#endregion


    //#region Header Style
    const [headerStyle, setHeaderStyle] = useState(warningDesignLayouts[layoutSelectedIndex].headerStyle);
    const [headerBackgroundColorHSB, setHeaderBackgroundColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].headerStyle.backgroundColorHSB);
    const [headerBgColorPopoverActive, setHeaderBgColorPopoverActive] = useState(false);

    const headerBgColorActivator = (
        <Button onClick={() => setHeaderBgColorPopoverActive(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(headerBackgroundColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    //#endregion

    //#region Header Img
    const [headerImgSrc, setHeaderImgSrc] = useState(warningDesignLayouts[layoutSelectedIndex].headerImgSrc);
    const [headerImgStyle, setHeaderImgStyle] = useState(warningDesignLayouts[layoutSelectedIndex].headerImgStyle);
    const [headerImgWidth, setHeaderImgWidth] = useState(warningDesignLayouts[layoutSelectedIndex].headerImgStyle.width.replace('px', ''));
    const [headerImgHeight, setHeaderImgHeight] = useState(warningDesignLayouts[layoutSelectedIndex].headerImgStyle.height.replace('px', ''));

    const [headerUploadedImageFiles, setHeaderUploadedImageFiles] = useState([]);
    const [headerRejectedImageFiles, setHeaderRejectedImageFiles] = useState([]);

    const headerImageHasError = headerRejectedImageFiles.length > 0;

    const headerImageFileUpload = !headerUploadedImageFiles.length && <DropZone.FileUpload />

    const headerErrorMessage = headerImageHasError && (
        <Banner
            title="Can only accept image file with size less than 20MB. The following images couldn’t be uploaded:"
            status="critical">
            <List type="bullet">
                {headerRejectedImageFiles.map((file, index) => (
                    <List.Item key={index}>
                        {`"${file.name}" is not supported. File type must be .gif, .jpg or .png`}
                    </List.Item>))}
            </List>
        </Banner>
    );

    const handleHeaderImgDrop = useCallback(
        (_dropFiles, acceptedFiles, rejectedFiles) => {
            setHeaderUploadedImageFiles((files) => [...files, ...acceptedFiles]);
            setHeaderRejectedImageFiles(rejectedFiles);
        },
        [],
    );

    const headerUploadedImageFilesMarkup = headerUploadedImageFiles.length > 0 && (
        <div>
            {
                headerUploadedImageFiles.map((file, index) => (
                    <Stack alignment="center" key={index}>
                        <Thumbnail
                            size="medium"
                            alt={file.name}
                            source={
                                validImageTypes.indexOf(file.type) > 0
                                    ? window.URL.createObjectURL(file)
                                    : NoteMinor
                            } />
                    </Stack>
                ))[0]
            }
        </div>
    );
    //#endregion

    //#region  Header Text
    const [headerText, setHeaderText] = useState(warningDesignLayouts[layoutSelectedIndex].headerText);
    const [headerTextContainerStyle, setHeaderTextContainerStyle] = useState(warningDesignLayouts[layoutSelectedIndex].headerTextContainerStyle);
    const [headerTextColorHSB, setHeaderTextColorHSB] = useState(warningDesignLayouts[layoutSelectedIndex].headerTextContainerStyle.colorHSB);

    const [headerTextColorPopoverActive, setHeaderTextColorPopoverActive] = useState(false);

    const headerTextColorActivator = (
        <Button onClick={() => setHeaderTextColorPopoverActive(true)}>
            <Stack alignment="center" spacing="tight">
                <div
                    style={{
                        height: "2rem",
                        width: "2rem",
                        borderColor: "##d6d6d6",
                        borderRadius: "0.3rem",
                        background: hsbToHexColor(headerTextColorHSB)
                    }}
                />
            </Stack>
        </Button>
    );
    //#endregion


    //#region Container selector handler
    const [mainContainerActive, setMainContainerActive] = useState(true);
    const [headerContainerActive, setHeaderContainerActive] = useState(false);
    const [messageContainerActive, setMessageContainerActive] = useState(false);
    const [buttonContainerActive, setButtonContainerActive] = useState(false);
    const [firstButtonActive, setFirstButtonActive] = useState(false);
    const [secondButtonActive, setSecondButtonActive] = useState(false);

    const [imageContainerActive, setImageContainerActive] = useState(false);
    const [imageContainerWarningMsgContainerActive, setImageContainerWarningMsgContainerActive] = useState(false);
    const [imageContainerButtonContainerActive, setImageContainerButtonContainerActive] = useState(false);
    const [imageContainerFirstBtnActive, setImageContainerFirstBtnActive] = useState(false);
    const [imageContainerSecondBtnActive, setImageContainerSecondBtnActive] = useState(false);

    const showContainerStyle = useCallback(
        (containerTag) => {
            setMainContainerActive(false);
            setHeaderContainerActive(false);
            setMessageContainerActive(false);
            setButtonContainerActive(false);
            setFirstButtonActive(false);
            setSecondButtonActive(false);
            setImageContainerActive(false);
            setImageContainerWarningMsgContainerActive(false);
            setImageContainerButtonContainerActive(false);
            setImageContainerFirstBtnActive(false);
            setImageContainerSecondBtnActive(false);


            if (containerTag === 'HEADER') {
                setHeaderContainerActive(true);
            }
            else if (containerTag === 'MAIN') {
                setMainContainerActive(true);
            }
            else if (containerTag === 'MESSAGE') {
                setMessageContainerActive(true);
            }
            else if (containerTag === 'BUTTON_CONTAINER') {
                setButtonContainerActive(true);
            }
            else if (containerTag === 'FIRST_BTN') {
                setFirstButtonActive(true);
            }
            else if (containerTag === 'SECOND_BTN') {
                setSecondButtonActive(true);
            }
            else if (containerTag === 'IMAGE') {
                setImageContainerActive(true);
            }
            else if (containerTag === 'IMAGE_MSG') {
                setImageContainerWarningMsgContainerActive(true);
            }
            else if (containerTag === 'IMAGE_BUTTON_CONTAINER') {
                setImageContainerButtonContainerActive(true);
            }
            else if (containerTag === 'IMAGE_FIRST_BTN') {
                setImageContainerFirstBtnActive(true);
            }
            else if (containerTag === 'IMAGE_SECOND_BTN') {
                setImageContainerSecondBtnActive(true);
            }
            else {
                setMainContainerActive(true);
            }
        },
        [],
    )

    const [firstButtonActionSelected, setFirstButtonActionSelected] = useState('hidden');
    const [secondButtonActionSelected, setSecondButtonActionSelected] = useState('hidden');

    const buttonActionsChoices = [
        {
            label: 'Consent button',
            value: 'YES',
            helpText: 'By clicking this the customer gives his consent before proceeding with checkout',
        },
        {
            label: 'Cancel button',
            value: 'NO',
            helpText: 'By clicking this the customer declines the condition given in the popup',
        },
        {
            label: 'Ok button',
            value: 'OK',
            helpText: 'By clicking this the customer confirms that they have read and are aware of the warning',
        },
    ];
    const getButtonActions = () => {
        if (layoutSelectedIndex !== 1)
            return buttonActionsChoices.slice(0, 2);
        return [buttonActionsChoices[2]];
    };
    const handleFirstButtonActionsChange = useCallback(
        (value) => {
            var actions = getButtonActions();
            setFirstButtonActionSelected(value);
            if (layoutSelectedIndex !== 1) {
                var remainingAction = actions.find(action => action.value !== value[0]);
                if (remainingAction)
                    setSecondButtonActionSelected([remainingAction.value]);
            }
        },
        [],
    );
    const firstButtonsActionChoiceMarkup = (<ChoiceList
        allowMultiple={false}
        title="Choose what the button must do"
        choices={getButtonActions()}
        selected={firstButtonActionSelected}
        onChange={handleFirstButtonActionsChange} />);

    const handleSecondButtonActionsChange = useCallback(
        (value) => {
            var actions = getButtonActions();
            setSecondButtonActionSelected(value);

            var remainingAction = actions.find(action => action.value !== value[0]);
            if (remainingAction)
                setFirstButtonActionSelected([remainingAction.value]);
        },
        [],
    );
    const secondButtonsActionChoiceMarkup = (<ChoiceList
        allowMultiple={false}
        title="Choose what the button must do"
        choices={getButtonActions()}
        selected={secondButtonActionSelected}
        onChange={handleSecondButtonActionsChange} />);


    const mainContainerMarkup = (<Card.Section title="Main container">
        <Stack vertical={false} alignment={'center'} spacing={'loose'}>
            <Stack.Item>
                <TextContainer>
                    Background:
                </TextContainer>

                <Popover
                    active={mainContainerBgColorPopoverActive}
                    activator={mainContainerBgColorActivator}
                    onClose={() => setMainContainerBgColorPopoverActive(false)}>
                    <ColorPicker
                        onChange={(newValue) => setMainContainerBgColorHSB(newValue)}
                        color={mainContainerBgColorHSB} />
                </Popover>
            </Stack.Item>

            <Stack.Item>
                <TextField
                    label="Border radius"
                    type="number"
                    min="0"
                    value={mainContainerBorderRadius}
                    onChange={(newValue) => setmainContainerBorderRadius(newValue)}
                    suffix="px" />
            </Stack.Item>
        </Stack>
    </Card.Section>);

    const messageContainerMarkup = (<Card.Section title="Warning message">
        <RichTextEditor value={warningMessage} onChange={handleWarningMessageChange} />
    </Card.Section>);

    const buttonGapTextFieldMarkup = () => {
        if (hideButtonGap) {
            return (<div></div>);
        }
        return (
            <TextField
                label="Button gap"
                type="number"
                min="0"
                value={buttonsGap}
                onChange={(newValue) => setButtonsGap(newValue)}
                suffix="px" />
        );
    };
    const buttonContainerMarkup = (<Card.Section title="Button styles">
        <Stack>
            <Stack.Item fill={false}>
                <TextField
                    label="Width"
                    type="number"
                    min="0"
                    max="100"
                    value={buttonsWidth}
                    onChange={(newValue) => setButtonsWidth(newValue)}
                    suffix="%" />
            </Stack.Item>
            <Stack.Item fill={false}>
                <TextField
                    label="Padding Y-axis"
                    type="number"
                    min="0"
                    value={buttonsPaddingYAxis}
                    onChange={(newValue) => setButtonPaddingYAxis(newValue)}
                    suffix="px" />
            </Stack.Item>
            <Stack.Item fill={false}>
                {buttonGapTextFieldMarkup()}
            </Stack.Item>
        </Stack>

        <br />

        <Stack >
            <Stack.Item fill={false} >
                <TextField
                    label="Border radius"
                    type="number"
                    min="0"
                    value={buttonsBorderRadius}
                    onChange={(newValue) => setButtonsBorderRadius(newValue)}
                    suffix="px" />
            </Stack.Item>
            <Stack.Item fill={false}>
                <TextField
                    label="Margin bottom"
                    type="number"
                    min="0"
                    value={buttonContainerMarginBottom}
                    onChange={(newValue) => setButtonContainerMarginBottom(newValue)}
                    suffix="px" />
            </Stack.Item>

        </Stack>
    </Card.Section>);

    const firstButtonMarkup = (<Card.Section title={`${layoutSelectedIndex !== 1 ? 'First' : 'Selected'} Button`}>
        <Stack vertical={true}>
            <Stack >
                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Background:
                    </TextContainer>

                    <Popover
                        active={firstButtonBgPopover}
                        activator={firstButtonBgActivator}
                        onClose={() => setFirstButtonBgPopover(false)}>
                        <ColorPicker
                            onChange={(colorValue) => setFirstButtonBgColorHSB(colorValue)}
                            color={firstButtonBgColorHSB} />
                    </Popover>
                </Stack>

                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Font color:
                    </TextContainer>

                    <Popover
                        active={firstButtonFontColorPopover}
                        activator={firstButtonFontActivator}
                        onClose={() => setFirstButtonFontColorPopover(false)}>
                        <ColorPicker
                            onChange={(colorValue) => setFirstButtonFontColorHSB(colorValue)}
                            color={firstButtonFontColorHSB} />
                    </Popover>
                </Stack>
            </Stack>

            {firstButtonsActionChoiceMarkup}

            <TextField
                label="Text"
                value={firstButtonText}
                onChange={handleFirstButtonTextOnChange} />
        </Stack>
    </Card.Section>);

    const secondButtonMarkup = layoutSelectedIndex !== 1 && (<Card.Section title="Second Button">
        <Stack vertical={true}>
            <Stack >
                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Background:
                    </TextContainer>

                    <Popover
                        active={secondButtonBgPopover}
                        activator={secondButtonBgActivator}
                        onClose={() => setSecondButtonBgPopover(false)}>
                        <ColorPicker
                            onChange={(colorValue) => setSecondButtonBgColorHSB(colorValue)}
                            color={secondButtonBgColorHSB} />
                    </Popover>
                </Stack>

                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Font color:
                    </TextContainer>

                    <Popover
                        active={secondButtonFontColorPopover}
                        activator={secondButtonFontActivator}
                        onClose={() => setSecondButtonFontColorPopover(false)}>
                        <ColorPicker
                            onChange={(colorValue) => setSecondButtonFontColorHSB(colorValue)}
                            color={secondButtonFontColorHSB} />
                    </Popover>
                </Stack>
            </Stack>

            {secondButtonsActionChoiceMarkup}

            <TextField
                label="Text"
                value={secondButtonText}
                onChange={handleSecondButtonTextOnChange} />
        </Stack>
    </Card.Section>);

    const imageContainerMarkup = (<Card.Section title={"Image container"}>
        <Stack vertical={true}>
            <Stack.Item>{errorMessage}</Stack.Item>
            <Stack.Item>
                <Stack alignment={'center'}>
                    <TextContainer>
                        Image
                    </TextContainer>
                    <Stack.Item>
                        <div style={{ width: 61, height: 61 }}>
                            <DropZone accept={acceptedImageTypes}
                                type={'image'}
                                onDrop={handleImageDrop}
                                label={""}
                                allowMultiple={false}>
                                {uploadedImageFilesMarkup}
                                {fileUpload}
                            </DropZone>
                        </div>
                    </Stack.Item>
                    <Checkbox
                        label="Show image on Right"
                        checked={imageIsOnRight}
                        onChange={(newChecked) => setImageIsOnRight(newChecked)} />

                </Stack>
            </Stack.Item>

            <Stack.Item>
                <Stack>
                    <Stack.Item>
                        <TextField
                            label="Image Height"
                            value={imageHeight}
                            suffix={'px'}
                            type={'number'}
                            onChange={(newValue) => setImageHeight(newValue)} />
                    </Stack.Item>
                    <Stack.Item>
                        <TextField
                            label="Image Width"
                            value={imageWidth}
                            suffix={'px'}
                            type={'number'}
                            onChange={(newValue) => setImageWidth(newValue)} />
                    </Stack.Item>
                </Stack>

            </Stack.Item>

            <Stack.Item>
                <TextField
                    label={'Container width'}
                    suffix="%"
                    type={'number'}
                    value={imageContainerWidth}
                    onChange={(newValue) => setImageContainerWidth(newValue)} />
            </Stack.Item>
        </Stack>
    </Card.Section>);

    const imageContainerWarningMsgContainerMarkup = (<Card.Section title="Warning message">
        <RichTextEditor value={warningMessage} onChange={handleWarningMessageChange} />
    </Card.Section>);

    const imageContainerButtonsGapTextFieldMarkup = () => {
        if (hideButtonGap) {
            return (<div></div>);
        }
        return (
            <TextField
                label="Button gap"
                type="number"
                min="0"
                value={imageContainerButtonsGap}
                onChange={(newValue) => setImageContainerButtonsGap(newValue)}
                suffix="px" />
        );
    };

    const imageContainerButtonContainerMarkup = (<Card.Section title="Button styles">
        <Stack>
            <Stack.Item fill={false}>
                <TextField
                    label="Width"
                    type="number"
                    min="0"
                    max="100"
                    value={imageContainerButtonsWidth}
                    onChange={(newValue) => setImageContainerButtonsWidth(newValue)}
                    suffix="%" />
            </Stack.Item>
            <Stack.Item fill={false}>
                <TextField
                    label="Padding Y-axis"
                    type="number"
                    min="0"
                    value={imageContainerButtonsPaddingYAxis}
                    onChange={(newValue) => setImageContainerButtonsPaddingYAxis(newValue)}
                    suffix="px" />
            </Stack.Item>
            <Stack.Item fill={false}>
                {imageContainerButtonsGapTextFieldMarkup()}
            </Stack.Item>
        </Stack>

        <br />

        <Stack >
            <Stack.Item fill={false} >
                <TextField
                    label="Border radius"
                    type="number"
                    min="0"
                    value={imageContainerButtonsBorderRadius}
                    onChange={(newValue) => setImageContainerButtonsBorderRadius(newValue)}
                    suffix="px" />
            </Stack.Item>
            <Stack.Item fill={false}>
                <TextField
                    label="Margin bottom"
                    type="number"
                    min="0"
                    value={imageContainerButtonContainerMarginBottom}
                    onChange={(newValue) => setImageContainerButtonContainerMarginBottom(newValue)}
                    suffix="px" />
            </Stack.Item>

        </Stack>
    </Card.Section>);

    const imageContainerFirstBtnMarkup = (<Card.Section title="First Button">
        <Stack vertical={true}>
            <Stack >
                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Background:
                    </TextContainer>

                    <Popover
                        active={imageContainerFirstButtonBgPopover}
                        activator={imageContainerFirstButtonBgActivator}
                        onClose={() => setImageContainerFirstButtonBgPopover(false)}>
                        <ColorPicker
                            onChange={(newValue) => setImageContainerFirstButtonBgColorHSB(newValue)}
                            color={imageContainerFirstButtonBgColorHSB} />
                    </Popover>
                </Stack>

                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Font color:
                    </TextContainer>

                    <Popover
                        active={imageContainerFirstButtonFontColorPopover}
                        activator={imageContainerFirstButtonFontActivator}
                        onClose={() => setImageContainerFirstButtonFontColorPopover(false)}>
                        <ColorPicker
                            onChange={(newValue) => setImageContainerFirstButtonFontColorHSB(newValue)}
                            color={imageContainerFirstButtonFontColorHSB} />
                    </Popover>
                </Stack>
            </Stack>

            {firstButtonsActionChoiceMarkup}

            <TextField
                label="Text"
                value={firstButtonText}
                onChange={handleFirstButtonTextOnChange} />
        </Stack>
    </Card.Section>);

    const imageContainerSecondBtnMarkup = (<Card.Section title="Second Button">
        <Stack vertical={true}>
            <Stack >
                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Background:
                    </TextContainer>

                    <Popover
                        active={imageContainerSecondButtonBgPopover}
                        activator={imageContainerSecondButtonBgActivator}
                        onClose={() => setImageContainerSecondButtonBgPopover(false)}>
                        <ColorPicker
                            onChange={(newValue) => setImageContainerSecondButtonBgColorHSB(newValue)}
                            color={imageContainerSecondButtonBgColorHSB} />
                    </Popover>
                </Stack>

                <Stack vertical={false} alignment={'center'}>
                    <TextContainer>
                        Font color:
                    </TextContainer>

                    <Popover
                        active={imageContainerSecondButtonFontColorPopover}
                        activator={imageContainerSecondButtonFontActivator}
                        onClose={() => setImageContainerSecondButtonFontColorPopover(false)}>
                        <ColorPicker
                            onChange={(newValue) => setImageContainerSecondButtonFontColorHSB(newValue)}
                            color={imageContainerSecondButtonFontColorHSB} />
                    </Popover>
                </Stack>
            </Stack>

            {secondButtonsActionChoiceMarkup}

            <TextField
                label="Text"
                value={secondButtonText}
                onChange={handleSecondButtonTextOnChange} />
        </Stack>
    </Card.Section>);

    const headerContainerMarkup = (<Card.Section title="Header">
        <Stack vertical spacing={'extraTight'}>
            <Stack.Item>
                {headerErrorMessage}
            </Stack.Item>
            <Stack.Item>
                <Stack alignment={'center'}>
                    <Stack.Item>
                        <div style={{ width: 61, height: 61 }}>
                            <DropZone accept={acceptedImageTypes}
                                type={'image'}
                                onDrop={handleHeaderImgDrop}
                                label={"Image"}
                                allowMultiple={false}>
                                {headerUploadedImageFilesMarkup}
                                {headerImageFileUpload}
                            </DropZone>
                        </div>
                    </Stack.Item>

                    <Stack.Item>
                        <TextField
                            label="Image Width"
                            type={'number'}
                            suffix={'px'}
                            value={headerImgWidth}
                            onChange={(newValue) => setHeaderImgWidth(newValue)} />
                    </Stack.Item>

                    <Stack.Item>
                        <TextField
                            label="Image Height"
                            type={'number'}
                            suffix={'px'}
                            value={headerImgHeight}
                            onChange={(newValue) => setHeaderImgHeight(newValue)} />
                    </Stack.Item>
                </Stack>
            </Stack.Item>
            <br/>
            <Stack.Item>
                <Stack >
                    <TextContainer>
                        Header Background:
                    </TextContainer>

                    <Popover
                        active={headerBgColorPopoverActive}
                        activator={headerBgColorActivator}
                        onClose={() => setHeaderBgColorPopoverActive(false)}>
                        <ColorPicker
                            onChange={(colorValue) => setHeaderBackgroundColorHSB(colorValue)}
                            color={headerBackgroundColorHSB} />
                    </Popover>

                    <TextContainer>
                        Font Color:
                    </TextContainer>

                    <Popover
                        active={headerTextColorPopoverActive}
                        activator={headerTextColorActivator}
                        onClose={() => setHeaderTextColorPopoverActive(false)}>
                        <ColorPicker
                            onChange={(colorValue) => setHeaderTextColorHSB(colorValue)}
                            color={headerTextColorHSB} />
                    </Popover>
                </Stack>
            </Stack.Item>

            <TextContainer>
                <Subheading>Header text</Subheading>
            </TextContainer>
            <RichTextEditor value={headerText} onChange={setHeaderText} />

        </Stack>
    </Card.Section>);

    const getHighlightedContainerConfiguration = () => {
        if (mainContainerActive) {
            return mainContainerMarkup;
        }
        else if (buttonContainerActive) {
            return buttonContainerMarkup;
        }
        else if (firstButtonActive) {
            return firstButtonMarkup;
        }
        else if (secondButtonActive) {
            return secondButtonMarkup;
        }
        else if (messageContainerActive) {
            return messageContainerMarkup;
        }
        else if (imageContainerActive) {
            return imageContainerMarkup;
        }
        else if (imageContainerWarningMsgContainerActive) {
            return imageContainerWarningMsgContainerMarkup;
        }
        else if (imageContainerButtonContainerActive) {
            return imageContainerButtonContainerMarkup;
        }
        else if (imageContainerFirstBtnActive) {
            return imageContainerFirstBtnMarkup;
        }
        else if (imageContainerSecondBtnActive) {
            return imageContainerSecondBtnMarkup;
        }
        else if (headerContainerActive) {
            return headerContainerMarkup;
        }
        else {
            return mainContainerMarkup;
        }
    };
    //#endregion


    //#region UseEffect => Buttons style
    useEffect(() => {
        var tempFirstButtonStyle = {};
        Object.assign(tempFirstButtonStyle, firstButtonStyle);
        tempFirstButtonStyle.backgroundColorHSB = firstButtonBgColorHSB;
        tempFirstButtonStyle.backgroundColor = hsbToHexColor(firstButtonBgColorHSB);
        tempFirstButtonStyle.colorHSB = firstButtonFontColorHSB;
        tempFirstButtonStyle.color = hsbToHexColor(firstButtonFontColorHSB);

        var tempSecondButtonStyle = {};
        Object.assign(tempSecondButtonStyle, secondButtonStyle);
        tempSecondButtonStyle.backgroundColorHSB = secondButtonBgColorHSB;
        tempSecondButtonStyle.backgroundColor = hsbToHexColor(secondButtonBgColorHSB);
        tempSecondButtonStyle.colorHSB = secondButtonFontColorHSB;
        tempSecondButtonStyle.color = hsbToHexColor(secondButtonFontColorHSB);

        tempFirstButtonStyle.width = `${buttonsWidth}%`
        tempFirstButtonStyle.borderRadius = `${buttonsBorderRadius}px`;
        tempFirstButtonStyle.paddingTop = `${buttonsPaddingYAxis}px`;
        tempFirstButtonStyle.paddingBottom = `${buttonsPaddingYAxis}px`;

        tempSecondButtonStyle.width = `${buttonsWidth}%`
        tempSecondButtonStyle.borderRadius = `${buttonsBorderRadius}px`;
        tempSecondButtonStyle.paddingTop = `${buttonsPaddingYAxis}px`;
        tempSecondButtonStyle.paddingBottom = `${buttonsPaddingYAxis}px`;

        setFirstButtonStyle(tempFirstButtonStyle);
        setSecondButtonStyle(tempSecondButtonStyle);

        var tempButtonContainerStyle = {};
        Object.assign(tempButtonContainerStyle, buttonContainerStyle);
        tempButtonContainerStyle.marginBottom = `${buttonContainerMarginBottom}px`
        tempButtonContainerStyle.columnGap = `${buttonsGap}px`;
        tempButtonContainerStyle.rowGap = `${buttonsGap}px`;

        setButtonContainerStyle(tempButtonContainerStyle);

    }, [
        buttonsWidth,
        buttonsBorderRadius,
        firstButtonFontColorHSB,
        firstButtonBgColorHSB,
        secondButtonBgColorHSB,
        secondButtonFontColorHSB,
        buttonContainerMarginBottom,
        buttonsPaddingYAxis,
        buttonsGap
    ]);
    //#endregion

    //#region UseEffect => Warning Popup Main container
    useEffect(() => {
        var tempMainContainerStyle = {};
        Object.assign(tempMainContainerStyle, mainContainerStyle);
        tempMainContainerStyle.backgroundColorHSB = mainContainerBgColorHSB;
        tempMainContainerStyle.backgroundColor = hsbToHexColor(mainContainerBgColorHSB);
        tempMainContainerStyle.borderRadius = `${mainContainerBorderRadius}px`;

        if (layoutSelectedIndex === 3 ||
            layoutSelectedIndex === 4) {
            if (imageIsOnRight) {
                tempMainContainerStyle.flexDirection = 'row-reverse';
            } else {
                tempMainContainerStyle.flexDirection = 'row';
            }
        }

        setMainContainerStyle(tempMainContainerStyle);
    }, [
        mainContainerBgColorHSB,
        mainContainerBorderRadius,
        imageIsOnRight]);
    //#endregion

    //#region UseEffect => Image container including image style
    useEffect(() => {
        var tempImageStyle = {};
        Object.assign(tempImageStyle, imageStyle);
        tempImageStyle.width = `${imageWidth}px`;
        tempImageStyle.height = `${imageHeight}px`;
        setImageStyle(tempImageStyle);

        if (uploadedImageFiles.length > 0) {
            var uploadedFile = uploadedImageFiles.find(file => validImageTypes.indexOf(file.type) > 0);
            if (uploadedFile)
                setImageSrc(window.URL.createObjectURL(uploadedFile));
        }

        var tempImageContainerStyle = {};
        Object.assign(tempImageContainerStyle, imageContainerStyle);
        tempImageContainerStyle.width = `${imageContainerWidth}%`;
        setImageContainerStyle(tempImageContainerStyle);

        var tempImageMessageContainerStyle = {};
        Object.assign(tempImageMessageContainerStyle, imageLayoutMessageButtonsContainerStyle);
        tempImageMessageContainerStyle.width = `${100 - imageContainerWidth}%`;
        setImageLayoutMessageButtonsContainerStyle(tempImageMessageContainerStyle);
    }, [
        uploadedImageFiles,
        imageHeight,
        imageWidth,
        imageContainerWidth
    ]);
    //#endregion

    //#region UseEffect => Image container buttons style 
    useEffect(() => {
        var tempImageContainerButtonContainerStyle = {};
        Object.assign(tempImageContainerButtonContainerStyle, imageContainerButtonContainerStyle);
        tempImageContainerButtonContainerStyle.columnGap = `${imageContainerButtonsGap}px`;
        tempImageContainerButtonContainerStyle.rowGap = `${imageContainerButtonsGap}px`;
        tempImageContainerButtonContainerStyle.marginBottom = `${imageContainerButtonContainerMarginBottom}px`
        setImageContainerButtonContainerStyle(tempImageContainerButtonContainerStyle);

        var tempImageContainerFirstButtonStyle = {};
        Object.assign(tempImageContainerFirstButtonStyle, imageFirstButtonStyle);
        tempImageContainerFirstButtonStyle.backgroundColorHSB = imageContainerFirstButtonBgColorHSB;
        tempImageContainerFirstButtonStyle.backgroundColor = hsbToHexColor(imageContainerFirstButtonBgColorHSB);
        tempImageContainerFirstButtonStyle.colorHSB = imageContainerFirstButtonFontColorHSB;
        tempImageContainerFirstButtonStyle.color = hsbToHexColor(imageContainerFirstButtonFontColorHSB);

        var tempImageContainerSecondButtonStyle = {};
        Object.assign(tempImageContainerSecondButtonStyle, imageSecondButtonStyle);
        tempImageContainerSecondButtonStyle.backgroundColorHSB = imageContainerSecondButtonBgColorHSB;
        tempImageContainerSecondButtonStyle.backgroundColor = hsbToHexColor(imageContainerSecondButtonBgColorHSB);
        tempImageContainerSecondButtonStyle.colorHSB = imageContainerSecondButtonFontColorHSB;
        tempImageContainerSecondButtonStyle.color = hsbToHexColor(imageContainerSecondButtonFontColorHSB);

        tempImageContainerFirstButtonStyle.width = `${imageContainerButtonsWidth}%`
        tempImageContainerFirstButtonStyle.borderRadius = `${imageContainerButtonsBorderRadius}px`;
        tempImageContainerFirstButtonStyle.paddingTop = `${imageContainerButtonsPaddingYAxis}px`;
        tempImageContainerFirstButtonStyle.paddingBottom = `${imageContainerButtonsPaddingYAxis}px`;

        tempImageContainerSecondButtonStyle.width = `${imageContainerButtonsWidth}%`
        tempImageContainerSecondButtonStyle.borderRadius = `${imageContainerButtonsBorderRadius}px`;
        tempImageContainerSecondButtonStyle.paddingTop = `${imageContainerButtonsPaddingYAxis}px`;
        tempImageContainerSecondButtonStyle.paddingBottom = `${imageContainerButtonsPaddingYAxis}px`;

        setImageFirstButtonStyle(tempImageContainerFirstButtonStyle);
        setImageSecondButtonStyle(tempImageContainerSecondButtonStyle);
    }, [
        imageContainerButtonsWidth,
        imageContainerButtonsPaddingYAxis,
        imageContainerButtonsBorderRadius,
        imageContainerButtonsGap,
        imageContainerButtonContainerMarginBottom,
        imageContainerSecondButtonFontColorHSB,
        imageContainerSecondButtonBgColorHSB,
        imageContainerFirstButtonFontColorHSB,
        imageContainerFirstButtonBgColorHSB,
    ]);
    //#endregion

    //#region UseEffect =>  Header Bg and Font styles
    useEffect(() => {
        //#region  Header Text Container Style
        var tempHeaderTextContainerStyle = {};
        Object.assign(tempHeaderTextContainerStyle, headerTextContainerStyle);
        tempHeaderTextContainerStyle.colorHSB = headerTextColorHSB;
        tempHeaderTextContainerStyle.color = hsbToHexColor(headerTextColorHSB);
        setHeaderTextContainerStyle(tempHeaderTextContainerStyle);
        //#endregion
        //#region Header Color Styles
        var tempHeaderStyle = {};
        Object.assign(tempHeaderStyle, headerStyle);
        tempHeaderStyle.backgroundColorHSB = headerBackgroundColorHSB;
        tempHeaderStyle.backgroundColor = hsbToHexColor(headerBackgroundColorHSB);
        setHeaderStyle(tempHeaderStyle);
        //#endregion
    }, [
        headerTextColorHSB,
        headerBackgroundColorHSB
    ]);
    //#endregion

    //#region UseEffect =>  Header Image Style
    useEffect(() => {
        var tempheaderImgStyle = {};
        Object.assign(tempheaderImgStyle, headerImgStyle);
        tempheaderImgStyle.width = `${headerImgWidth}px`
        tempheaderImgStyle.height = `${headerImgHeight}px`
        setHeaderImgStyle(tempheaderImgStyle);

        if (headerUploadedImageFiles.length > 0) {
            var uploadedFile = headerUploadedImageFiles.find(file => validImageTypes.indexOf(file.type) > 0);
            if (uploadedFile)
                setHeaderImgSrc(window.URL.createObjectURL(uploadedFile));
        }
    }, [
        headerImgWidth,
        headerImgHeight,
        headerUploadedImageFiles,
    ]);
    //#endregion


    //#region UseEffect => Prototype and Designer Settings Width setup
    const mainDesignerComponentRef = useRef(null);
    const [designerWidth, setDesignerWidth] = useState({
        width: 0,
        height: 0
    });
    const [stackIsVertical, setStackIsVertical] = useState(false);

    const getDimensions = (componentRef) => {
        return {
            width: componentRef.current.offsetWidth,
            height: componentRef.current.offsetHeight
        };
    };

    const configurePrototypeDesignerWidth = useCallback(
        () => {
            var mainDesignerContainerWidth = (getDimensions(mainDesignerComponentRef).width - 10);
            var tempDesignerWidth = mainDesignerContainerWidth / 2;
            if (tempDesignerWidth < 360) {
                tempDesignerWidth = mainDesignerContainerWidth;
                setStackIsVertical(true);
            } else {
                tempDesignerWidth = mainDesignerContainerWidth / 2;
                setStackIsVertical(false);
            }
            setDesignerWidth(tempDesignerWidth);
        },
        [],
    )

    const handleResize = () => {
        configurePrototypeDesignerWidth();
    };

    useEffect(() => {
        if (mainDesignerComponentRef.current) {
            configurePrototypeDesignerWidth();

            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [mainDesignerComponentRef])
    //#endregion

    return (
        <div ref={mainDesignerComponentRef}>
            <Stack spacing={'extraTight'} vertical={stackIsVertical}>
                <div style={{ width: `${designerWidth}px`, display: 'flex', justifyContent: 'center' }}>
                    <WarningDesignPrototypeComponent
                        style={mainContainerStyle}

                        headerStyle={headerStyle}
                        headerImgSrc={headerImgSrc}
                        headerImgStyle={headerImgStyle}
                        headerText={headerText}
                        headerTextContainerStyle={headerTextContainerStyle}

                        buttonContainerStyle={buttonContainerStyle}
                        firstButtonText={firstButtonText}
                        firstButtonStyle={firstButtonStyle}

                        secondButtonText={secondButtonText}
                        secondButtonStyle={secondButtonStyle}

                        warningMessage={warningMessage}
                        warningMessageStyle={warningMessageStyle}

                        imageContainerStyle={imageContainerStyle}
                        image_src={imageSrc}
                        image_style={imageStyle}
                        imageLayoutMsgButtonsContainerStyle={imageLayoutMessageButtonsContainerStyle}
                        imageContainerWarningMessageStyle={imageContainerWarningMessageStyle}
                        imageButtonContainerStyle={imageContainerButtonContainerStyle}
                        imageFirstButtonStyle={imageFirstButtonStyle}
                        imageSecondButtonStyle={imageSecondButtonStyle}

                        activeContainerStyle={showContainerStyle} />
                </div>
                <div style={{
                    width: `${designerWidth - 10}px`,
                    display: 'flex',
                    justifyContent: 'start',
                    marginTop: '0.6em',
                    marginLeft: '0.5em'
                }}>
                    <Stack vertical>
                        <Stack alignment={'center'}>
                            <Stack.Item fill={false} >
                                <label style={{ fontSize: '1.6rem', fontWeight: '400' }}>
                                    &nbsp;&nbsp;Layout:
                                    </label>
                            </Stack.Item>
                            <Stack.Item fill={false}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <div style={{ marginRight: '1em' }}>
                                        {ReactHtmlParser(warningDesignLayouts[layoutSelectedIndex].thumbnailSvg)}
                                    </div>
                                    <Popover
                                        active={layoutSelectionPopoverActive}
                                        activator={layoutSelectionPopoverActivator}
                                        onClose={() => setLayoutSelectionPopoverActive(false)}
                                        fluidContent={true}>
                                        {popupLayoutsMarkup()}
                                    </Popover>
                                </div>
                            </Stack.Item>
                        </Stack>

                        <Card>

                            {getHighlightedContainerConfiguration()}

                        </Card>

                    </Stack>
                </div>
            </Stack>
        </div>
    );


}

export default WarningDesignComponent
