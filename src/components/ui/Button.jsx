import React from 'react';

const variants = {
    primary: "bg-slate-900 text-white hover:bg-black active:scale-95",
    secondary: "bg-[#f8b920] text-black hover:bg-[#dfa01c] animate-bounce active:scale-95",
    danger: "text-slate-300 hover:text-red-500 transition-opacity", // For Delete button
    ghost: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50", // For "Volver a Editar"
    dashed: "border-2 border-dashed border-slate-200 text-slate-400 hover:border-[#f8b920] hover:text-[#f8b920] hover:bg-[#f8b920]/10" // For Add Item
};

const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-2 text-lg",
    icon: "p-2",
    full: "w-full py-4 text-xs tracking-widest uppercase"
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    type = 'button'
}) => {
    const baseStyles = "flex items-center justify-center gap-2 rounded-xl font-bold transition-all shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    // Adjust base styles for specific variants that shouldn't have shadow or rounded-xl
    const isIcon = size === 'icon';
    const isDashed = variant === 'dashed';
    const isDanger = variant === 'danger';

    let finalBase = baseStyles;
    if (isDanger) finalBase = "flex items-center justify-center transition-all cursor-pointer";
    if (isDashed) finalBase = "flex items-center justify-center gap-2 rounded-2xl font-black transition-all cursor-pointer";

    return (
        <button
            type={type}
            className={`${finalBase} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
