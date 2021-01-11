import React, { Component, useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from "draft-js";
// import { render } from 'react-dom';

// const Editor = dynamic(() => import('react-draft-wysiwyg'), { ssr: false });

function TextEditorComponent() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [Editor, setEditor] = useState(null);
    // useEffect(() => {
    //     async function loadDraftEditor() {
    //         const module = await import("react-draft-wysiwyg");
    //         const Editor = module.Editor;
    //         setEditor(Editor);
    //     }
    //     window.addEventListener('load', loadDraftEditor());
    //     return () => window.removeEventListener('load', loadDraftEditor());
    // }, [])

    const uploadImageCallBack = (file) => {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID 81db5b266d22965');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    console.log(error);
                    reject(error);
                });
            }
        );
    };

    const editorToolbarConfig = {
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
    };

    const onEditorStateChange = useCallback(
        (editorState) => {
            console.log(editorState);
            setEditorState(editorState);
        },
        [],
    );

    if (!Editor)
        return (
            <div>
                Loading...
            </div>
        )
    else
        return (
            <div className='editor' style={{ width: '100%' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbar={editorToolbarConfig} />
            </div>
        );
}

export default TextEditorComponent
