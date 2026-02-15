import React from 'react';
import Input from '../../components/ui/Input';

const InvoiceHeader = ({ invoice, onUpdate, isPrinting }) => {
    return (
        <div className="flex flex-col md:flex-row print:flex-row justify-between items-start mb-10 print:mb-3 gap-6 print:gap-4">
            <div className="space-y-2">
                <div className="flex items-center justify-start">
                    <img src="/Hike1_Color.png" alt="Hike Technology" className="w-64 print:w-48 h-auto object-contain object-left" />
                </div>
                <div className="text-xs text-slate-500 font-medium space-y-1">
                    <p>Mantenimiento y reparación especializado de equipo eléctronico</p>
                    <p>NIT: 1014737391-0</p>
                    <p>Contacto: +57 322 381 8907</p>
                </div>
            </div>

            <div className="text-right flex flex-col items-end">
                <div className="bg-[#f8b920] text-black px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full mb-4 shadow-sm">
                    Cuenta de Cobro
                </div>
                <div className="text-5xl font-black text-slate-900 tracking-tighter flex items-center justify-end gap-0">
                    <span className="text-[#f8b920] mr-1.5 flex-shrink-0">#</span>
                    <Input
                        value={invoice.number}
                        onChange={(e) => onUpdate('number', e.target.value)}
                        className="font-black bg-transparent flex-shrink-0 text-left"
                        style={{ width: `${Math.max(2, String(invoice.number || '').length + 1)}ch` }}
                        disabled={isPrinting}
                        align="left"
                    />
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
