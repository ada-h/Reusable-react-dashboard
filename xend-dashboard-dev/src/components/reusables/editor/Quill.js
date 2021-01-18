import React from 'react'
//Importing Quill components
import ReactQuill from 'react-quill';

// Importing Quill styles
import 'react-quill/dist/quill.snow.css';

const Editor = (props) =>{
    return(
        <ReactQuill
            onChange = {props.onChange}
            value = {props.text}
            placeholder = {'Write Something'}
            theme = {'snow'}
        />
    )
}

export default Editor