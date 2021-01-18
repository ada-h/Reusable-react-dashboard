import React from 'react'  

const FormInput =  (props) =>{
    const {
        placeholder, autocorrect, defaultValue, error, disabled,
        required, type, className, name,
        }= props
        
    return (
        <div>
            <input
                type = {type ? type : 'text'}
                className = 'form-control is-valid'
                placeholder= {placeholder}
                defaultValue= {defaultValue}
                required = {required || false}
                autocorrect = {autocorrect || false}
                disabled  = {disabled || false}
                name = {name}
            />
            <div 
                style = {errorStyle} 
                className = {className}
            >
                {error}
            </div>
        </div>
        
    )
}

const errorStyle = {
    color: 'red',
}

export {FormInput}