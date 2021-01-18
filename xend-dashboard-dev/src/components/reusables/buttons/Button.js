import React from 'react'
import classnames from 'classnames';

const Button = (props) =>{
    const {children, theme, buttonAction, disabled} = props
    return(
        <button disabled={disabled} onClick={buttonAction} type="button" className={classnames("mb-2 btn mr-1", [theme])}>
            {children}
        </button> 
    )
}

export default Button