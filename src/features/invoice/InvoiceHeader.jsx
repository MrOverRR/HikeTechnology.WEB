import React from 'react';
import Input from '../../components/ui/Input';

const InvoiceHeader = ({ invoice, onUpdate, isPrinting }) => {
    const numberCh = Math.max(2, String(invoice.number || '').length + 1);
    const rightBlockMinWidth = `calc(${numberCh + 2}ch)`;

    return (
        <div className="flex flex-col md:flex-row print:flex-row justify-between items-center mb-6 print:mb-3 gap-4 print:gap-3">
            <div className="flex items-center gap-1 print:gap-1 flex-shrink-0">
                {/* Altura = badge + mb-1 + número + mt-2 + fecha ≈ 123px — alineado con "CUENTA DE COBRO" hasta fin de la fecha. SVG sin fondo. */}
                <div className="h-[123px] w-52 md:w-60 print:w-52 flex-shrink-0 flex items-center justify-start">
                    <img
                        src="/Hike1_Color.svg"
                        alt="Hike Technology"
                        className="h-full w-auto object-contain object-left"
                    />
                </div>
                <div className="text-xs text-slate-600 font-medium space-y-0.5 leading-tight min-w-0">
                    <p className="font-bold text-slate-900 uppercase tracking-wide">HIKE TECHNOLOGY</p>
                    <p>NIT: 1.014.737.391-0</p>
                    <p>TEL: +57 322 381 8907</p>
                    <p>CRA 45 # 65 - 27</p>
                    <p>Bucaramanga - Colombia</p>
                    <p className="text-slate-500">hike.technology1@gmail.com</p>
                </div>
            </div>

            <div className="text-right flex flex-col items-end">
                <div
                    className="inline-flex flex-col items-center"
                    style={{ minWidth: rightBlockMinWidth }}
                >
                    <div className="bg-[#f8b920] text-black px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full mb-1 shadow-sm w-full text-center min-w-0">
                        Cuenta de Cobro
                    </div>
                    <div className="text-5xl font-black text-slate-900 tracking-tighter flex items-center justify-center gap-0 w-full">
                        <span className="text-[#f8b920] mr-1.5 flex-shrink-0">#</span>
                        <Input
                            value={invoice.number}
                            onChange={(e) => onUpdate('number', e.target.value)}
                            className="font-black bg-transparent flex-shrink-0 text-left"
                            style={{ width: `${numberCh}ch` }}
                            disabled={isPrinting}
                            align="left"
                        />
                    </div>
                </div>
                <Input
                    type="date"
                    value={invoice.date}
                    onChange={(e) => onUpdate('date', e.target.value)}
                    className="text-slate-400 font-bold mt-2 text-right bg-transparent cursor-pointer"
                    disabled={isPrinting}
                    align="right"
                />
            </div>
        </div>
    );
};

export default InvoiceHeader;
