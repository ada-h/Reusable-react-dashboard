import React, {Component} from 'react'  
import classnames from 'classnames';

class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked || false
        }
    }
   render(){
    const {label, checked, onClick, type, disabled}= this.props;
    const customType = type || "checkbox";
    const customClass = customType === 'checkbox' ? 'custom-checkbox' : 'custom-radio';
    return (
        <div className={classnames('custom-control  mb-1', [customClass])}>
            <input  type={customType} className="custom-control-input" checked={checked} disabled ={disabled}/>
            <label onClick={onClick} className="custom-control-label" htmlFor="formsCheckboxChecked">{label}</label>
        </div>
        
    )
}
}


export {CheckBox}