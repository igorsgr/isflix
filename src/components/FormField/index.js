import React from "react";

function FormField({ label, type, name, value, onChange }) {

    const isTypeTextArea = type === 'textarea';

    if(isTypeTextArea) {
        return (
            <div>
                <label>
                    {label}
                    <textarea
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;