import React from 'react'

export default function Input({type="text", value, name, title, handleChange}) {
    return (
        <div className="field-margin">
<label htmlFor={name}>{title}</label>
        <input type={type} name={name} value={value} onChange={(event) => handleChange(event)} />
        </div>

    )
}

