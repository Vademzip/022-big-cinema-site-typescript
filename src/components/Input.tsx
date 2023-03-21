import React, { useState } from 'react';
import '../index.css'

export enum InputType {
    Text = "text",
    Email = "email",
    Password = "password",
    Checkbox = "checkbox"
}
interface IInputProps{
    type : InputType;
    label?: string;
    id: string
}
const ColorInput = ({type, label, id} : IInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`input-wrapper ${isFocused ? 'input-focused' : ''} ${type === 'checkbox' ? 'flex-wrapper' : ''}`
        }>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default ColorInput;
