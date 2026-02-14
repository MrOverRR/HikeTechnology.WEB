import React from 'react';
import { CreditCard } from 'lucide-react';

const InvoiceFooter = () => {
    return (
        <div className="mt-24 flex flex-col md:flex-row justify-between items-end border-t border-slate-100 pt-12 gap-12">
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-400">
                    <CreditCard size={14} />
                    <h4 className="text-[10px] font-black uppercase tracking-widest">Información de Pago</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-xs font-black text-slate-800 uppercase italic">Bancolombia - Ahorros</p>
                    <p className="text-lg font-mono font-bold text-slate-700 tracking-tighter">No. 000-000000-00</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">Titular: KMLI TECHNOLOGY</p>
                </div>
            </div>

            <div className="text-center w-full md:w-64">
                <div className="w-full h-0.5 bg-slate-900 mb-4 opacity-20"></div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 leading-none">Firma Autorizada</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">KMLI TECHNOLOGY S.A.S</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceFooter;
