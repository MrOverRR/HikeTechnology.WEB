import React from 'react';

const cardStyles = {
    bancolombia: {
        bg: '#1e1f24',
        paths: ['#FF6C37', '#f8b920', '#00C853', '#2962FF', '#AA00FF'],
    },
    nequi: {
        bg: 'linear-gradient(135deg, #1a237e 0%, #7b1fa2 100%)',
        paths: ['#283593', '#7b1fa2', '#e91e63'],
    },
    daviplata: {
        bg: 'linear-gradient(180deg, #b71c1c 0%, #c62828 70%, #d32f2f 100%)',
        paths: ['#ef5350', '#c62828', '#e53935'],
    },
};

const CARD_WIDTH = 'min-w-[200px] print:min-w-[175px] w-[200px] print:w-[175px]';

const PaymentCard = ({ title, type, number, numberLabel = 'No.', titular, badge }) => {
    const bgStyle = cardStyles[type].bg;
    const style = typeof bgStyle === 'string' && bgStyle.startsWith('linear')
        ? { background: bgStyle }
        : { backgroundColor: bgStyle };
    return (
    <div
        className={`relative p-5 print:p-4 rounded-xl border border-slate-800/50 overflow-hidden group flex-shrink-0 ${CARD_WIDTH}`}
        style={style}
    >
        <div className="absolute -bottom-6 -left-4 w-[120%] opacity-70 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 100" className="w-full h-20 print:h-14" preserveAspectRatio="none">
                {cardStyles[type].paths.map((stroke, i) => (
                    <path
                        key={i}
                        d={`M${-20 + i * 80} 100 Q ${30 + i * 80} 50 ${100 + i * 80} 80 T ${180 + i * 80} 90`}
                        stroke={stroke}
                        strokeWidth="20"
                        fill="none"
                        strokeLinecap="round"
                    />
                ))}
            </svg>
        </div>
        <div className="relative z-10">
            <p className="text-[10px] print:text-[9px] font-black text-white uppercase italic mb-2 tracking-widest flex items-center gap-1">
                {title}
                {badge && (
                    <span className="text-[9px] print:text-[8px] bg-white text-black px-2 py-0.5 rounded-full not-italic">
                        {badge}
                    </span>
                )}
            </p>
            <p className="text-lg print:text-base font-mono font-bold text-white tracking-tight">{numberLabel ? `${numberLabel} ` : ''}{number}</p>
            <p className="text-[9px] print:text-[8px] font-bold text-white/90 mt-2 uppercase">Titular: {titular}</p>
        </div>
    </div>
    );
};

const PaymentCards = () => (
    <div className="space-y-2">
        <h4 className="text-[9px] print:text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
            Información de Pago
        </h4>
        <div className="flex flex-wrap gap-4 print:gap-3">
            <PaymentCard title="Bancolombia" type="bancolombia" number="254-522771-00" titular="JOSEPH YARCE" badge="Ahorros" />
            <PaymentCard title="Nequi" type="nequi" number="3223818907" numberLabel="" titular="JOSEPH YARCE" />
            <PaymentCard title="Daviplata" type="daviplata" number="3223818907" numberLabel="" titular="JOSEPH YARCE" />
        </div>
    </div>
);

export default PaymentCards;
