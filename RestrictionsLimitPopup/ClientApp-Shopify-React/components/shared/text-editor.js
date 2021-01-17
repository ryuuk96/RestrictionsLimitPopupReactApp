import React, { useCallback, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Spinner } from '@shopify/polaris';

function RichTextEditor(props) {
    const handleEditorChange = (content) => {
        props.onChange(content);
    };

    //#region Display loading graphics
    const [richTextEditorIsLoading, setRichTextEditorIsLoading] = useState(false);
    const richTextEditorLoadingMarkup = (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner accessibilityLabel="Spinner example" size="small" color="inkLightest" />
        </div>);
    //#endregion


    const showLoadingMarkup = richTextEditorIsLoading ? richTextEditorLoadingMarkup : '';

    return (
        <div>
            <Editor
                initialValue={props.value}
                apiKey={TINYMCE_API_KEY}
                init={{
                    height: 220,
                    setup: (ed) => {
                        setRichTextEditorIsLoading(true)
                        ed.on('LoadContent', () => setRichTextEditorIsLoading(false));
                    },
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount',
                        'emoticons'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic underline | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | code | emoticons | help'
                }}
                onEditorChange={handleEditorChange} />

            {showLoadingMarkup}
        </div>
    )
}

export default RichTextEditor
