import ImagePlaceholder from '../public/assets/images/graphic_uploader_placeholder.png';

function WarningLayouts() {
    var layouts = [
        {
            thumbnailSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="42" viewBox="0 0 67 42"><g transform="translate(-279 87)"><g transform="translate(279 -87)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="67" height="42" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="64" height="39" rx="3.5" fill="none" /></g><g transform="translate(289 -59)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="20" height="8" stroke="none" /><rect x="0.5" y="0.5" width="19" height="7" fill="none" /></g><g transform="translate(316 -59)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="20" height="8" stroke="none" /><rect x="0.5" y="0.5" width="19" height="7" fill="none" /></g><g transform="translate(289.291 -73.232)"><path d="M252.092,29.331c5.833-3.53,7.233-3.447,7.233-3.447s2.566-.083,2.566.52-3.772,2.5-3.772,2.5-.428.517,1.205.43,2.13-.468,3.733-1.377a15.671,15.671,0,0,1,2.8-1.463c.479-.107,1.633-.087,1.167.344s-3.636,2.26-3.636,2.26a.362.362,0,0,0,.24.415,4.728,4.728,0,0,0,2.23-.179,6.448,6.448,0,0,0,3.573-2.216s2.03-.767,1.547.161a5.808,5.808,0,0,1-1.934,1.748s-1.48.486.387.486,3.427-1.878,3.427-1.878.875-.624,1.31-.161-1.31,1.86-1.31,1.86-.233.6,2.1,0a23.686,23.686,0,0,0,2.643-.754s1.482-.184,1.015.161a13.466,13.466,0,0,1-1.257.772s2.224.263,2.755-.29,2.272-.14,2.272.29,2.224-.179,2.224-.179,1.74-.209,1.45.179,4.5-.316,3.964,0,4.254,0,4.254,0h4.3" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            layoutSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="82" viewBox="0 0 130 82"><g transform="translate(-7 -8)"><g transform="translate(7 8)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="130" height="82" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="127" height="79" rx="3.5" fill="none" /></g><g transform="translate(27 63)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(79 63)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(27.092 34.88)"><path d="M252.092,32.618c11.388-6.891,14.121-6.73,14.121-6.73s5.011-.162,5.011,1.015-7.364,4.874-7.364,4.874-.835,1.009,2.353.84,4.159-.914,7.288-2.689,4.531-2.648,5.466-2.856,3.189-.169,2.278.671-7.1,4.413-7.1,4.413a.706.706,0,0,0,.468.81c.2.115,1.434.3,4.354-.349a12.59,12.59,0,0,0,6.976-4.327s3.964-1.5,3.02.313-3.775,3.413-3.775,3.413-2.889.95.755.95,6.69-3.666,6.69-3.666,1.709-1.219,2.558-.313-2.558,3.631-2.558,3.631-.456,1.177,4.1,0a46.24,46.24,0,0,0,5.159-1.472s2.893-.359,1.982.313a26.284,26.284,0,0,1-2.454,1.507s4.341.513,5.379-.567,4.436-.274,4.436.567,4.341-.349,4.341-.349,3.4-.408,2.831.349,8.777-.617,7.739,0,8.3,0,8.3,0h8.4" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            containerStyle: {
                backgroundColor: 'white',
                backgroundColorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 1
                },
                width: '85%',
                height: '80%',
                borderRadius: '0px',
                borderColor: 'black',
                boxShadow: '4px 6px 4px #0000002b',
                display: 'flex',
                flexDirection: 'column'
            },
            headerStyle: { display: 'none', backgroundColorHSB: { hue: 0, saturation: 0, brightness: 1 }, backgroundColor: '#fff' },
            headerText: "Type your header text here",
            headerImgSrc: ImagePlaceholder,
            headerImgStyle: {
                width: '50px',
                height: '50px'
            },
            headerTextContainerStyle: {
                width: '100%',
                colorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 0
                },
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            buttonContainerStyle: {
                display: 'grid',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            firstButtonText: 'First Button',
            firstButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonText: 'Second Button',
            warningMessage: '<p>You will need to type your own message</p>',
            warningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word'
            },

            imageContainerStyle: {
                maxWidth: '50%',
                width: '50%',
                height: '100%',
                marginRight: 'auto',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image_style: {
                width: '150px',
                height: '100px'
            },
            image_src: ImagePlaceholder,
            imageLayoutMsgButtonsContainerStyle: {
                width: '50%',
                height: '100%',
                marginLeft: 'auto',
                display: 'none',
                justifyContent: 'center'
            },
            imageContainerWarningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'none',
                justifyContent: 'center'
            },
            imageButtonContainerStyle: {
                display: 'none',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            imageFirstButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            imageSecondButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        {
            thumbnailSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="41" viewBox="0 0 64 41"><g transform="translate(-121 -9)"><g transform="translate(121 9)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="64" height="41" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="61" height="38" rx="3.5" fill="none" /></g><g transform="translate(144 37)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="19" height="7" stroke="none" /><rect x="0.5" y="0.5" width="18" height="6" fill="none" /></g><g transform="translate(131.01 22.392)"><path d="M252.092,29.237c5.674-3.433,7.035-3.353,7.035-3.353s2.5-.081,2.5.506-3.669,2.428-3.669,2.428-.416.5,1.172.419,2.072-.456,3.631-1.34a15.244,15.244,0,0,1,2.723-1.423c.466-.1,1.589-.084,1.135.334s-3.537,2.2-3.537,2.2a.352.352,0,0,0,.233.4,4.6,4.6,0,0,0,2.169-.174,6.272,6.272,0,0,0,3.475-2.156s1.975-.746,1.5.156a5.649,5.649,0,0,1-1.881,1.7s-1.439.473.376.473,3.333-1.826,3.333-1.826.851-.607,1.275-.156-1.275,1.809-1.275,1.809-.227.586,2.042,0a23.036,23.036,0,0,0,2.57-.733s1.441-.179.987.156a13.1,13.1,0,0,1-1.222.751s2.163.255,2.68-.282,2.21-.136,2.21.282,2.163-.174,2.163-.174,1.693-.2,1.411.174,4.373-.308,3.855,0,4.137,0,4.137,0h4.184" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            layoutSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="82" viewBox="0 0 130 82"><g transform="translate(-151 -8)"><g transform="translate(151 8)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="130" height="82" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="127" height="79" rx="3.5" fill="none" /></g><g transform="translate(197 63)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(171.092 34.88)"><path d="M252.092,32.618c11.388-6.891,14.121-6.73,14.121-6.73s5.011-.162,5.011,1.015-7.364,4.874-7.364,4.874-.835,1.009,2.353.84,4.159-.914,7.288-2.689,4.531-2.648,5.466-2.856,3.189-.169,2.278.671-7.1,4.413-7.1,4.413a.706.706,0,0,0,.468.81c.2.115,1.434.3,4.354-.349a12.59,12.59,0,0,0,6.976-4.327s3.964-1.5,3.02.313-3.775,3.413-3.775,3.413-2.889.95.755.95,6.69-3.666,6.69-3.666,1.709-1.219,2.558-.313-2.558,3.631-2.558,3.631-.456,1.177,4.1,0a46.24,46.24,0,0,0,5.159-1.472s2.893-.359,1.982.313a26.284,26.284,0,0,1-2.454,1.507s4.341.513,5.379-.567,4.436-.274,4.436.567,4.341-.349,4.341-.349,3.4-.408,2.831.349,8.777-.617,7.739,0,8.3,0,8.3,0h8.4" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            containerStyle: {
                backgroundColor: 'white',
                backgroundColorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 1
                },
                width: '85%',
                height: '80%',
                borderRadius: '0px',
                borderColor: 'black',
                boxShadow: '4px 6px 4px #0000002b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            headerStyle: { display: 'none', backgroundColorHSB: { hue: 0, saturation: 0, brightness: 1 }, backgroundColor: '#fff' },
            headerText: "Type your header text here",
            headerImgSrc: ImagePlaceholder,
            headerImgStyle: {
                width: '50px',
                height: '50px'
            },
            headerTextContainerStyle: {
                width: '100%',
                colorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 0
                },
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            buttonContainerStyle: {
                display: 'grid',
                marginTop: 'auto',
                gridTemplateColumns: '1fr',
                marginBottom: '48px',
                columnGap: '9.6px',
                rowGap: '9.6px'
            },
            firstButtonText: 'First Button',
            firstButtonStyle: {
                width: '40%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '0px',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },

            secondButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0px',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonText: 'Second Button',

            warningMessage: '<p>You will need to type your own message</p>',
            warningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word'
            },

            imageContainerStyle: {
                width: '50%',
                height: '100%',
                marginRight: 'auto',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image_style: {
                width: '150px',
                height: '100px'
            },
            image_src: ImagePlaceholder,
            imageLayoutMsgButtonsContainerStyle: {
                width: '50%',
                height: '100%',
                marginLeft: 'auto',
                display: 'none',
                justifyContent: 'center'
            },
            imageContainerWarningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'none',
                justifyContent: 'center'
            },
            imageButtonContainerStyle: {
                display: 'none',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            imageFirstButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            imageSecondButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        {
            thumbnailSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="42" viewBox="0 0 67 42"><g transform="translate(-383 -196)"><g transform="translate(383 196)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="67" height="42" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="64" height="39" rx="3.5" fill="none" /></g><g transform="translate(407 215)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="20" height="8" stroke="none" /><rect x="0.5" y="0.5" width="19" height="7" fill="none" /></g><g transform="translate(407 226)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="20" height="8" stroke="none" /><rect x="0.5" y="0.5" width="19" height="7" fill="none" /></g><g transform="translate(393.291 204.646)"><path d="M252.092,29.331c5.833-3.53,7.233-3.447,7.233-3.447s2.566-.083,2.566.52-3.772,2.5-3.772,2.5-.428.517,1.205.43,2.13-.468,3.733-1.377a15.671,15.671,0,0,1,2.8-1.463c.479-.107,1.633-.087,1.167.344s-3.636,2.26-3.636,2.26a.362.362,0,0,0,.24.415,4.728,4.728,0,0,0,2.23-.179,6.448,6.448,0,0,0,3.573-2.216s2.03-.767,1.547.161a5.808,5.808,0,0,1-1.934,1.748s-1.48.486.387.486,3.427-1.878,3.427-1.878.875-.624,1.31-.161-1.31,1.86-1.31,1.86-.233.6,2.1,0a23.686,23.686,0,0,0,2.643-.754s1.482-.184,1.015.161a13.466,13.466,0,0,1-1.257.772s2.224.263,2.755-.29,2.272-.14,2.272.29,2.224-.179,2.224-.179,1.74-.209,1.45.179,4.5-.316,3.964,0,4.254,0,4.254,0h4.3" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            layoutSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="82" viewBox="0 0 130 82"><g transform="translate(-298 -98)"><g transform="translate(298 98)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="130" height="82" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="127" height="79" rx="3.5" fill="none" /></g><g transform="translate(344 135)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(344 156)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(318.092 114.88)"><path d="M252.092,32.618c11.388-6.891,14.121-6.73,14.121-6.73s5.011-.162,5.011,1.015-7.364,4.874-7.364,4.874-.835,1.009,2.353.84,4.159-.914,7.288-2.689,4.531-2.648,5.466-2.856,3.189-.169,2.278.671-7.1,4.413-7.1,4.413a.706.706,0,0,0,.468.81c.2.115,1.434.3,4.354-.349a12.59,12.59,0,0,0,6.976-4.327s3.964-1.5,3.02.313-3.775,3.413-3.775,3.413-2.889.95.755.95,6.69-3.666,6.69-3.666,1.709-1.219,2.558-.313-2.558,3.631-2.558,3.631-.456,1.177,4.1,0a46.24,46.24,0,0,0,5.159-1.472s2.893-.359,1.982.313a26.284,26.284,0,0,1-2.454,1.507s4.341.513,5.379-.567,4.436-.274,4.436.567,4.341-.349,4.341-.349,3.4-.408,2.831.349,8.777-.617,7.739,0,8.3,0,8.3,0h8.4" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            containerStyle: {
                backgroundColor: 'white',
                backgroundColorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 1
                },
                width: '85%',
                height: '80%',
                borderRadius: '0px',
                borderColor: 'black',
                boxShadow: '4px 6px 4px #0000002b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            headerStyle: { display: 'none', backgroundColorHSB: { hue: 0, saturation: 0, brightness: 1 }, backgroundColor: '#fff' },
            headerText: "Type your header text here",
            headerImgSrc: ImagePlaceholder,
            headerImgStyle: {
                width: '50px',
                height: '50px'
            },
            headerTextContainerStyle: {
                width: '100%',
                display: 'flex',
                colorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 0
                },
                color: '#000',
                alignItems: 'center',
                justifyContent: 'center'
            },
            buttonContainerStyle: {
                display: 'grid',
                marginTop: 'auto',
                gridTemplateRows: '1fr 1fr',
                marginBottom: '48px',
                columnGap: '9.6px',
                rowGap: '9.6px'
            },
            firstButtonText: 'First Button',
            firstButtonStyle: {
                width: '40%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonStyle: {
                width: '40%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonText: 'Second Button',

            warningMessage: '<p>You will need to type your own message</p>',
            warningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word'
            },

            imageContainerStyle: {
                width: '50%',
                height: '100%',
                marginRight: 'auto',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image_style: {
                width: '150px',
                height: '100px'
            },
            image_src: ImagePlaceholder,
            imageLayoutMsgButtonsContainerStyle: {
                width: '50%',
                height: '100%',
                marginLeft: 'auto',
                display: 'none',
                justifyContent: 'center'
            },
            imageContainerWarningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'none',
                justifyContent: 'center'
            },
            imageButtonContainerStyle: {
                display: 'none',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            imageFirstButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            imageSecondButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        {
            thumbnailSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="42" viewBox="0 0 67 42"><g transform="translate(-201 -8)"><g transform="translate(201 8)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="67" height="42" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="64" height="39" rx="3.5" fill="none" /></g><g transform="translate(237 38)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="13" height="5" stroke="none" /><rect x="0.5" y="0.5" width="12" height="4" fill="none" /></g><g transform="translate(252 38)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="12" height="5" stroke="none" /><rect x="0.5" y="0.5" width="11" height="4" fill="none" /></g><line y2="40.976" transform="translate(234.549 8.768)" fill="none" stroke="#cbcbcb" strokeWidth="2" /><g transform="translate(206 22)"><rect width="19" height="14" transform="translate(5)" fill="#e4e4e4" /><path d="M7.5,0,15,14H0Z" fill="#cbcbcb" /><circle cx="6" cy="6" r="6" transform="translate(9 2)" fill="#b4b4b4" /></g><g transform="translate(237.828 20.604)"><path d="M252.092,29.331c3.274-3.53,4.06-3.447,4.06-3.447s1.441-.083,1.441.52-2.117,2.5-2.117,2.5-.24.517.677.43,1.2-.468,2.1-1.377a8.6,8.6,0,0,1,1.572-1.463c.269-.107.917-.087.655.344s-2.041,2.26-2.041,2.26-.037.3.134.415c.057.059.412.152,1.252-.179a4.433,4.433,0,0,0,2.006-2.216s1.14-.767.868.161a4.886,4.886,0,0,1-1.085,1.748s-.831.486.217.486,1.924-1.878,1.924-1.878.491-.624.736-.161-.736,1.86-.736,1.86-.131.6,1.179,0a9.557,9.557,0,0,0,1.483-.754s.832-.184.57.161a8.464,8.464,0,0,1-.706.772s1.248.263,1.547-.29,1.275-.14,1.275.29,1.248-.179,1.248-.179.977-.209.814.179,2.524-.316,2.225,0,2.388,0,2.388,0h2.415" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            layoutSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="82" viewBox="0 0 130 82"><g transform="translate(-297 -8)"><g transform="translate(297 8)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="130" height="82" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="127" height="79" rx="3.5" fill="none" /></g><g transform="translate(368 66)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="24" height="10" stroke="none" /><rect x="0.5" y="0.5" width="23" height="9" fill="none" /></g><g transform="translate(396 66)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="24" height="10" stroke="none" /><rect x="0.5" y="0.5" width="23" height="9" fill="none" /></g><line y2="80" transform="translate(362.5 9.5)" fill="none" stroke="#cbcbcb" strokeWidth="2" /><g transform="translate(306 36)"><rect width="37" height="27" transform="translate(10)" fill="#e4e4e4" /><path d="M15,0,30,27H0Z" fill="#cbcbcb" /><circle cx="12" cy="12" r="12" transform="translate(17 3)" fill="#b4b4b4" /></g><g transform="translate(368.902 32.607)"><path d="M252.092,32.618c6.393-6.891,7.927-6.73,7.927-6.73s2.813-.162,2.813,1.015-4.134,4.874-4.134,4.874-.469,1.009,1.321.84,2.334-.914,4.092-2.689,2.543-2.648,3.069-2.856,1.79-.169,1.279.671-3.985,4.413-3.985,4.413-.073.592.263.81c.111.115.8.3,2.444-.349,2.557-1.009,3.916-4.327,3.916-4.327s2.225-1.5,1.7.313a9.54,9.54,0,0,1-2.119,3.413s-1.622.95.424.95,3.756-3.666,3.756-3.666.959-1.219,1.436-.313-1.436,3.631-1.436,3.631-.256,1.177,2.3,0a18.661,18.661,0,0,0,2.9-1.472s1.624-.359,1.113.313a16.527,16.527,0,0,1-1.378,1.507s2.437.513,3.02-.567,2.49-.274,2.49.567,2.437-.349,2.437-.349,1.907-.408,1.589.349,4.927-.617,4.344,0,4.662,0,4.662,0h4.715" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            containerStyle: {
                backgroundColor: 'white',
                backgroundColorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 1
                },
                width: '85%',
                height: '80%',
                borderRadius: '0px',
                borderColor: 'black',
                boxShadow: '4px 6px 4px #0000002b',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            },
            headerStyle: { display: 'none', backgroundColorHSB: { hue: 0, saturation: 0, brightness: 1 }, backgroundColor: '#fff' },
            headerText: "Type your header text here",
            headerImgSrc: ImagePlaceholder,
            headerImgStyle: {
                width: '50px',
                height: '50px'
            },
            headerTextContainerStyle: {
                width: '100%',
                colorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 0
                },
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            buttonContainerStyle: {
                display: 'none',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            firstButtonText: 'First Button',
            firstButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },

            secondButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonText: 'Second Button',

            warningMessage: '<p>You will need to type your own message</p>',
            warningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'none'
            },

            imageContainerStyle: {
                width: '50%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image_style: {
                width: '150px',
                height: '100px'
            },
            image_src: ImagePlaceholder,
            imageLayoutMsgButtonsContainerStyle: {
                width: '50%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            imageContainerWarningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'flex',
                justifyContent: 'center'
            },
            imageButtonContainerStyle: {
                display: 'grid',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            imageFirstButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            imageSecondButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            }

        },
        {
            thumbnailSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="65" height="42" viewBox="0 0 65 42"><g transform="translate(-7 -103)"><g transform="translate(7 103)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="65" height="42" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="62" height="39" rx="3.5" fill="none" /></g><g transform="translate(50 127)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="12" height="4" stroke="none" /><rect x="0.5" y="0.5" width="11" height="3" fill="none" /></g><g transform="translate(50 134)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="12" height="5" stroke="none" /><rect x="0.5" y="0.5" width="11" height="4" fill="none" /></g><line y2="40.407" transform="translate(40.083 103.758)" fill="none" stroke="#cbcbcb" strokeWidth="2" /><g transform="translate(12 118)"><rect width="19" height="14" transform="translate(5)" fill="#e4e4e4" /><path d="M7.5,0,15,14H0Z" fill="#cbcbcb" /><ellipse cx="6.5" cy="6" rx="6.5" ry="6" transform="translate(8 2)" fill="#b4b4b4" /></g><g transform="translate(43.316 115.429)"><path d="M252.092,29.283c3.229-3.481,4-3.4,4-3.4s1.421-.082,1.421.513-2.088,2.462-2.088,2.462-.237.509.667.424,1.179-.462,2.067-1.358a8.479,8.479,0,0,1,1.55-1.443c.265-.106.9-.085.646.339s-2.013,2.229-2.013,2.229-.037.3.133.409c.056.058.406.15,1.234-.176A4.372,4.372,0,0,0,261.69,27.1s1.124-.756.856.158a4.819,4.819,0,0,1-1.07,1.724s-.819.48.214.48,1.9-1.852,1.9-1.852.485-.616.725-.158-.725,1.834-.725,1.834-.129.594,1.162,0a9.424,9.424,0,0,0,1.463-.743s.82-.181.562.158a8.346,8.346,0,0,1-.7.761s1.231.259,1.525-.286,1.258-.138,1.258.286,1.231-.176,1.231-.176.963-.206.8.176,2.489-.312,2.194,0,2.355,0,2.355,0h2.382" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            layoutSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="82" viewBox="0 0 130 82"><g transform="translate(-7 -103)"><g transform="translate(7 103)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="130" height="82" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="127" height="79" rx="3.5" fill="none" /></g><g transform="translate(92 149)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="24" height="10" stroke="none" /><rect x="0.5" y="0.5" width="23" height="9" fill="none" /></g><g transform="translate(92 164)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="24" height="10" stroke="none" /><rect x="0.5" y="0.5" width="23" height="9" fill="none" /></g><line y2="80" transform="translate(72.5 104.5)" fill="none" stroke="#cbcbcb" strokeWidth="2" /><g transform="translate(16 131)"><rect width="37" height="27" transform="translate(10)" fill="#e4e4e4" /><path d="M15,0,30,27H0Z" fill="#cbcbcb" /><circle cx="12" cy="12" r="12" transform="translate(17 3)" fill="#b4b4b4" /></g><g transform="translate(78.902 127.607)"><path d="M252.092,32.618c6.393-6.891,7.927-6.73,7.927-6.73s2.813-.162,2.813,1.015-4.134,4.874-4.134,4.874-.469,1.009,1.321.84,2.334-.914,4.092-2.689,2.543-2.648,3.069-2.856,1.79-.169,1.279.671-3.985,4.413-3.985,4.413-.073.592.263.81c.111.115.8.3,2.444-.349,2.557-1.009,3.916-4.327,3.916-4.327s2.225-1.5,1.7.313a9.54,9.54,0,0,1-2.119,3.413s-1.622.95.424.95,3.756-3.666,3.756-3.666.959-1.219,1.436-.313-1.436,3.631-1.436,3.631-.256,1.177,2.3,0a18.661,18.661,0,0,0,2.9-1.472s1.624-.359,1.113.313a16.527,16.527,0,0,1-1.378,1.507s2.437.513,3.02-.567,2.49-.274,2.49.567,2.437-.349,2.437-.349,1.907-.408,1.589.349,4.927-.617,4.344,0,4.662,0,4.662,0h4.715" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g></g></svg>',
            containerStyle: {
                backgroundColor: 'white',
                backgroundColorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 1
                },
                width: '85%',
                height: '80%',
                borderRadius: '0px',
                borderColor: 'black',
                boxShadow: '4px 6px 4px #0000002b',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            },
            headerStyle: { display: 'none', backgroundColorHSB: { hue: 0, saturation: 0, brightness: 1 }, backgroundColor: '#fff' },
            headerText: "Type your header text here",
            headerImgSrc: ImagePlaceholder,
            headerImgStyle: {
                width: '50px',
                height: '50px'
            },
            headerTextContainerStyle: {
                width: '100%',
                colorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 0
                },
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            buttonContainerStyle: {
                display: 'none',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            firstButtonText: 'First Button',
            firstButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },

            secondButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonText: 'Second Button',

            warningMessage: '<p>You will need to type your own message</p>',
            warningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'none'
            },

            imageContainerStyle: {
                width: '50%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image_style: {
                width: '150px',
                height: '100px'
            },
            image_src: ImagePlaceholder,
            imageLayoutMsgButtonsContainerStyle: {
                width: '50%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            imageContainerWarningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'flex',
                justifyContent: 'center'
            },
            imageButtonContainerStyle: {
                width: '100%',
                display: 'grid',
                marginTop: 'auto',
                gridTemplateRows: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            imageFirstButtonStyle: {
                width: '60%',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            imageSecondButtonStyle: {

                width: '60%',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        {
            thumbnailSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="42" viewBox="0 0 67 42"><g transform="translate(-352 -8)"><g transform="translate(352 8)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="67" height="42" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="64" height="39" rx="3.5" fill="none" /></g><g transform="translate(362 38)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="20" height="8" stroke="none" /><rect x="0.5" y="0.5" width="19" height="7" fill="none" /></g><g transform="translate(389 38)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="20" height="8" stroke="none" /><rect x="0.5" y="0.5" width="19" height="7" fill="none" /></g><g transform="translate(362.193 24.189)"><path d="M252.092,29.331c6.3-3.53,7.816-3.447,7.816-3.447s2.773-.083,2.773.52-4.076,2.5-4.076,2.5-.462.517,1.3.43,2.3-.468,4.034-1.377a17.49,17.49,0,0,1,3.025-1.463c.518-.107,1.765-.087,1.261.344s-3.929,2.26-3.929,2.26a.355.355,0,0,0,.259.415,5.506,5.506,0,0,0,2.41-.179,7.008,7.008,0,0,0,3.861-2.216s2.194-.767,1.671.161a6.162,6.162,0,0,1-2.089,1.748s-1.6.486.418.486a5.843,5.843,0,0,0,3.7-1.878s.946-.624,1.416-.161-1.416,1.86-1.416,1.86-.252.6,2.269,0a27.164,27.164,0,0,0,2.855-.754s1.6-.184,1.1.161a14.817,14.817,0,0,1-1.358.772s2.4.263,2.977-.29,2.455-.14,2.455.29,2.4-.179,2.4-.179,1.88-.209,1.567.179,4.858-.316,4.283,0,4.6,0,4.6,0h4.649" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g><line x2="64.537" transform="translate(353.28 17.988)" fill="none" stroke="#cbcbcb" strokeWidth="2" /><g transform="translate(369.364 11.896)"><path d="M252.092,29.331c5.2-3.53,6.451-3.447,6.451-3.447s2.289-.083,2.289.52-3.364,2.5-3.364,2.5-.382.517,1.075.43,1.9-.468,3.33-1.377a13.473,13.473,0,0,1,2.5-1.463c.427-.107,1.457-.087,1.04.344s-3.243,2.26-3.243,2.26a.375.375,0,0,0,.214.415,3.778,3.778,0,0,0,1.989-.179,5.78,5.78,0,0,0,3.187-2.216s1.811-.767,1.38.161a5.406,5.406,0,0,1-1.725,1.748s-1.32.486.345.486,3.056-1.878,3.056-1.878.781-.624,1.169-.161-1.169,1.86-1.169,1.86-.208.6,1.873,0a19.448,19.448,0,0,0,2.357-.754s1.322-.184.905.161a11.842,11.842,0,0,1-1.121.772s1.983.263,2.457-.29,2.026-.14,2.026.29,1.983-.179,1.983-.179,1.552-.209,1.293.179,4.01-.316,3.535,0,3.794,0,3.794,0h3.837" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g><g transform="translate(356 10)" fill="#fff" stroke="#cbcbcb" strokeWidth="1.5"><circle cx="3.5" cy="3.5" r="3.5" stroke="none" /><circle cx="3.5" cy="3.5" r="2.75" fill="none" /></g><g transform="translate(358 12)"><path d="M1.5,0,3,2H0Z" fill="#cbcbcb" /><path d="M1.5,0,3,2H0Z" transform="translate(3 3) rotate(180)" fill="#cbcbcb" /></g></g></svg>',
            layoutSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="82" viewBox="0 0 130 82"><g transform="translate(-151 -103)"><g transform="translate(151 103)" fill="#fff" stroke="#cbcbcb" strokeWidth="3"><rect width="130" height="82" rx="5" stroke="none" /><rect x="1.5" y="1.5" width="127" height="79" rx="3.5" fill="none" /></g><g transform="translate(171 161)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(223 161)" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1"><rect width="39" height="16" stroke="none" /><rect x="0.5" y="0.5" width="38" height="15" fill="none" /></g><g transform="translate(170.902 134.607)"><path d="M252.092,32.618c12.306-6.891,15.259-6.73,15.259-6.73s5.415-.162,5.415,1.015-7.957,4.874-7.957,4.874-.9,1.009,2.543.84,4.494-.914,7.876-2.689,4.9-2.648,5.907-2.856,3.446-.169,2.461.671-7.671,4.413-7.671,4.413a.693.693,0,0,0,.505.81c.214.115,1.549.3,4.7-.349a13.682,13.682,0,0,0,7.538-4.327s4.283-1.5,3.263.313-4.079,3.413-4.079,3.413-3.122.95.816.95S295.9,29.3,295.9,29.3s1.847-1.219,2.765-.313-2.765,3.631-2.765,3.631-.492,1.177,4.43,0a53.036,53.036,0,0,0,5.575-1.472s3.126-.359,2.142.313a28.926,28.926,0,0,1-2.651,1.507s4.691.513,5.813-.567,4.793-.274,4.793.567,4.691-.349,4.691-.349,3.671-.408,3.059.349,9.484-.617,8.362,0,8.974,0,8.974,0h9.076" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g><g transform="translate(170.902 134.607)"><path d="M252.092,32.618c12.306-6.891,15.259-6.73,15.259-6.73s5.415-.162,5.415,1.015-7.957,4.874-7.957,4.874-.9,1.009,2.543.84,4.494-.914,7.876-2.689,4.9-2.648,5.907-2.856,3.446-.169,2.461.671-7.671,4.413-7.671,4.413a.693.693,0,0,0,.505.81c.214.115,1.549.3,4.7-.349a13.682,13.682,0,0,0,7.538-4.327s4.283-1.5,3.263.313-4.079,3.413-4.079,3.413-3.122.95.816.95S295.9,29.3,295.9,29.3s1.847-1.219,2.765-.313-2.765,3.631-2.765,3.631-.492,1.177,4.43,0a53.036,53.036,0,0,0,5.575-1.472s3.126-.359,2.142.313a28.926,28.926,0,0,1-2.651,1.507s4.691.513,5.813-.567,4.793-.274,4.793.567,4.691-.349,4.691-.349,3.671-.408,3.059.349,9.484-.617,8.362,0,8.974,0,8.974,0h9.076" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g><line x2="126" transform="translate(153.5 122.5)" fill="none" stroke="#cbcbcb" strokeWidth="2" /><g transform="translate(184.902 110.607)"><path d="M252.092,32.618c10.157-6.891,12.6-6.73,12.6-6.73s4.469-.162,4.469,1.015-6.568,4.874-6.568,4.874-.745,1.009,2.1.84,3.709-.914,6.5-2.689,4.041-2.648,4.875-2.856,2.844-.169,2.031.671-6.332,4.413-6.332,4.413a.733.733,0,0,0,.417.81c.177.115,1.279.3,3.883-.349a11.285,11.285,0,0,0,6.222-4.327s3.535-1.5,2.694.313a10.554,10.554,0,0,1-3.367,3.413s-2.577.95.673.95,5.967-3.666,5.967-3.666,1.524-1.219,2.282-.313-2.282,3.631-2.282,3.631-.406,1.177,3.657,0a37.967,37.967,0,0,0,4.6-1.472s2.58-.359,1.768.313a23.12,23.12,0,0,1-2.189,1.507s3.872.513,4.8-.567,3.956-.274,3.956.567,3.872-.349,3.872-.349,3.03-.408,2.525.349,7.828-.617,6.9,0,7.407,0,7.407,0h7.492" transform="translate(-252.092 -25.88)" fill="none" stroke="#cbcbcb" strokeWidth="2" /></g><g transform="translate(159 107)" fill="#fff" stroke="#cbcbcb" strokeWidth="1.5"><circle cx="6.5" cy="6.5" r="6.5" stroke="none" /><circle cx="6.5" cy="6.5" r="5.75" fill="none" /></g><g transform="translate(162 110)"><path d="M3.5,0,7,5H0Z" fill="#cbcbcb" /><path d="M3.5,0,7,5H0Z" transform="translate(7 7) rotate(180)" fill="#cbcbcb" /></g></g></svg>',
            containerStyle: {
                backgroundColor: 'white',
                backgroundColorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 1
                },
                width: '85%',
                height: '80%',
                borderRadius: '0px',
                borderColor: 'black',
                boxShadow: '4px 6px 4px #0000002b',
                display: 'flex',
                flexDirection: 'column'
            },

            headerStyle: { display: 'flex', flexDirection: 'row', backgroundColorHSB: { hue: 0, saturation: 0, brightness: 1 }, backgroundColor: '#fff' },
            headerText: "Type your header text here",
            headerImgSrc: ImagePlaceholder,
            headerImgStyle: {
                width: '50px',
                height: '50px'
            },
            headerTextContainerStyle: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                colorHSB: {
                    hue: 0,
                    saturation: 0,
                    brightness: 0
                },
                color: '#000'
            },

            buttonContainerStyle: {
                display: 'grid',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            firstButtonText: 'First Button',
            firstButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonStyle: {
                width: '80%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            secondButtonText: 'Second Button',
            warningMessage: '<p>You will need to type your own message</p>',
            warningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word'
            },

            imageContainerStyle: {
                maxWidth: '50%',
                width: '50%',
                height: '100%',
                marginRight: 'auto',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image_style: {
                width: '150px',
                height: '100px'
            },
            image_src: ImagePlaceholder,
            imageLayoutMsgButtonsContainerStyle: {
                width: '50%',
                height: '100%',
                marginLeft: 'auto',
                display: 'none',
                justifyContent: 'center'
            },
            imageContainerWarningMessageStyle: {
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center',
                margin: 'auto',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                wordBreak: 'break-word',
                display: 'none',
                justifyContent: 'center'
            },
            imageButtonContainerStyle: {
                display: 'none',
                marginTop: 'auto',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '9.6px',
                rowGap: '9.6px',
                marginBottom: '48px',
            },
            imageFirstButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginLeft: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 240,
                    brightness: 0.5,
                    saturation: 1,
                },
                backgroundColor: '#0000ff',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            },
            imageSecondButtonStyle: {
                width: '60%',
                minWidth: 'fit-content',
                maxWidth: '100%',
                marginRight: 'auto',
                borderRadius: '0',
                borderColor: 'transparent',
                backgroundColorHSB: {
                    hue: 120,
                    saturation: 1,
                    brightness: 0.25
                },
                backgroundColor: '#008000',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                colorHSB: {
                    hue: 0,
                    brightness: 1,
                    saturation: 0
                },
                color: '#fff',
                fontWeight: 'bold'
            }

        }
    ];
    return layouts;
}

export default WarningLayouts