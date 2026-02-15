import React from 'react';

const Input = ({
    value,
    onChange,
    placeholder,
    className = '',
    type = 'text',
    disabled = false,
    align = 'left',
    style = {}
}) => {
    const baseStyles = "bg-transparent outline-none focus:ring-0 placeholder:text-slate-300 transition-colors";
    const alignStyles = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseStyles} ${alignStyles[align]} ${className}`}
            disabled={disabled}
            style={style}
        />
    );
};

export default Input;
