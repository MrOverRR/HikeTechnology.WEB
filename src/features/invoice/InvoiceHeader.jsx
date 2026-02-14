import React from 'react';
import Input from '../../components/ui/Input';

const InvoiceHeader = ({ invoice, onUpdate, isPrinting }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                        <span className="text-yellow-400 font-black text-2xl">K</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tighter italic">KMLI TECHNOLOGY</h2>
                        <p className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase">Tech Solutions</p>
                    </div>
                </div>
                <div className="text-xs text-slate-500 font-medium space-y-1">
                    <p>Soluciones Tecnológicas e Infraestructura</p>
                    <p>NIT: 900.XXX.XXX-X</p>
                    <p>Contacto: +57 3XX XXX XXXX</p>
                </div>
            </div>

            <div className="text-right flex flex-col items-end">
                <div className="bg-yellow-400 text-black px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full mb-4 shadow-sm">
                    Cuenta de Cobro
                </div>
                <div className="text-5xl font-black text-slate-900 tracking-tighter flex items-center justify-end">
                    <span className="text-yellow-400 mr-2">#</span>
                    <Input
                        value={invoice.number}
                        onChange={(e) => onUpdate('number', e.target.value)}
                        className="w-28 text-right font-black bg-transparent"
                        disabled={isPrinting}
                        align="right"
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
