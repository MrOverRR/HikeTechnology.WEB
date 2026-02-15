import React from 'react';
import { User, CreditCard } from 'lucide-react';
import Input from '../../components/ui/Input';

const ClientInfo = ({ invoice, onUpdate, isPrinting }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4 mb-8 print:mb-3 bg-slate-50/50 p-4 print:p-2 rounded-2xl print:rounded-lg border border-slate-100">
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-700">
                    <User size={14} />
                    <p className="text-[10px] font-black uppercase tracking-widest">CLIENTE</p>
                </div>
                <Input
                    placeholder="Nombre completo del cliente"
                    className="w-full border-b border-slate-200 focus:border-[#f8b920] py-1 font-bold text-slate-800 text-lg"
                    value={invoice.clientName}
                    onChange={(e) => onUpdate('clientName', e.target.value)}
                    disabled={isPrinting}
                />
            </div>
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-700">
                    <CreditCard size={14} />
                    <p className="text-[10px] font-black uppercase tracking-widest">IDENTIFICACIÓN (NIT / C.C.)</p>
                </div>
                <Input
                    placeholder="000.000.000-0"
                    className="w-full border-b border-slate-200 focus:border-[#f8b920] py-1 font-bold text-slate-800 text-lg"
                    value={invoice.clientId}
                    onChange={(e) => onUpdate('clientId', e.target.value)}
                    disabled={isPrinting}
                />
            </div>
        </div>
    );
};

export default ClientInfo;
