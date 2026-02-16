import React from 'react';
import { User, CreditCard } from 'lucide-react';
import Input from '../../components/ui/Input';

const ClientInfo = ({ invoice, onUpdate, isPrinting }) => {
    const clientIdType = invoice.clientIdType ?? 'NIT';
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4 mb-8 print:mb-3 bg-slate-50/50 p-4 print:p-2 rounded-2xl print:rounded-lg border border-slate-100 text-center">
            <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 text-slate-700">
                    <User size={14} />
                    <p className="text-[10px] font-black uppercase tracking-widest">CLIENTE</p>
                </div>
                <Input
                    placeholder="Nombre completo del cliente"
                    align="center"
                    className="w-full border-b border-slate-200 focus:border-[#f8b920] py-1 font-bold text-slate-800 text-lg"
                    value={invoice.clientName}
                    onChange={(e) => onUpdate('clientName', e.target.value)}
                    disabled={isPrinting}
                />
            </div>
            <div className="space-y-1.5 flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 text-slate-700">
                    <CreditCard size={14} />
                    <p className="text-[10px] font-black uppercase tracking-widest">IDENTIFICACIÓN</p>
                </div>
                <div className="identification-field w-full max-w-sm flex items-center justify-center gap-0 border-b border-slate-200 focus-within:border-[#f8b920] transition-colors mx-auto">
                    {isPrinting ? (
                        <div className="w-full text-center font-bold text-slate-800 text-lg py-1">
                            {clientIdType} {invoice.clientId}
                        </div>
                    ) : (
                        <>
                            <select
                                value={clientIdType}
                                onChange={(e) => onUpdate('clientIdType', e.target.value)}
                                className="identification-select bg-transparent py-1 pr-1 font-bold text-slate-800 text-lg outline-none focus:ring-0 cursor-pointer border-0 text-right shrink-0 appearance-none flex-1 w-1/2"
                            >
                                <option value="NIT">NIT</option>
                                <option value="C.C.">C.C.</option>
                            </select>
                            <Input
                                placeholder="000.000.000-0"
                                className="identification-input flex-1 w-1/2 min-w-0 border-0 border-transparent focus:ring-0 focus:border-transparent py-1 pl-1 pr-0 font-bold text-slate-800 text-lg text-left"
                                value={invoice.clientId}
                                onChange={(e) => onUpdate('clientId', e.target.value)}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;
