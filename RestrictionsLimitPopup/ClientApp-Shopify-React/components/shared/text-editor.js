import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

function RichTextEditor(props) {
    const handleEditorChange = (content) => {
        props.onChange(content);
      };
    return (
        <Editor
            initialValue={props.value}
            apiKey={'rwxk9yg4f3lsl9qsk7uxlmtb8w0x7mm85evin68f31hyn3dk'}
            init={{
                height: 220,
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
    )
}

export default RichTextEditor
