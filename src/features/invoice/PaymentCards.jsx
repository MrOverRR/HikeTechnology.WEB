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

const CARD_WIDTH = 'min-w-[140px] print:min-w-[120px] w-[140px] print:w-[120px]';

const PaymentCard = ({ title, type, number, numberLabel = 'No.', titular, badge }) => {
    const bgStyle = cardStyles[type].bg;
    const style = typeof bgStyle === 'string' && bgStyle.startsWith('linear')
        ? { background: bgStyle }
        : { backgroundColor: bgStyle };
    return (
    <div
        className={`payment-card relative p-4 print:p-3 rounded-xl border border-slate-800/50 overflow-hidden group flex-shrink-0 ${CARD_WIDTH}`}
        style={{ ...style, printColorAdjust: 'exact' }}
    >
        <div className="absolute bottom-0 left-0 right-0 w-full h-14 print:h-10 opacity-70 pointer-events-none overflow-hidden translate-y-[9px]" style={{ printColorAdjust: 'exact' }}>
            <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="xMidYMax slice" style={{ printColorAdjust: 'exact' }}>
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
            <p className="text-[9px] print:text-[8px] font-black text-white uppercase italic mb-1.5 tracking-widest flex items-center gap-1 flex-wrap">
                {title}
                {badge && (
                    <span className="text-[8px] print:text-[7px] bg-white text-black px-1.5 py-0.5 rounded-full not-italic whitespace-nowrap">
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
        <div className="flex flex-wrap gap-3 print:gap-2 justify-start">
            <PaymentCard title="Bancolombia" type="bancolombia" number="254-522771-00" numberLabel="" titular="JOSEPH YARCE" badge="Ahorros" />
            <PaymentCard title="Nequi" type="nequi" number="3223818907" numberLabel="" titular="JOSEPH YARCE" />
            <PaymentCard title="Daviplata" type="daviplata" number="3223818907" numberLabel="" titular="JOSEPH YARCE" />
        </div>
    </div>
);

export default PaymentCards;
