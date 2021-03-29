import React from 'react';
import style from './FieldSet.module.css'

function FieldSet(props) {
    return (
        <fieldset className={style.fieldset}>
            <label htmlFor={props.id} className={style.label}>{props.children}</label>
            <input type={props.type} 
            id={props.id} 
            name={props.name}
            className={props.type === 'textarea' ? style.textarea : style.input}/>
        </fieldset>
    )
}

export default FieldSet
