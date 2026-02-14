import React from 'react';

const Card = ({ children, className = '', padding = 'p-6' }) => {
    return (
        <div className={`bg-white rounded-3xl shadow-2xl border border-slate-200 ${padding} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
